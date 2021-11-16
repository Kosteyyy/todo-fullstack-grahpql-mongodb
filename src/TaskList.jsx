import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Task } from './Task.jsx';

export default function TaskList ({ tasks, onEditTask, onDeleteTask, showDate, validateTask }) {
	return (

		<View
      >
			{tasks.map((task, item) => <Task 
				key={item}
				task={task}
				onEditTask={onEditTask}
				onDeleteTask={onDeleteTask}
				showDate={showDate}
				validateTask={validateTask}
			/>)}
		</View> 
	)
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch'
  },
  scrollView: {
    backgroundColor: '#eeeeee',
    maxHeight: 500
  }
});