// Service script that clears DB and whrite initial data in DB
// Run using Mongo SVGFEMorphologyElement
// localhost: 
// 	mongo taskapp scripts/init.mongo.js
// Atlas: 
// mongo mongodb+srv://Kosteyyy:Kosteyyy1@cluster0.nru2m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

db.tasks.remove({});
db.deleted_tasks.remove({});

const tasksDB = [
		{	
			id: 1,
			status: "active",
			title: "Fix bug in line 9",
			created: new Date('2019-01-15'),
		},
		{	
			id: 2,
			status: "completed",
			title: "Develop ToDo application",
			created: new Date('2019-01-15'),
		},
		{	
			id: 3,
			status: "active",
			title: "Hide dates for tasks",
			created: new Date('2019-01-15'),
		},
		{	
			id: 4,
			status: "active",
			title: "Add filter funcionality",
			created: new Date('2019-01-15'),
		},
		{	
			id: 5,
			status: "active",
			title: "Test functionality",
			created: new Date('2019-01-15'),
		},
		{	
			id: 6,
			status: "completed",
			title: "Check deployment",
			created: new Date('2019-01-15'),
		},
];

db.tasks.insertMany(tasksDB);
const count = db.tasks.count();
print('Added ', count, 'tasks');

db.counters.remove({ _id: 'tasks' });
//counters _id='tasks' holds current lask id(count) of tasks after initialization
db.counters.insert({ _id: 'tasks', current: count }); 
db.tasks.createIndex({ id: 1 }, { unique: true });
db.tasks.createIndex({ status: 1 });
db.tasks.createIndex({ created: 1 });
db.deleted_tasks.createIndex({ id: 1 }, { unique: true });