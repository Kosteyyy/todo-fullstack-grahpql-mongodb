import React, { useEffect, useState } from 'react';
import { TasksContainer, TasksTitle, Help } from './styles.js';
import { useDispatch, useSelector } from 'react-redux';
import TaskFooter from './TaskFooter.jsx';
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';
import { Text, Button, ScrollView, View } from 'react-native';
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
			(createTask(dispatch, title));
		}

		//Used in TaskList -> Task
		const onEditTask = (id, status, title) => {
			editTask(dispatch, id, { status, title });
		}

		//Used in TaskList -> Task
		const onDeleteTask = (id) => {
			deleteTask(dispatch, id);
		}

		//Used in AddTask -> NewTaskForm to prevent adding similar tasks
		const validateTaskTitle = (title, id) => {
			let valid = true;
			for (let item of tasks) {
				if (item.title.trim() === title.trim()) {
					if (!id) { //if new task has same title
						return false;
					} else if (id != item.id) { //if edited task has other id but same title
						return false;
					}
				}
			}
			return true;
		}

		//Counts active tasks when tasks changes. Counter used in TaskFooter
		useEffect(() => {setActiveTasksCount(
			tasks.reduce((total, task) => (task.status==="completed" ? total : total + 1), 0)
			)}, [tasks]);

		return (
			<View style={{maxHeight: "100%", minWidth: 360, width: 800, maxWidth: "100%"}}>
			<ScrollView scrollEnabled={true} style={{maxHeight: "100%", margin: "0px auto"}} >	
				<TasksContainer>
					<TasksTitle>ToDo</TasksTitle>
					<AddTask 
						onAdd={onCreateTask}
						validateTask={validateTaskTitle}
					/>
					<TaskList 
						tasks={shownTasks} 
						onEditTask={onEditTask}
						onDeleteTask={onDeleteTask}
						showDate={showDate}
						validateTask={validateTaskTitle}
					/>
					<TaskFooter
						taskCount={activeTasksCount}
						setFilter={setFilter}
						showDate={showDate}
						onChangeShowDate={onChangeShowDate}
					/>
					<Help>Click Task to edit</Help>
				</TasksContainer>	
			</ScrollView>
			</View>
		)
}
