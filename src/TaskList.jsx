import React from 'react';
import { Task } from './Task.jsx';

export default function TaskList ({ tasks, onEditTask, onDeleteTask, showDate }) {
	return (
		<>
			{tasks.map((task, item) => <Task 
				key={item}
				task={task}
				onEditTask={onEditTask}
				onDeleteTask={onDeleteTask}
				showDate={showDate}
			/>)}
		</> 
	)
}
//