let _id = 1

export function uniqueId() {
	return _id++
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