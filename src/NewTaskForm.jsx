import React, { useState } from 'react';
import { NewTaskFormContainer, NewTaskButton, NewTaskInput, CancelNewTaskButton } from './styles.js';

export const NewTaskForm = ({ onAdd, onCancel }) => {
	const [text, setText] = useState("");
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
				value={text}
				placeholder={"Add task"}
				onChange={e => setText(e.target.value)}
			/>
			<div>
				<NewTaskButton opacity={opacity} disabled={disabled} onClick={() => onAdd(text)}>
					Create
				</NewTaskButton>
				<CancelNewTaskButton onClick={onCancel}>
					Cancel
				</CancelNewTaskButton>
			</div>
		</NewTaskFormContainer>
	)
}
