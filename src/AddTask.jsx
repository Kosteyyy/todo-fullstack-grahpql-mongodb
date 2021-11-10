import React, { useState } from 'react';
import { AddTaskButton } from './styles.js';
import { NewTaskForm } from './NewTaskForm.jsx';

const AddTask = ({ onAdd }) => {
	const [showForm, setShowForm] = useState(false);

	if (showForm) {
		return (
			<NewTaskForm
				onAdd={text => {
					onAdd(text);
					setShowForm(false);
				}}
				onCancel={() => setShowForm(false)}
			/>
		)
	}

	return (
		<AddTaskButton onClick={() => setShowForm(true)}>+ AddTask</AddTaskButton>
	);
}

export default AddTask;