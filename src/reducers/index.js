import { uniqueId } from '../actions/index.js'

export default function TasksReducer(state = { tasks: [] }, action) {
	switch (action.type) {
		case 'FETCH_TASKS_SUCCEEDED': 
			return { tasks: action.payload.tasks };
		case 'CREATE_TASK_SUCCEEDED':
		  return { tasks: state.tasks.concat(action.payload)};
		case 'EDIT_TASK_SUCCEEDED': 
			return {
			  tasks: state.tasks.map(task => {
				 	if (task.id === action.payload.id) {
				 		return Object.assign({}, task, action.payload.changes);
				 	}
				 	return task;
			  })
			};
		case 'DELETE_TASK_SUCCEEDED':
			return {tasks: state.tasks.filter(task => task.id !== action.payload.id)};
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