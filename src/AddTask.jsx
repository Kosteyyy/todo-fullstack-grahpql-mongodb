import React, { useState } from 'react';
import { AddTaskButton } from './styles.js';
import { NewTaskForm } from './NewTaskForm.jsx';
import { Button, View } from 'react-native';

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
		<View style={{ marginBottom: 10 }}>
					<Button onPress={() => setShowForm(true)}title="+ AddTask" />
		</View>

	);
}

export default AddTask;