const fs = require('fs');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');
const { MongoClient } = require('mongodb');
const DB_URL = require("./db_access.js");

//const url = 'mongodb://localhost/taskapp';
const url = DB_URL; //url for MongoAtlas
const PORT = process.env.PORT || 3000;  //port for deploy or localhost

let db;

let aboutMessage = "ToDo app API v1.0"; 

//Type for date in GraphQL
const GraphQLDate = new GraphQLScalarType({
	name: 'GraphQLDate',
	description: 'A Date() type in GraphQL as a scalar',
	serialize(value) {
		return value.toISOString();
	},
	parseValue(value) {
		return new Date(value);
	},
	parseLiteral(ast) {
		return (ast.kind == Kind.STRING) ? new Date(ast.value) : undefined;
	},
});

const resolvers = {
	Query: {
		about: () => aboutMessage,
		taskList,
	},
	Mutation: {
		setAboutMessage,
		taskAdd,
		taskUpdate,
		taskDelete,
	},
	GraphQLDate,
};

//functionality for resolvers

function setAboutMessage(_, { message }) {
	return aboutMessage = message;
}

async function taskList() {
	const tasks = await db.collection('tasks').find({}).toArray();
	return tasks;
}

async function getNextId(name) {
	//finds counter with given name and increase by 1 - gets next id for tasks
	const result = await db.collection('counters').findOneAndUpdate(
		{ _id: name },
		{ $inc: { current: 1 } },
		{ returnOriginal: false },
	);
	return result.value.current;
}

async function taskAdd(_, { task }) {
	let currentDate = task.created;
	task.created = new Date(currentDate);
	task.id = await getNextId('tasks');
	task.status = 'active';
	const result = await db.collection('tasks').insertOne(task);
	const savedTask = await db.collection('tasks').findOne({ _id: result.insertedId });
	return savedTask;
}

async function taskUpdate(_, { id, changes }) {
	if (changes.title || changes.status) {
		const task = await db.collection('tasks').findOne({ id });
		Object.assign(task, changes);
	}
	await db.collection('tasks').updateOne({ id }, { $set: changes });
	const savedTask = await db.collection('tasks').findOne({ id });
	return savedTask;
}

async function taskDelete(_, { id }) {
	const task = await db.collection('tasks').findOne({ id });
	if (!task) return false;
	task.deleted = new Date();
	let result = await db.collection('deleted_tasks').insertOne(task);
	if (result.insertedId) {
		result = await db.collection('tasks').removeOne({ id });
		return result.deletedCount === 1;
	}
	return false;
}

async function connectToDb() {
	const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
	await client.connect();
	console.log('Connected to MongoDB at', url);
	db = client.db();
}

const server = new ApolloServer({
	typeDefs: fs.readFileSync('./server/schema.graphql', 'utf-8'),
	resolvers,
});

const app = express();

app.use(express.static('public'));

server.applyMiddleware({ app, path: '/graphql' });
(async function () {
	try {
		await connectToDb();
		app.listen(PORT, function () {
			console.log(`App started on port ${PORT}`);
		});
	} catch (err) {
		console.log('Error: ', err);
	}
})();