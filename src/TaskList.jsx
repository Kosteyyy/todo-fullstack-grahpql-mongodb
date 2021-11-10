import React from 'react';
import { Task } from './Task.jsx';

export default function TaskList ({ tasks }) {
	return (
		<>
			{tasks.map((task, item) => <Task key={item} task={task} />)}
		</> 
	)
}
//