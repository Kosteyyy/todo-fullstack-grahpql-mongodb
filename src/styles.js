import styled from 'styled-components/native';

export const AppContainer = styled.View`
	align-items: flex-start;
	background-color: #3179ba;
	display: flex;
	flex-direction: row;
	justify-content: center;
	height: 100%;
	width: 100%;
	padding: 20px;
`;

export const Help = styled.Text`
	text-align: center;
	color: #777;
	font-size: 0.8rem;
	padding-top: 10px;
`;

export const TasksContainer = styled.View`
	background-color: #ebecf0;
	max-width: 800px;
	min-width: 350px;
	width: 100%;
	min-height: 40px;
	margin-right: 20px;
	border-radius: 3px;
	padding: 8px 8px;
`;
export const TasksTitle = styled.Text`
	width: 100%;
	text-align: center;
	min-height: 30px;
	color: #777;
	font-size: 2em;
`;

export const TaskContainer = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: #fff;
	color: #333;
	cursor: pointer;
	margin-bottom: 0.5rem;
	padding: 0.5rem;
	max-width: 800px;
	border-radius: 3px;
	display: flex;
	justify-content: space-between;
	text-decoration: ${p => p.textDecoration};
`;

export const AddTaskButton = styled.Button`
	background-color: #ffffff3d;
	border-radius: 3px;
	border: none;
	color: #000;
	cursor: pointer;
	max-width: 800px;
	padding: 10px 12px;
	margin-bottom: 15px;
	text-align: left;
	transition: background 285ms ease-in;
	width: 100%;
`;

export const NewTaskFormContainer = styled.View`
	max-width: 800px;
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: flex-start;
	padding-bottom: 10px;
`

export const InlineContainer = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
`

export const NewTaskButton = styled.Button`
	background-color: #5aac44;
	border-radius: 3px;
	border: none;
	color: #fff;
	opacity: ${p => p.opacity};
	padding: 6px 12px;
	margin: 50px;
	text-align: center;
	cursor: pointer;
	display: inline;
`
export const CancelNewTaskButton = styled.Button`
	background-color: #ff6600;
	margin-left: 20px;
	border-radius: 3px;
	border: none;
	color: #fff;
	padding: 6px 12px;
	margin-left: 6px;
	text-align: center;
	cursor: pointer;
	display: inline;
`

export const NewTaskInput = styled.TextInput `
	background-color: white;
	border-radius: 3px;
	border: none;
	margin-bottom: 0.5rem;
	padding: 0.5rem 1rem;
	width: 100%;
`

export const TaskEditInput = styled.TextInput `
	border-radius: 3px;
	border: none;
	margin-bottom: 0.5rem;
	padding: 0.5rem 1rem;
	width: 100%;
`
export const DestroyTaskButton = styled.Button`
	background-color: transparent;
	position: relative;
	width: 10px;
	height: 10px;
  z-index: 1;
	border: none;
	color: peru;
	padding: 0px;
	text-align: center;
	cursor: pointer;
	display: inline-block;
	opacity: 0.5;
`
export const TaskDate = styled.View`
	padding-right: 10px;
	padding-left: 10px;
	display: inline;
`

export const FooterContainer = styled.View`
	width: 100%;
	dispay: flex;
	flex-direction: row;
	justify-content: space-between;
`

export const FooterCounter = styled.Text`
	color: #777;
	margin-right: 20px;
`

export const FilterButton = styled.Button`
	background-color: transparent;
	border-radius: 3px;
	border: none;
	color: #777;
	padding: 6px 10px;
	text-align: center;
	cursor: pointer;
	display: inline;
`

export const ShowDateButton = styled.Button`
	background-color: papayawhip;
	border-radius: 3px;
	border: none;
	color: #fff;
	padding: 6px 10px;
	margin-left: 30px;
	text-align: center;
	cursor: pointer;
	display: inline;
`