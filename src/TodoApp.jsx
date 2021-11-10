import React, { useEffect, useState } from 'react';
import { TasksContainer, TasksTitle } from './styles.js';
import { useDispatch, useSelector } from 'react-redux';
import TaskFooter from './TaskFooter.jsx';
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';

const sampleTask = {
	status: "active",
	title: "Make ToDo App",
	date: "2021-10-15",
}

export default function TodoApp () {
		const dispatch = useDispatch();
		const tasks = useSelector(state => state.tasks);
		const [activeTasksCount, setActiveTasksCount] = useState(0);

		console.log("tasks: ", tasks);

		useEffect(() => {setActiveTasksCount(
			tasks.reduce((total, task) => (task.status==="completed" ? total : total + 1), 0)
			);
			console.log("useEffect")}, [tasks]);
		console.log("tasks count: ", activeTasksCount);

	
		return (
			<TasksContainer>
				<TasksTitle>ToDo</TasksTitle>
				<AddTask onAdd={console.log}/>
				<TaskList tasks={tasks} />
				<TaskFooter taskCount={activeTasksCount} />
			</TasksContainer>	
		)
}
