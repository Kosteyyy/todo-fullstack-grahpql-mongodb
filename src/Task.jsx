import React, { useState } from 'react';

import { TaskContainer, TaskEditInput, TaskDate, DestroyTaskButton } from './styles.js';

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;



export const Task = ({ task }) => {
	const [editing, setEditing] = useState(false);
	const [editText, setEditText] = useState(task.title);
	const [buttonVisible, setButtonVisible] = useState(false);

	function handleKeyDown(event) {
		if (event.which === ESCAPE_KEY) {
			setEditText(task.title);
			setEditing(false);
		} else if (event.which === ENTER_KEY) {
			console.log("submited", editText);
			setEditText(task.title);
			setEditing(false);
		}		
	}

	if (editing) {
		return (
			<TaskEditInput 
				value={editText}
				placeholder={"Add task"}
				onChange={e => setEditText(e.target.value)}
				onBlur={() => {
					console.log("submited", editText)
					setEditing(false)
				}}
				onKeyDown={(e) => handleKeyDown(e)}
			/>
		)
	} 
	return (
		<TaskContainer 
			className={task.status==="completed" ? "completed" : ""} 
			onDoubleClick={() => setEditing(true)}
			onMouseOver={() => setButtonVisible(true)}
			onMouseOut={() => setButtonVisible(false)}
		>
			<div>
				<input
					className="toggle"
					type="checkbox"
					checked={task.status==="completed"}
					onChange={() => console.log("Task status changed")}
				/>
				{task.title}
			</div>
			<div>
				<TaskDate>{new Date(task.created).toDateString()}</TaskDate>
				<DestroyTaskButton className={buttonVisible ? "visible" : ""}></DestroyTaskButton>
			</div>
			

		</TaskContainer>
	);
		
}