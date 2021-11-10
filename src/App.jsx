import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import TasksReducer from './reducers/index.js';
import './styles.css';

import { AppContainer } from './styles.js';
import TodoApp from './TodoApp.jsx';

const store = createStore(TasksReducer, composeWithDevTools(applyMiddleware(thunk)));

function App() {
	return (
		<AppContainer>
			<TodoApp />
		</AppContainer>
	);
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);