import React, { useState } from 'react';
import { AddTaskButton } from './styles.js';
import { NewTaskForm } from './NewTaskForm.jsx';

const AddTask = ({ onAdd, validateTask }) => {
	const [showForm, setShowForm] = useState(false);

	if (showForm) {
		return (
			<NewTaskForm
				onAdd={text => {
					onAdd(text);
					setShowForm(false);
				}}
				onCancel={() => setShowForm(false)}
				validateTask={validateTask}
			/>
		)
	}

	return (
		<AddTaskButton onClick={() => setShowForm(true)}>+ AddTask</AddTaskButton>
	);
}

export default AddTask;