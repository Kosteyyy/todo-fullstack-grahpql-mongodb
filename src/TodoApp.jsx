import React, { useEffect, useState } from 'react';
import { TasksContainer, TasksTitle, Help } from './styles.js';
import { useDispatch, useSelector } from 'react-redux';
import TaskFooter from './TaskFooter.jsx';
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';
import { createTask, editTask, deleteTask } from './actions'

export default function TodoApp () {
		const dispatch = useDispatch();
		const tasks = useSelector(state => state.tasks);
		const [activeTasksCount, setActiveTasksCount] = useState(0);
		const [taskFilter, setTaskFilter] = useState('All');
		const [shownTasks, setShownTasks] = useState(tasks);
		const [showDate, setShowDate] = useState(false);

		const setFilter = (filter) => {
			setTaskFilter(filter);
		}

		const onChangeShowDate = () => {
			setShowDate(!showDate);
		}

		useEffect(() => {
			if (taskFilter === 'All') {
				setShownTasks(tasks);
				return
			} else if (taskFilter === 'Active') {
				setShownTasks(tasks.filter(task => task.status==='active'));
			} else if (taskFilter === 'Completed') {
				setShownTasks(tasks.filter(task => task.status==='completed'));
			}
		}, [tasks, taskFilter]);
		

		const onCreateTask = (title) => {
			dispatch(createTask({ title }));
		}

		const onEditTask = (id, status, title) => {
			dispatch(editTask(id, { status, title }));
		}

		const onDeleteTask = (id) => {
			dispatch(deleteTask(id));
		}

		const validateTaskTitle = (title) => {
			let valid = true;
			for (let item of tasks) {
				if (item.title == title) {return false;}
			}
			return true;
		}

		useEffect(() => {setActiveTasksCount(
			tasks.reduce((total, task) => (task.status==="completed" ? total : total + 1), 0)
			)}, [tasks]);


	
		return (
			<TasksContainer>
				<TasksTitle>ToDo</TasksTitle>
				<AddTask onAdd={onCreateTask} validateTask={validateTaskTitle}/>
				<TaskList tasks={shownTasks} onEditTask={onEditTask} onDeleteTask={onDeleteTask} showDate={showDate}/>
				<TaskFooter taskCount={activeTasksCount} setFilter={setFilter} showDate={showDate} onChangeShowDate={onChangeShowDate}/>
				<Help>Doubleclick to edit Task</Help>
			</TasksContainer>	
		)
}
