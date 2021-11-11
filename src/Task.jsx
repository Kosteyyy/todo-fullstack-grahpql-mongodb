import React, { useState } from 'react';
import { TaskContainer, TaskEditInput, TaskDate, DestroyTaskButton } from './styles.js';

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

export const Task = ({ task, onEditTask, onDeleteTask, showDate, validateTask }) => {
	const [editing, setEditing] = useState(false);
	const [editText, setEditText] = useState(task.title);

	function handleKeyDown(event) {
		if (event.which === ESCAPE_KEY) {
			setEditText(task.title);
			setEditing(false);
		} else if (event.which === ENTER_KEY) {
			if (!validateTask(editText, task.id)) {
				alert("Task already exists");
				setEditText(task.title);
				return;
			}
			onEditTask(task.id, task.status, editText);
			setEditing(false);
		}		
	}

	function handleStatusChange() {
		onEditTask(task.id, task.status==="active" ? "completed" : "active", task.title);
	}

	function handleDelete() {
		onDeleteTask(task.id)
	}

	if (editing) {
		return (
			<TaskEditInput 
				autoFocus
				name="editTask"
				value={editText}
				placeholder={"Add task"}
				onChange={e => setEditText(e.target.value)}
				onBlur={() => {
					if (!validateTask(editText, task.id)) {
						alert("Task alreadyy exists");
						setEditText(task.title);
						setEditing(false);
						return;
					}
					setEditing(false);
					onEditTask(task.id, task.status, editText);
				}}
				onKeyDown={(e) => handleKeyDown(e)}
			/>
		)
	} 

	return (
		<TaskContainer 
			className={task.status==="completed" ? "completed" : ""} 
			onDoubleClick={() => setEditing(true)}
		>
			<div>
				<input
					className="toggle"
					type="checkbox"
					checked={task.status==="completed"}
					onChange={() => handleStatusChange()}
				/>
				{task.title}
			</div>
			<div>
				{showDate ? <TaskDate>{new Date(task.created).toLocaleDateString()}</TaskDate> : null}
				<DestroyTaskButton  onClick={() => handleDelete()}></DestroyTaskButton>
			</div>
		</TaskContainer>
	);
}