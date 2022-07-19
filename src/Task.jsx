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
		if (event.key === ESCAPE_KEY) {
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
	const { ids, styles} = StyleSheet.create({
		  text: {

		    "@media (max-width: 1600px) and (min-width: 800px)": {
		    	maxWidth:"90%",

		    },
		    "@media (max-width: 800px) and (min-width: 451px)": {
		    	width: "90%",
		    	maxWidth: 500,

		    },
		    "@media (max-width: 450px)": {
		    	width: "90%",
		    	maxWidth: 250,

		    }
		  },
		  // container: {
		  // 	"@media (max-width: 1600px) and (min-width: 800px)": {
		  //   	maxWidth:"90%",
		  //     backgroundColor: "blue"
		  //   },
		  //   "@media (max-width: 800px) and (min-width: 451px)": {
		  //   	width: "60%",
		  //   	maxWidth: "300%",
		  //     backgroundColor: "peru"
		  //   },
		  //   "@media (max-width: 450px)": {
		  //   	width: "50%",
		  //   	maxWidth: 300,
		  //     backgroundColor: "red"
		  //   }
		  // }
		}); 

	return (
		<TaskContainer style={{ flexWrap: "nowrap", width: "100%"}}>
			<InlineContainer style={{width: showDate ? "50%" : "80%"}}>
				<CheckBox
					className="toggle"
					value={task.status==="completed"}
					onChange={() => handleStatusChange()}
				/>
				<View style={{width: showDate ? "100%" : "100%", textDecoration : task.status==="completed" ? 'line-through' : 'none'}}>
					<TaskText style={styles.text} dataSet={{ media: ids.text }} onClick={() => setEditing(true)} >{task.title}</TaskText>
				</View>

			</InlineContainer>
			<InlineContainer style={{width: showDate ? 155 : 65, justifyContent: 'flex-end'}}>
				{showDate ? <TaskDate><Text >{new Date(task.created).toLocaleDateString()}</Text></TaskDate> : <Text> </Text>}
				<DestroyTaskButton  onPress={() => handleDelete()} title="Delete" />
			</InlineContainer>
		</TaskContainer>
		
	);
}

	

