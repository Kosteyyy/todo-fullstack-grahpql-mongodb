/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/AddTask.jsx":
/*!*************************!*\
  !*** ./src/AddTask.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.js */ \"./src/styles.js\");\n/* harmony import */ var _NewTaskForm_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewTaskForm.jsx */ \"./src/NewTaskForm.jsx\");\n\n\n\n\nconst AddTask = ({\n  onAdd,\n  validateTask\n}) => {\n  const [showForm, setShowForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n\n  if (showForm) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NewTaskForm_jsx__WEBPACK_IMPORTED_MODULE_2__.NewTaskForm, {\n      onAdd: text => {\n        onAdd(text);\n        console.log(\"submit: \", text);\n        setShowForm(false);\n      },\n      onCancel: () => setShowForm(false),\n      validateTask: validateTask\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.AddTaskButton, {\n    onClick: () => setShowForm(true)\n  }, \"+ AddTask\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddTask);\n\n//# sourceURL=webpack://todotestapp/./src/AddTask.jsx?");

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\n/* harmony import */ var _reducers_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/index.js */ \"./src/reducers/index.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.js */ \"./src/styles.js\");\n/* harmony import */ var _TodoApp_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TodoApp.jsx */ \"./src/TodoApp.jsx\");\n\n\n\n\n\n\n\n\n\n\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_8__.createStore)(_reducers_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_8__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_9__[\"default\"])));\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_6__.AppContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TodoApp_jsx__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null));\n}\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n  store: store\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, null)), document.getElementById('root'));\n\n//# sourceURL=webpack://todotestapp/./src/App.jsx?");

/***/ }),

/***/ "./src/Filter.jsx":
/*!************************!*\
  !*** ./src/Filter.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Filter)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.js */ \"./src/styles.js\");\n\n\nfunction Filter({\n  setFilter\n}) {\n  const filters = ['All', 'Active', 'Completed'];\n  const [activeFilter, setActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('All');\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, filters.map((filter, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.FilterButton, {\n    onClick: () => {\n      setActiveFilter(filter);\n      setFilter(filter);\n    },\n    key: i,\n    className: activeFilter === filter ? \"active\" : \"\"\n  }, filter)));\n}\n\n//# sourceURL=webpack://todotestapp/./src/Filter.jsx?");

/***/ }),

/***/ "./src/NewTaskForm.jsx":
/*!*****************************!*\
  !*** ./src/NewTaskForm.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NewTaskForm\": () => (/* binding */ NewTaskForm)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.js */ \"./src/styles.js\");\n\n\nconst ESCAPE_KEY = 27;\nconst ENTER_KEY = 13;\nconst NewTaskForm = ({\n  onAdd,\n  onCancel,\n  validateTask\n}) => {\n  const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n\n  const onAddTask = () => {\n    if (!validateTask(text)) {\n      alert(\"Task already exists\");\n      return;\n    }\n\n    onAdd(text);\n  };\n\n  function handleKeyDown(event) {\n    if (event.which === ESCAPE_KEY) {\n      onCancel();\n    } else if (event.which === ENTER_KEY) {\n      if (validateTask(text)) {\n        onAddTask();\n      } else {\n        alert(\"Task already exists\");\n        return;\n      }\n    }\n  }\n\n  let disabled = true; //if task is empty \"create\" (NewTaskButton) button is disabled and faded\n\n  let opacity = 0.4;\n\n  if (text === \"\") {\n    disabled = true;\n    opacity = 0.4;\n  } else {\n    disabled = false;\n    opacity = 1.0;\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.NewTaskFormContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.NewTaskInput, {\n    autoFocus: true,\n    name: \"NewTaskInput\",\n    value: text,\n    placeholder: \"Add task\",\n    onChange: e => setText(e.target.value),\n    onKeyDown: e => handleKeyDown(e)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.NewTaskButton, {\n    opacity: opacity,\n    disabled: disabled,\n    onClick: onAddTask\n  }, \"Create\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.CancelNewTaskButton, {\n    onClick: onCancel\n  }, \"Cancel\")));\n};\n\n//# sourceURL=webpack://todotestapp/./src/NewTaskForm.jsx?");

/***/ }),

/***/ "./src/Task.jsx":
/*!**********************!*\
  !*** ./src/Task.jsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.js */ \"./src/styles.js\");\n\n\nconst ESCAPE_KEY = 27;\nconst ENTER_KEY = 13;\nconst Task = ({\n  task,\n  onEditTask,\n  onDeleteTask,\n  showDate\n}) => {\n  const [editing, setEditing] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [editText, setEditText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(task.title);\n\n  function handleKeyDown(event) {\n    if (event.which === ESCAPE_KEY) {\n      setEditText(task.title);\n      setEditing(false);\n    } else if (event.which === ENTER_KEY) {\n      onEditTask(task.id, task.status, editText);\n      setEditing(false);\n    }\n  }\n\n  function handleStatusChange() {\n    onEditTask(task.id, task.status === \"active\" ? \"completed\" : \"active\", task.title);\n  }\n\n  function handleDelete() {\n    onDeleteTask(task.id);\n  }\n\n  if (editing) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.TaskEditInput, {\n      autoFocus: true,\n      name: \"editTask\",\n      value: editText,\n      placeholder: \"Add task\",\n      onChange: e => setEditText(e.target.value),\n      onBlur: () => {\n        setEditing(false);\n        onEditTask(task.id, task.status, editText);\n      },\n      onKeyDown: e => handleKeyDown(e)\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.TaskContainer, {\n    className: task.status === \"completed\" ? \"completed\" : \"\",\n    onDoubleClick: () => setEditing(true)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    className: \"toggle\",\n    type: \"checkbox\",\n    checked: task.status === \"completed\",\n    onChange: () => handleStatusChange()\n  }), task.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, showDate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.TaskDate, null, new Date(task.created).toLocaleDateString()) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.DestroyTaskButton, {\n    onClick: () => handleDelete()\n  })));\n};\n\n//# sourceURL=webpack://todotestapp/./src/Task.jsx?");

/***/ }),

/***/ "./src/TaskFooter.jsx":
/*!****************************!*\
  !*** ./src/TaskFooter.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskFooter)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Filter_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filter.jsx */ \"./src/Filter.jsx\");\n/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.js */ \"./src/styles.js\");\n\n\n\nfunction TaskFooter({\n  taskCount,\n  setFilter,\n  showDate,\n  onChangeShowDate\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_2__.FooterCounter, null, taskCount, \" active tasks\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Filter_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    setFilter: setFilter\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_2__.ShowDateButton, {\n    onClick: onChangeShowDate\n  }, showDate ? \"Hide date\" : \"Show date\"));\n}\n\n//# sourceURL=webpack://todotestapp/./src/TaskFooter.jsx?");

/***/ }),

/***/ "./src/TaskList.jsx":
/*!**************************!*\
  !*** ./src/TaskList.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Task_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.jsx */ \"./src/Task.jsx\");\n\n\nfunction TaskList({\n  tasks,\n  onEditTask,\n  onDeleteTask,\n  showDate\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, tasks.map((task, item) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Task_jsx__WEBPACK_IMPORTED_MODULE_1__.Task, {\n    key: item,\n    task: task,\n    onEditTask: onEditTask,\n    onDeleteTask: onDeleteTask,\n    showDate: showDate\n  })));\n} //\n\n//# sourceURL=webpack://todotestapp/./src/TaskList.jsx?");

/***/ }),

/***/ "./src/TodoApp.jsx":
/*!*************************!*\
  !*** ./src/TodoApp.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoApp)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.js */ \"./src/styles.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _TaskFooter_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskFooter.jsx */ \"./src/TaskFooter.jsx\");\n/* harmony import */ var _AddTask_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddTask.jsx */ \"./src/AddTask.jsx\");\n/* harmony import */ var _TaskList_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TaskList.jsx */ \"./src/TaskList.jsx\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions */ \"./src/actions/index.js\");\n\n\n\n\n\n\n\nfunction TodoApp() {\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n  const tasks = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.tasks);\n  const [activeTasksCount, setActiveTasksCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0); //counts active tasks\n\n  const [taskFilter, setTaskFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('All'); //filter criteria All-Active-Completed\n\n  const [shownTasks, setShownTasks] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(tasks); //filtered tasks array\n\n  const [showDate, setShowDate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); //defines if dates are rendered in tasks (more space on mobile devices)\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => (0,_actions__WEBPACK_IMPORTED_MODULE_6__.fetchTasks)(dispatch), []); //load data from server on mounting app\n  //sets filter value when filter button in Filter clicked\n\n  const setFilter = filter => {\n    setTaskFilter(filter);\n  }; //apply filter when tasks or filter changes by filtering showed tasks\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (taskFilter === 'All') {\n      setShownTasks(tasks);\n      return;\n    } else if (taskFilter === 'Active') {\n      setShownTasks(tasks.filter(task => task.status === 'active'));\n    } else if (taskFilter === 'Completed') {\n      setShownTasks(tasks.filter(task => task.status === 'completed'));\n    }\n  }, [tasks, taskFilter]); //toggles visibility of Dates in tasks when clicked in TaskFooter\n  //(default dates are off to clear space for mobile devices)\n\n  const onChangeShowDate = () => {\n    setShowDate(!showDate);\n  }; //Used in AddTask -> NewTaskForm\n\n\n  const onCreateTask = title => {\n    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_6__.createTask)({\n      title\n    }));\n  }; //Used in TaskList -> Task\n\n\n  const onEditTask = (id, status, title) => {\n    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_6__.editTask)(id, {\n      status,\n      title\n    }));\n  }; //Used in TaskList -> Task\n\n\n  const onDeleteTask = id => {\n    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_6__.deleteTask)(id));\n  }; //Used in AddTask -> NewTaskForm to prevent adding similar tasks\n\n\n  const validateTaskTitle = title => {\n    let valid = true;\n\n    for (let item of tasks) {\n      if (item.title == title) {\n        return false;\n      }\n    }\n\n    return true;\n  }; //Counts active tasks when tasks changes. Counter used in TaskFooter\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setActiveTasksCount(tasks.reduce((total, task) => task.status === \"completed\" ? total : total + 1, 0));\n  }, [tasks]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.TasksContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.TasksTitle, null, \"ToDo\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddTask_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onAdd: onCreateTask,\n    validateTask: validateTaskTitle\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TaskList_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    tasks: shownTasks,\n    onEditTask: onEditTask,\n    onDeleteTask: onDeleteTask,\n    showDate: showDate\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TaskFooter_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    taskCount: activeTasksCount,\n    setFilter: setFilter,\n    showDate: showDate,\n    onChangeShowDate: onChangeShowDate\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.Help, null, \"Doubleclick to edit Task\"));\n}\n\n//# sourceURL=webpack://todotestapp/./src/TodoApp.jsx?");

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"uniqueId\": () => (/* binding */ uniqueId),\n/* harmony export */   \"fetchTasksSucceeded\": () => (/* binding */ fetchTasksSucceeded),\n/* harmony export */   \"fetchTasks\": () => (/* binding */ fetchTasks),\n/* harmony export */   \"createTask\": () => (/* binding */ createTask),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask)\n/* harmony export */ });\nlet _id = 1;\nfunction uniqueId() {\n  return _id++;\n}\nfunction fetchTasksSucceeded(tasks) {\n  //action creator for dispatching all tasks into state\n  return {\n    type: 'FETCH_TASKS_SUCCEEDED',\n    payload: {\n      tasks\n    }\n  };\n}\nasync function fetchTasks(dispatch) {\n  //fetches data from server\n  const query = `query {\n\t\ttaskList {\n\t    id title created status\n\t  }\n\t}`;\n  const response = await fetch('/graphql', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      query\n    })\n  });\n  const result = await response.json(); //dispatches data into state with dispatch\n\n  dispatch(fetchTasksSucceeded(result.data.taskList));\n}\nfunction createTask({\n  title\n}) {\n  return {\n    type: 'CREATE_TASK',\n    payload: {\n      id: uniqueId(),\n      title,\n      created: new Date().toDateString(),\n      status: 'active'\n    }\n  };\n}\nfunction editTask(id, params = {}) {\n  return {\n    type: 'EDIT_TASK',\n    payload: {\n      id,\n      params\n    }\n  };\n}\nfunction deleteTask(id) {\n  return {\n    type: 'DELETE_TASK',\n    payload: {\n      id\n    }\n  };\n}\n\n//# sourceURL=webpack://todotestapp/./src/actions/index.js?");

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TasksReducer)\n/* harmony export */ });\n/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/index.js */ \"./src/actions/index.js\");\n\nfunction TasksReducer(state = {\n  tasks: []\n}, action) {\n  switch (action.type) {\n    case 'FETCH_TASKS_SUCCEEDED':\n      return {\n        tasks: action.payload.tasks\n      };\n\n    case 'CREATE_TASK':\n      return {\n        tasks: state.tasks.concat(action.payload)\n      };\n\n    case 'EDIT_TASK':\n      return {\n        tasks: state.tasks.map(task => {\n          if (task.id === action.payload.id) {\n            return Object.assign({}, task, action.payload.params);\n          }\n\n          return task;\n        })\n      };\n\n    case 'DELETE_TASK':\n      return {\n        tasks: state.tasks.filter(task => task.id !== action.payload.id)\n      };\n\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack://todotestapp/./src/reducers/index.js?");

/***/ }),

/***/ "./src/styles.js":
/*!***********************!*\
  !*** ./src/styles.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppContainer\": () => (/* binding */ AppContainer),\n/* harmony export */   \"Help\": () => (/* binding */ Help),\n/* harmony export */   \"TasksContainer\": () => (/* binding */ TasksContainer),\n/* harmony export */   \"TasksTitle\": () => (/* binding */ TasksTitle),\n/* harmony export */   \"TaskContainer\": () => (/* binding */ TaskContainer),\n/* harmony export */   \"AddTaskButton\": () => (/* binding */ AddTaskButton),\n/* harmony export */   \"NewTaskFormContainer\": () => (/* binding */ NewTaskFormContainer),\n/* harmony export */   \"NewTaskButton\": () => (/* binding */ NewTaskButton),\n/* harmony export */   \"CancelNewTaskButton\": () => (/* binding */ CancelNewTaskButton),\n/* harmony export */   \"NewTaskInput\": () => (/* binding */ NewTaskInput),\n/* harmony export */   \"TaskEditInput\": () => (/* binding */ TaskEditInput),\n/* harmony export */   \"DestroyTaskButton\": () => (/* binding */ DestroyTaskButton),\n/* harmony export */   \"TaskDate\": () => (/* binding */ TaskDate),\n/* harmony export */   \"FooterCounter\": () => (/* binding */ FooterCounter),\n/* harmony export */   \"FilterButton\": () => (/* binding */ FilterButton),\n/* harmony export */   \"ShowDateButton\": () => (/* binding */ ShowDateButton)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst AppContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n\talign-items: flex-start;\n\tbackground-color: #3179ba;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\theight: 100%;\n\tpadding: 20px;\n\twidth: 100%;\n`;\nconst Help = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n\ttext-align: center;\n\tcolor: #777;\n\tfont-size: 0.8rem;\n\tpadding-top: 10px;\n`;\nconst TasksContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n\tbackground-color: #ebecf0;\n\tmax-width: 800px;\n\tmin-width: 300px;\n\twidth: 100%;\n\tmin-height: 40px;\n\tmargin-right: 20px;\n\tborder-radius: 3px;\n\tpadding: 8px 8px;\n\tflex-grow: 0;\n`;\nconst TasksTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n\twidth: 100%;\n\ttext-align: center;\n\tmin-height: 30px;\n\tcolor: #777;\n\tfont-size: 2em;\n`;\nconst TaskContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n\tbackground-color: #fff;\n\tcolor: #333;\n\tcursor: pointer;\n\tmargin-bottom: 0.5rem;\n\tpadding: 0.5rem;\n\tmax-width: 800px;\n\tborder-radius: 3px;\n\tbox-shadow: #091e4240 0px 1px 0px 0px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\ttext-decoration: ${p => p.textDecoration};\n\t&.completed {\n\t\ttext-decoration: line-through;\n\t\tcolor: #aaa;\n\t}\n`;\nconst AddTaskButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button`\n\tbackground-color: #ffffff3d;\n\tborder-radius: 3px;\n\tborder: none;\n\tcolor: #000;\n\tcursor: pointer;\n\tmax-width: 800px;\n\tpadding: 10px 12px;\n\tmargin-bottom: 5px;\n\ttext-align: left;\n\ttransition: background 285ms ease-in;\n\twidth: 100%;\n\t&:hover {\n\t\tbackground-color: #3179ba55;\n\t}\n\t& disabled {\n\t\tbackground-color: red;\n\t}\n`;\nconst NewTaskFormContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n\tmax-width: 800px;\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\talign-items: flex-start;\n\tpadding-bottom: 10px;\n`;\nconst NewTaskButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button`\n\tbackground-color: #5aac44;\n\tborder-radius: 3px;\n\tborder: none;\n\tbox-shadow: none;\n\tcolor: #fff;\n\topacity: ${p => p.opacity};\n\tpadding: 6px 12px;\n\ttext-align: center;\n\tcursor: pointer;\n\tdisplay: inline;\n`;\nconst CancelNewTaskButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button`\n\tbackground-color: #ff6600;\n\tborder-radius: 3px;\n\tborder: none;\n\tbox-shadow: none;\n\tcolor: #fff;\n\tpadding: 6px 12px;\n\tmargin-left: 6px;\n\ttext-align: center;\n\tcursor: pointer;\n\tdisplay: inline;\n`;\nconst NewTaskInput = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].input`\n\tborder-radius: 3px;\n\tborder: none;\n\tbox-shadow: #091e4240 0px 1px 0px 0px;\n\tmargin-bottom: 0.5rem;\n\tpadding: 0.5rem 1rem;\n\twidth: 100%;\n`;\nconst TaskEditInput = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].input`\n\tborder-radius: 3px;\n\tborder: none;\n\tbox-shadow: #091e4240 0px 1px 0px 0px;\n\tmargin-bottom: 0.5rem;\n\tpadding: 0.5rem 1rem;\n\twidth: 100%;\n`;\nconst DestroyTaskButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button`\n\tbackground-color: transparent;\n\tposition: relative;\n\twidth: 10px;\n\theight: 10px;\n  z-index: 1;\n\tborder: none;\n\tbox-shadow: none;\n\tcolor: peru;\n\tpadding: 0px;\n\ttext-align: center;\n\tcursor: pointer;\n\tdisplay: inline-block;\n\topacity: 0.5;\n\t&:before {\n    content: '+';\n    color: peru;\n    position: absolute;\n    z-index: 2;\n    transform: rotate(45deg);\n    font-size: 1.5rem;\n    top: -17px;\n    left: -3px;\n    transition: all 0.3s cubic-bezier(0.77, 0, 0.2, 0.85);\n  }\n  &:hover {\n  \topacity: 1.0;\n  }\n`;\nconst TaskDate = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n\tpadding-right: 10px;\n\tpadding-left: 10px;\n\tdisplay: inline;\n`;\nconst FooterCounter = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span`\n\tcolor: #777;\n\tmargin-right: 20px;\n`;\nconst FilterButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button`\n\tbackground-color: transparent;\n\tborder-radius: 3px;\n\tborder: none;\n\tbox-shadow: none;\n\tcolor: #777;\n\tpadding: 6px 10px;\n\ttext-align: center;\n\tcursor: pointer;\n\tdisplay: inline;\n\t&.active {\n\t\tborder: 1px solid peru;\n\t}\n`;\nconst ShowDateButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button`\n\tbackground-color: #aaa;\n\tborder-radius: 3px;\n\tborder: none;\n\tbox-shadow: none;\n\tcolor: #fff;\n\tpadding: 6px 10px;\n\tmargin-left: 30px;\n\ttext-align: center;\n\tcursor: pointer;\n\tdisplay: inline;\n`;\n\n//# sourceURL=webpack://todotestapp/./src/styles.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n\\tbox-sizing: border-box;\\n}\\n*, *:before, *:after {\\n\\tbox-sizing: inherit;\\n}\\nhtml, body, #root {\\n\\theight: 100%;\\n\\tfont-family: arial, \\\"sans-serif\\\", tahoma;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todotestapp/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todotestapp/./src/styles.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktodotestapp"] = self["webpackChunktodotestapp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/App.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;