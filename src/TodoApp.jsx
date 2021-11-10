import React, { useEffect, useState } from 'react';
import { TasksContainer, TasksTitle, Help } from './styles.js';
import { useDispatch, useSelector } from 'react-redux';
import TaskFooter from './TaskFooter.jsx';
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';
import { createTask, editTask, deleteTask, fetchTasks } from './actions'

export default function TodoApp () {
		const dispatch = useDispatch();
		const tasks = useSelector(state => state.tasks);
		const [activeTasksCount, setActiveTasksCount] = useState(0); //counts active tasks
		const [taskFilter, setTaskFilter] = useState('All');	//filter criteria All-Active-Completed
		const [shownTasks, setShownTasks] = useState(tasks); //filtered tasks array
		const [showDate, setShowDate] = useState(false); //defines if dates are rendered in tasks (more space on mobile devices)

		useEffect(() => fetchTasks(dispatch), []); //load data from server on mounting app

		//sets filter value when filter button in Filter clicked
		const setFilter = (filter) => {
			setTaskFilter(filter);
		}

		//apply filter when tasks or filter changes by filtering showed tasks
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
		
		//toggles visibility of Dates in tasks when clicked in TaskFooter
		//(default dates are off to clear space for mobile devices)
		const onChangeShowDate = () => {
			setShowDate(!showDate);
		}

		//Used in AddTask -> NewTaskForm
		const onCreateTask = (title) => {
			dispatch(createTask({ title }));
		}

		//Used in TaskList -> Task
		const onEditTask = (id, status, title) => {
			dispatch(editTask(id, { status, title }));
		}

		//Used in TaskList -> Task
		const onDeleteTask = (id) => {
			dispatch(deleteTask(id));
		}

		//Used in AddTask -> NewTaskForm to prevent adding similar tasks
		const validateTaskTitle = (title) => {
			let valid = true;
			for (let item of tasks) {
				if (item.title == title) {return false;}
			}
			return true;
		}

		//Counts active tasks when tasks changes. Counter used in TaskFooter
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
