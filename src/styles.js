import styled from 'styled-components';

export const AppContainer = styled.div`
	align-items: flex-start;
	background-color: #3179ba;
	display: flex;
	flex-direction: row;
	justify-content: center;
	height: 100%;
	width: 100%;
	padding: 20px;
`;

export const Help = styled.div`
	text-align: center;
	color: #777;
	font-size: 0.8rem;
	padding-top: 10px;
`;

export const TasksContainer = styled.div`
	background-color: #ebecf0;
	max-width: 800px;
	min-width: 300px;
	width: 100%;
	min-height: 40px;
	margin-right: 20px;
	border-radius: 3px;
	padding: 8px 8px;
`;
export const TasksTitle = styled.div`
	width: 100%;
	text-align: center;
	min-height: 30px;
	color: #777;
	font-size: 2em;
`;

export const TaskContainer = styled.div`
	background-color: #fff;
	color: #333;
	cursor: pointer;
	margin-bottom: 0.5rem;
	padding: 0.5rem;
	max-width: 800px;
	border-radius: 3px;
	box-shadow: #091e4240 0px 1px 0px 0px;
	display: flex;
	justify-content: space-between;
	text-decoration: ${p => p.textDecoration};
	&.completed {
		text-decoration: line-through;
		color: #aaa;
	}
`;

export const AddTaskButton = styled.button`
	background-color: #ffffff3d;
	border-radius: 3px;
	border: none;
	color: #000;
	cursor: pointer;
	max-width: 800px;
	padding: 10px 12px;
	margin-bottom: 5px;
	text-align: left;
	transition: background 285ms ease-in;
	width: 100%;
	&:hover {
		background-color: #3179ba55;
	}
	& disabled {
		background-color: red;
	}
`;

export const NewTaskFormContainer = styled.div`
	max-width: 800px;
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: flex-start;
	padding-bottom: 10px;
`

export const NewTaskButton = styled.button`
	background-color: #5aac44;
	border-radius: 3px;
	border: none;
	box-shadow: none;
	color: #fff;
	opacity: ${p => p.opacity};
	padding: 6px 12px;
	text-align: center;
	cursor: pointer;
	display: inline;
`
export const CancelNewTaskButton = styled.button`
	background-color: #ff6600;
	border-radius: 3px;
	border: none;
	box-shadow: none;
	color: #fff;
	padding: 6px 12px;
	margin-left: 6px;
	text-align: center;
	cursor: pointer;
	display: inline;
`

export const NewTaskInput = styled.input`
	border-radius: 3px;
	border: none;
	box-shadow: #091e4240 0px 1px 0px 0px;
	margin-bottom: 0.5rem;
	padding: 0.5rem 1rem;
	width: 100%;
`

export const TaskEditInput = styled.input`
	border-radius: 3px;
	border: none;
	box-shadow: #091e4240 0px 1px 0px 0px;
	margin-bottom: 0.5rem;
	padding: 0.5rem 1rem;
	width: 100%;
`
export const DestroyTaskButton = styled.button`
	background-color: transparent;
	position: relative;
	width: 10px;
	height: 10px;
  z-index: 1;
	border: none;
	box-shadow: none;
	color: peru;
	padding: 0px;
	text-align: center;
	cursor: pointer;
	display: inline-block;
	opacity: 0.5;
	&:before {
    content: '+';
    color: peru;
    position: absolute;
    z-index: 2;
    transform: rotate(45deg);
    font-size: 1.5rem;
    top: -17px;
    left: -3px;
  }
  &:hover {
  	opacity: 1.0;
  }
`
export const TaskDate = styled.div`
	padding-right: 10px;
	padding-left: 10px;
	display: inline;
`

export const FooterCounter = styled.span`
	color: #777;
	margin-right: 20px;
`

export const FilterButton = styled.button`
	background-color: transparent;
	border-radius: 3px;
	border: none;
	box-shadow: none;
	color: #777;
	padding: 6px 10px;
	text-align: center;
	cursor: pointer;
	display: inline;
	&.active {
		border: 1px solid peru;
	}
`

export const ShowDateButton = styled.button`
	background-color: #aaa;
	border-radius: 3px;
	border: none;
	box-shadow: none;
	color: #fff;
	padding: 6px 10px;
	margin-left: 30px;
	text-align: center;
	cursor: pointer;
	display: inline;
`