import React, { useState } from 'react';
import StyleSheet from "react-native-media-query";
import { InputText, View, Text, CheckBox } from "react-native";
import { TaskContainer, TaskEditInput, TaskDate, DestroyTaskButton, InlineContainer, TaskText } from './styles.js';

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;
const textStyle = 'red';

export const Task = ({ task, onEditTask, onDeleteTask, showDate, validateTask }) => {
	const [editing, setEditing] = useState(false);	//if editing - renders input
	const [editText, setEditText] = useState(task.title); //Controlled input

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
				onKeyPress={(e) => handleKeyDown(e)}
			/>
		)
	} 
	const { ids, styles } = StyleSheet.create({
	  text: {
	    fontSize: 26,
	    marginLeft: 10,

	    "@media (max-width: 1600px) and (min-width: 800px)": {
	      backgroundColor: "red"
	    },
	    "@media (max-width: 800px)": {
	      backgroundColor: "blue"
	    }
	  }
	});
	//textStyle = Object.create({}, styles.text);
  //console.log(textStyle);
	//className={task.status==="completed" ? "completed" : ""}
	return (
		<TaskContainer style={{ flexWrap: "nowrap"}}>
			<InlineContainer style={{ maxWidth: showDate ? "60%" : "80%"}}>
				<CheckBox
					className="toggle"
					value={task.status==="completed"}
					onChange={() => handleStatusChange()}
				/>
				<TaskText onClick={() => setEditing(true)} >{task.title}</TaskText>
			</InlineContainer>
			<InlineContainer>
				{showDate ? <TaskDate><Text>{new Date(task.created).toLocaleDateString()}</Text></TaskDate> : <Text> </Text>}
				<DestroyTaskButton  onPress={() => handleDelete()} title="Delete" />
			</InlineContainer>
			
		</TaskContainer>
		
	);
}


