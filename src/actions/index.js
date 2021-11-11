const dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');

function jsonDateReviver(key, value) {
	if (dateRegex.test(value)) return new Date(value);
	return value;
}

async function graphQLFetch(query, variables = {}) {
	try {
		const response = await fetch('/graphql', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json'},
			body: JSON.stringify({ query, variables })
		});
		const body = await response.text();
		const result = JSON.parse(body, jsonDateReviver);

		return result.data;

	} catch (e) {
	alert(`Error in sending data to server: ${e.message}`);
	}
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

	const data = await graphQLFetch(query);
	//dispatches data into state with dispatch
	if (data) {
		dispatch(fetchTasksSucceeded(data.taskList));
	}
}

export function createTaskSucceeded( task ) { 
	//creates action
	return {
		type: 'CREATE_TASK_SUCCEEDED',
		payload: task,
	};
}

export async function createTask(dispatch, title) {
	//makes query to the server to create task
	let task = {"title": title};
	const query = `mutation taskAdd($task: TaskInputs!){
	  taskAdd(task: $task) {
    id title created status
	  }
	}`;

  const data = await graphQLFetch(query, {task});
  //fetches new task and dispatches it into state
  if (data) {
  	dispatch(createTaskSucceeded(data.taskAdd));
  }
	
}

export function editTaskSucceeded(id, changes = {}) {
	//creates action for edit task in state
	return {
		type: 'EDIT_TASK_SUCCEEDED',
		payload: {
			id,
			changes
		},
	};
}

export async function editTask(dispatch, id, changes = {}) {
	//send query to the server to update task
	const query = `mutation taskUpdate($id: Int!, $changes: TaskUpdateInputs!) {
	  taskUpdate(id: $id, changes: $changes) {
    title status
	  }
	}`;
	//gets updated task from server and dispatches changes to state
	const data = await graphQLFetch(query, { id, changes });
	if (data) {
		dispatch(editTaskSucceeded(id, data.taskUpdate));
	}
}

export function deleteTaskSucceeded(id) {
	return {
		type: 'DELETE_TASK_SUCCEEDED',
		payload: {
			id,
		},
	};
}

export async function deleteTask(dispatch, id) {
	const query = `mutation deleteTask($id: Int!) {
	  taskDelete(id: $id) 
	}`;

	const data = await graphQLFetch(query, { id });
	if (data && data.taskDelete) {
		dispatch(deleteTaskSucceeded(id));
	}
}
