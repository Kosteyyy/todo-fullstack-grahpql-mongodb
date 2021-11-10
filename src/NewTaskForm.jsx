import React, { useState } from 'react';
import { NewTaskFormContainer, NewTaskButton, NewTaskInput, CancelNewTaskButton } from './styles.js';

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

export const NewTaskForm = ({ onAdd, onCancel, validateTask }) => {
	const [text, setText] = useState("");
	const onAddTask = () => {
		if (!validateTask(text)) {
			alert("Task already exists");
			return;
		}
		onAdd(text);
	}

	function handleKeyDown(event) {
		if (event.which === ESCAPE_KEY) {
			onCancel();
		} else if (event.which === ENTER_KEY) {
			if (validateTask(text)) {
				onAddTask();
			} else {
				alert("Task already exists");
				return;
			}
		}		
	}

	let disabled = true; //if task is empty "create" (NewTaskButton) button is disabled and faded
  let opacity = 0.4;
  if (text==="") {
  	disabled = true;
  	opacity = 0.4;
  } else {
  	disabled = false;
  	opacity = 1.0;
  }
	return (
		<NewTaskFormContainer>
			<NewTaskInput
				autoFocus
				name="NewTaskInput"
				value={text}
				placeholder={"Add task"}
				onChange={e => setText(e.target.value)}
				onKeyDown={(e) => handleKeyDown(e)}
			/>
			<div>
				<NewTaskButton opacity={opacity} disabled={disabled} onClick={onAddTask}>
					Create
				</NewTaskButton>
				<CancelNewTaskButton onClick={onCancel}>
					Cancel
				</CancelNewTaskButton>
			</div>
		</NewTaskFormContainer>
	)
}
