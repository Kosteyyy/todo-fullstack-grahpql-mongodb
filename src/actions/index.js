let _id = 1

export function uniqueId() {
	return _id++
}

export function fetchTasksSucceeded(tasks) {
	//action creator for dispatching all tasks into state
	return {
		type: 'FETCH_TASKS_SUCCEEDED',
		payload: {
			tasks
		}
	}
}

export async function fetchTasks(dispatch) {
	//fetches data from server
	const query = `query {
		taskList {
	    id title created status
	  }
	}`;

	const response = await fetch('/graphql', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json'},
		body: JSON.stringify({ query })
	});
	const result = await response.json();
	//dispatches data into state with dispatch
	dispatch(fetchTasksSucceeded(result.data.taskList));
}

export function createTask({ title }) { 
	return {
		type: 'CREATE_TASK',
		payload: {
			id: uniqueId(),
			title,
			created: new Date().toDateString(),
			status: 'active',
		},
	};
}

export function editTask(id, params = {}) {
	return {
		type: 'EDIT_TASK',
		payload: {
			id,
			params
		},
	};
}

export function deleteTask(id) {
	return {
		type: 'DELETE_TASK',
		payload: {
			id,
		},
	};
}