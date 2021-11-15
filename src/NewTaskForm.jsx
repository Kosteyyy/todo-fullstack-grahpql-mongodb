import React, { useState } from 'react';
import { View } from "react-native";
import { NewTaskFormContainer, NewTaskButton, NewTaskInput, CancelNewTaskButton, InlineContainer } from './styles.js';

const ESCAPE_KEY = 27; //Keys to esc and confirm task creation 
const ENTER_KEY = 13;

export const NewTaskForm = ({ onAdd, onCancel, validateTask }) => {
	const [text, setText] = useState(""); //controlled input from form
	
	const onAddTask = () => {
		if (!validateTask(text)) {
			alert("Task already exists");
			return;
		}
		onAdd(text);
	}

	function handleKeyDown(event) {
		if (event.which === ESCAPE_KEY) { //ESC key calcel adding
			onCancel();
		} else if (event.which === ENTER_KEY) { //Enter key confirms
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
				onKeyPress={(e) => handleKeyDown(e)}
			/>
			<InlineContainer>
				<View style={{ marginLeft: 10 }}>
					<NewTaskButton opacity={opacity} disabled={disabled} onPress={onAddTask} title="Create" style={"display: inline"}/>
				</View>
				<View style={{ marginLeft: 10 }}>
					<CancelNewTaskButton color="peru" onPress={onCancel} title="Cancel" style={"display: inline"} />
				</View>
			</InlineContainer>
		</NewTaskFormContainer>
	)
}
