const fs = require('fs');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { GraphQLScalarType } = require('graphql');

let aboutMessage = "ToDo app API v1.0";

const tasksDB = [
		{	
			id: 1,
			status: "active",
			title: "Fix bug in line 8",
			created: "2020-09-15",
		},
		{	
			id: 2,
			status: "completed",
			title: "Develop ToDo application",
			created: "2021-06-17",
		},
		{	
			id: 3,
			status: "active",
			title: "Hide dates for tasks",
			created: "2021-10-17",
		},
		{	
			id: 4,
			status: "active",
			title: "Add filter funcionality",
			created: "2021-10-17",
		},
		{	
			id: 5,
			status: "active",
			title: "Test functionality",
			created: "2021-10-17",
		},
		{	
			id: 6,
			status: "completed",
			title: "Check deployment",
			created: "2021-10-17",
		},
];

const GraphQLDate = new GraphQLScalarType({
	name: 'GraphQLDate',
	description: 'A Date() type in GraphQL as a scalar',
	serialize(value) {
		return value.toISOString();
	},
});

const resolvers = {
	Query: {
		about: () => aboutMessage,
		taskList,
	},
	Mutation: {
		setAboutMessage,
	},
};

function setAboutMessage(_, { message }) {
	return aboutMessage = message;
}

function taskList() {
	return tasksDB;
}

const server = new ApolloServer({
	typeDefs: fs.readFileSync('./server/schema.graphql', 'utf-8'),
	resolvers,
});

const app = express();

app.use(express.static('public'));

server.applyMiddleware({ app, path: '/graphql' });

app.listen(3000, function () {
	console.log('App started on port 3000');
});