import { uniqueId } from '../actions/index.js'

const initialState = {
	tasks: [
		{	
			id: uniqueId(),
			status: "active",
			title: "Fix bug in line 8",
			created: "2020-09-15",
		},
		{	
			id: uniqueId(),
			status: "completed",
			title: "Develop ToDo application",
			created: "2021-06-17",
		},
		{	
			id: uniqueId(),
			status: "active",
			title: "Hide dates for tasks",
			created: "2021-10-17",
		},
		{	
			id: uniqueId(),
			status: "active",
			title: "Add filter funcionality",
			created: "2021-10-17",
		},
		{	
			id: uniqueId(),
			status: "active",
			title: "Test functionality",
			created: "2021-10-17",
		},
		{	
			id: uniqueId(),
			status: "completed",
			title: "Check deployment",
			created: "2021-10-17",
		},
]};


export default function TasksReducer(state = initialState, action) {
	switch (action.type) {
		case 'CREATE_TASK': 
			return { tasks: state.tasks.concat(action.payload) };
		case 'EDIT_TASK': 
			return {
			  tasks: state.tasks.map(task => {
				 	if (task.id === action.payload.id) {
				 		return Object.assign({}, task, action.payload.params);
				 	}
				 	return task;
			  })
			};
		case 'DELETE_TASK':
			return {tasks: state.tasks.filter(task => task.id !== action.payload.id)};
		default: return state;
	}
}