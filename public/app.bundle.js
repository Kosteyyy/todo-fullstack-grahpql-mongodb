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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.js */ \"./src/styles.js\");\n/* harmony import */ var _NewTaskForm_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewTaskForm.jsx */ \"./src/NewTaskForm.jsx\");\n/* harmony import */ var react_native_web_dist_exports_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-native-web/dist/exports/Button */ \"./node_modules/react-native-web/dist/exports/Button/index.js\");\n/* harmony import */ var react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-web/dist/exports/View */ \"./node_modules/react-native-web/dist/exports/View/index.js\");\n\n\n\n\n\n\nconst AddTask = ({\n  onAdd,\n  validateTask\n}) => {\n  const [showForm, setShowForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n\n  if (showForm) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NewTaskForm_jsx__WEBPACK_IMPORTED_MODULE_2__.NewTaskForm, {\n      onAdd: text => {\n        onAdd(text);\n        setShowForm(false);\n      },\n      onCancel: () => setShowForm(false),\n      validateTask: validateTask\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    style: {\n      marginBottom: 10\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native_web_dist_exports_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onPress: () => setShowForm(true),\n    title: \"+ AddTask\"\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddTask);\n\n//# sourceURL=webpack://todotestapp/./src/AddTask.jsx?");

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_native_web_dist_exports_AppRegistry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-native-web/dist/exports/AppRegistry */ \"./node_modules/react-native-web/dist/exports/AppRegistry/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\n/* harmony import */ var _reducers_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/index.js */ \"./src/reducers/index.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.js */ \"./src/styles.js\");\n/* harmony import */ var _TodoApp_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TodoApp.jsx */ \"./src/TodoApp.jsx\");\n\n\n\n\n\n\n\n\n\n\n\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_8__.createStore)(_reducers_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_8__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_9__[\"default\"])));\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_6__.AppContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TodoApp_jsx__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null)));\n}\n\nreact_native_web_dist_exports_AppRegistry__WEBPACK_IMPORTED_MODULE_10__[\"default\"].registerComponent(\"App\", () => App);\nreact_native_web_dist_exports_AppRegistry__WEBPACK_IMPORTED_MODULE_10__[\"default\"].runApplication(\"App\", {\n  rootTag: document.getElementById(\"root\")\n}); // ReactDOM.render(\n// \t<Provider store={store}>\n// \t\t<App />\n// \t</Provider>,\n// \tdocument.getElementById('root')\n// );\n\n//# sourceURL=webpack://todotestapp/./src/App.jsx?");

/***/ }),

/***/ "./src/Filter.jsx":
/*!************************!*\
  !*** ./src/Filter.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Filter)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web/dist/exports/View */ \"./node_modules/react-native-web/dist/exports/View/index.js\");\n/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.js */ \"./src/styles.js\");\n\n\n\n\nclass Filter extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  //Implement filter buttons and pass to parents filter Name via props.setFilter\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeFilter: 'All'\n    };\n  }\n\n  render() {\n    const filters = ['All', 'Active', 'Completed'];\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.InlineContainer, null, filters.map((filter, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: i,\n      style: {\n        marginLeft: 10\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.FilterButton, {\n      onPress: () => {\n        this.setState({\n          activeFilter: filter\n        });\n        this.props.setFilter(filter);\n      },\n      color: this.state.activeFilter === filter ? \"peru\" : \"skyblue\",\n      title: filter\n    }))));\n  }\n\n}\n\n//# sourceURL=webpack://todotestapp/./src/Filter.jsx?");

/***/ }),

/***/ "./src/NewTaskForm.jsx":
/*!*****************************!*\
  !*** ./src/NewTaskForm.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NewTaskForm\": () => (/* binding */ NewTaskForm)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web/dist/exports/View */ \"./node_modules/react-native-web/dist/exports/View/index.js\");\n/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.js */ \"./src/styles.js\");\n\n\n\nconst ESCAPE_KEY = 27; //Keys to esc and confirm task creation \n\nconst ENTER_KEY = 13;\nconst NewTaskForm = ({\n  onAdd,\n  onCancel,\n  validateTask\n}) => {\n  const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"); //controlled input from form\n\n  const onAddTask = () => {\n    if (!validateTask(text)) {\n      alert(\"Task already exists\");\n      return;\n    }\n\n    onAdd(text);\n  };\n\n  function handleKeyDown(event) {\n    if (event.which === ESCAPE_KEY) {\n      //ESC key calcel adding\n      onCancel();\n    } else if (event.which === ENTER_KEY) {\n      //Enter key confirms\n      if (validateTask(text)) {\n        onAddTask();\n      } else {\n        alert(\"Task already exists\");\n        return;\n      }\n    }\n  }\n\n  let disabled = true; //if task is empty \"create\" (NewTaskButton) button is disabled and faded\n\n  let opacity = 0.4;\n\n  if (text === \"\") {\n    disabled = true;\n    opacity = 0.4;\n  } else {\n    disabled = false;\n    opacity = 1.0;\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.NewTaskFormContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.NewTaskInput, {\n    autoFocus: true,\n    name: \"NewTaskInput\",\n    value: text,\n    placeholder: \"Add task\",\n    onChange: e => setText(e.target.value),\n    onKeyPress: e => handleKeyDown(e)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.InlineContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    style: {\n      marginLeft: 10\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.NewTaskButton, {\n    opacity: opacity,\n    disabled: disabled,\n    onPress: onAddTask,\n    title: \"Create\",\n    style: \"display: inline\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    style: {\n      marginLeft: 10\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.CancelNewTaskButton, {\n    color: \"peru\",\n    onPress: onCancel,\n    title: \"Cancel\",\n    style: \"display: inline\"\n  }))));\n};\n\n//# sourceURL=webpack://todotestapp/./src/NewTaskForm.jsx?");

/***/ }),

/***/ "./src/Task.jsx":
/*!**********************!*\
  !*** ./src/Task.jsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-web/dist/exports/Text */ \"./node_modules/react-native-web/dist/exports/Text/index.js\");\n/* harmony import */ var react_native_web_dist_exports_CheckBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web/dist/exports/CheckBox */ \"./node_modules/react-native-web/dist/exports/CheckBox/index.js\");\n/* harmony import */ var react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-native-web/dist/exports/StyleSheet */ \"./node_modules/react-native-web/dist/exports/StyleSheet/index.js\");\n/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.js */ \"./src/styles.js\");\n\n\n\n\n\n\n\nconst ESCAPE_KEY = 27;\nconst ENTER_KEY = 13;\nconst textStyle = 'red';\nconst Task = ({\n  task,\n  onEditTask,\n  onDeleteTask,\n  showDate,\n  validateTask\n}) => {\n  const [editing, setEditing] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); //if editing - renders input\n\n  const [editText, setEditText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(task.title); //Controlled input\n\n  function handleKeyDown(event) {\n    if (event.which === ESCAPE_KEY) {\n      setEditText(task.title);\n      setEditing(false);\n    } else if (event.which === ENTER_KEY) {\n      if (!validateTask(editText, task.id)) {\n        alert(\"Task already exists\");\n        setEditText(task.title);\n        return;\n      }\n\n      onEditTask(task.id, task.status, editText);\n      setEditing(false);\n    }\n  }\n\n  function handleStatusChange() {\n    onEditTask(task.id, task.status === \"active\" ? \"completed\" : \"active\", task.title);\n  }\n\n  function handleDelete() {\n    onDeleteTask(task.id);\n  }\n\n  if (editing) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.TaskEditInput, {\n      autoFocus: true,\n      name: \"editTask\",\n      value: editText,\n      placeholder: \"Add task\",\n      onChange: e => setEditText(e.target.value),\n      onBlur: () => {\n        if (!validateTask(editText, task.id)) {\n          alert(\"Task alreadyy exists\");\n          setEditText(task.title);\n          setEditing(false);\n          return;\n        }\n\n        setEditing(false);\n        onEditTask(task.id, task.status, editText);\n      },\n      onKeyPress: e => handleKeyDown(e)\n    });\n  } //className={task.status===\"completed\" ? \"completed\" : \"\"}\n\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.TaskContainer, {\n    style: {\n      flexWrap: \"wrap\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.InlineContainer, {\n    style: {\n      maxWidth: showDate ? \"60%\" : \"80%\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native_web_dist_exports_CheckBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"toggle\",\n    value: task.status === \"completed\",\n    onChange: () => handleStatusChange()\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    onClick: () => setEditing(true),\n    style: {\n      fontSize: 16,\n      marginLeft: 10,\n      textDecoration: task.status === \"completed\" ? 'line-through' : 'none'\n    }\n  }, task.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.InlineContainer, null, showDate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.TaskDate, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, new Date(task.created).toLocaleDateString())) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, \" \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.DestroyTaskButton, {\n    onPress: () => handleDelete(),\n    title: \"Delete\"\n  })));\n};\nconst styles = react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_4__[\"default\"].create({\n  text: {\n    maxWidth: '80%' // <-- Max width is 80%\n\n  }\n});\n\n//# sourceURL=webpack://todotestapp/./src/Task.jsx?");

/***/ }),

/***/ "./src/TaskFooter.jsx":
/*!****************************!*\
  !*** ./src/TaskFooter.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskFooter)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Filter_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filter.jsx */ \"./src/Filter.jsx\");\n/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.js */ \"./src/styles.js\");\n\n\n\nfunction TaskFooter({\n  taskCount,\n  setFilter,\n  showDate,\n  onChangeShowDate\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_2__.FooterContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_2__.FooterCounter, null, taskCount, \" active tasks\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_2__.InlineContainer, {\n    style: {\n      justifyContent: \"space-between\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Filter_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    setFilter: setFilter\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_2__.ShowDateButton, {\n    onPress: onChangeShowDate,\n    title: showDate ? \"Hide date\" : \"Show date\"\n  })));\n}\n\n//# sourceURL=webpack://todotestapp/./src/TaskFooter.jsx?");

/***/ }),

/***/ "./src/TaskList.jsx":
/*!**************************!*\
  !*** ./src/TaskList.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web/dist/exports/View */ \"./node_modules/react-native-web/dist/exports/View/index.js\");\n/* harmony import */ var react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-web/dist/exports/StyleSheet */ \"./node_modules/react-native-web/dist/exports/StyleSheet/index.js\");\n/* harmony import */ var _Task_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.jsx */ \"./src/Task.jsx\");\n\n\n\n\n\nfunction TaskList({\n  tasks,\n  onEditTask,\n  onDeleteTask,\n  showDate,\n  validateTask\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, tasks.map((task, item) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Task_jsx__WEBPACK_IMPORTED_MODULE_1__.Task, {\n    key: item,\n    task: task,\n    onEditTask: onEditTask,\n    onDeleteTask: onDeleteTask,\n    showDate: showDate,\n    validateTask: validateTask\n  })));\n}\nconst styles = react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create({\n  container: {\n    alignSelf: 'stretch'\n  },\n  scrollView: {\n    backgroundColor: '#eeeeee',\n    maxHeight: 500\n  }\n});\n\n//# sourceURL=webpack://todotestapp/./src/TaskList.jsx?");

/***/ }),

/***/ "./src/TodoApp.jsx":
/*!*************************!*\
  !*** ./src/TodoApp.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoApp)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.js */ \"./src/styles.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _TaskFooter_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskFooter.jsx */ \"./src/TaskFooter.jsx\");\n/* harmony import */ var _AddTask_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddTask.jsx */ \"./src/AddTask.jsx\");\n/* harmony import */ var _TaskList_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TaskList.jsx */ \"./src/TaskList.jsx\");\n/* harmony import */ var react_native_web_dist_exports_ScrollView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-native-web/dist/exports/ScrollView */ \"./node_modules/react-native-web/dist/exports/ScrollView/index.js\");\n/* harmony import */ var react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-native-web/dist/exports/View */ \"./node_modules/react-native-web/dist/exports/View/index.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions */ \"./src/actions/index.js\");\n\n\n\n\n\n\n\n\n\n\n\nfunction TodoApp() {\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n  const tasks = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.tasks);\n  const [activeTasksCount, setActiveTasksCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0); //counts active tasks\n\n  const [taskFilter, setTaskFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('All'); //filter criteria All-Active-Completed\n\n  const [shownTasks, setShownTasks] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(tasks); //filtered tasks array\n\n  const [showDate, setShowDate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); //defines if dates are rendered in tasks (more space on mobile devices)\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => (0,_actions__WEBPACK_IMPORTED_MODULE_6__.fetchTasks)(dispatch), []); //load data from server on mounting app\n  //sets filter value when filter button in Filter clicked\n\n  const setFilter = filter => {\n    setTaskFilter(filter);\n  }; //apply filter when tasks or filter changes by filtering showed tasks\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (taskFilter === 'All') {\n      setShownTasks(tasks);\n      return;\n    } else if (taskFilter === 'Active') {\n      setShownTasks(tasks.filter(task => task.status === 'active'));\n    } else if (taskFilter === 'Completed') {\n      setShownTasks(tasks.filter(task => task.status === 'completed'));\n    }\n  }, [tasks, taskFilter]); //toggles visibility of Dates in tasks when clicked in TaskFooter\n  //(default dates are off to clear space for mobile devices)\n\n  const onChangeShowDate = () => {\n    setShowDate(!showDate);\n  }; //Used in AddTask -> NewTaskForm\n\n\n  const onCreateTask = title => {\n    (0,_actions__WEBPACK_IMPORTED_MODULE_6__.createTask)(dispatch, title);\n  }; //Used in TaskList -> Task\n\n\n  const onEditTask = (id, status, title) => {\n    (0,_actions__WEBPACK_IMPORTED_MODULE_6__.editTask)(dispatch, id, {\n      status,\n      title\n    });\n  }; //Used in TaskList -> Task\n\n\n  const onDeleteTask = id => {\n    (0,_actions__WEBPACK_IMPORTED_MODULE_6__.deleteTask)(dispatch, id);\n  }; //Used in AddTask -> NewTaskForm to prevent adding similar tasks\n\n\n  const validateTaskTitle = (title, id) => {\n    let valid = true;\n\n    for (let item of tasks) {\n      if (item.title.trim() === title.trim()) {\n        if (!id) {\n          //if new task has same title\n          return false;\n        } else if (id != item.id) {\n          //if edited task has other id but same title\n          return false;\n        }\n      }\n    }\n\n    return true;\n  }; //Counts active tasks when tasks changes. Counter used in TaskFooter\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setActiveTasksCount(tasks.reduce((total, task) => task.status === \"completed\" ? total : total + 1, 0));\n  }, [tasks]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    style: {\n      maxHeight: \"100%\",\n      minWidth: 360,\n      width: 800,\n      maxWidth: \"100%\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_native_web_dist_exports_ScrollView__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    scrollEnabled: true,\n    style: {\n      maxHeight: \"100%\",\n      margin: \"0px auto\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.TasksContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.TasksTitle, null, \"ToDo\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddTask_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onAdd: onCreateTask,\n    validateTask: validateTaskTitle\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TaskList_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    tasks: shownTasks,\n    onEditTask: onEditTask,\n    onDeleteTask: onDeleteTask,\n    showDate: showDate,\n    validateTask: validateTaskTitle\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TaskFooter_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    taskCount: activeTasksCount,\n    setFilter: setFilter,\n    showDate: showDate,\n    onChangeShowDate: onChangeShowDate\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.Help, null, \"Click to edit Task\"))));\n}\n\n//# sourceURL=webpack://todotestapp/./src/TodoApp.jsx?");

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchTasksSucceeded\": () => (/* binding */ fetchTasksSucceeded),\n/* harmony export */   \"fetchTasks\": () => (/* binding */ fetchTasks),\n/* harmony export */   \"createTaskSucceeded\": () => (/* binding */ createTaskSucceeded),\n/* harmony export */   \"createTask\": () => (/* binding */ createTask),\n/* harmony export */   \"editTaskSucceeded\": () => (/* binding */ editTaskSucceeded),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"deleteTaskSucceeded\": () => (/* binding */ deleteTaskSucceeded),\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask)\n/* harmony export */ });\nconst dateRegex = new RegExp('^\\\\d\\\\d\\\\d\\\\d-\\\\d\\\\d-\\\\d\\\\d');\n\nfunction jsonDateReviver(key, value) {\n  if (dateRegex.test(value)) return new Date(value);\n  return value;\n}\n\nasync function graphQLFetch(query, variables = {}) {\n  try {\n    const response = await fetch('/graphql', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        query,\n        variables\n      })\n    });\n    const body = await response.text();\n    const result = JSON.parse(body, jsonDateReviver);\n    return result.data;\n  } catch (e) {\n    alert(`Error in sending data to server: ${e.message}`);\n  }\n}\n\nasync function fetchTime() {\n  //fetches current time from worldtimeapi\n  let response = await fetch(\"https://worldtimeapi.org/api/timezone/Europe/London\"); //console.log(response);\n\n  let result = await response.json();\n  let currentDate = result.datetime; //console.log(currentDate);\n\n  return currentDate;\n}\n\nfunction fetchTasksSucceeded(tasks) {\n  //action creator for dispatching all tasks into state\n  return {\n    type: 'FETCH_TASKS_SUCCEEDED',\n    payload: {\n      tasks\n    }\n  };\n}\nasync function fetchTasks(dispatch) {\n  //fetches data from server\n  const query = `query {\n\t\ttaskList {\n\t    id title created status\n\t  }\n\t}`;\n  const data = await graphQLFetch(query); //dispatches data into state with dispatch\n\n  if (data) {\n    dispatch(fetchTasksSucceeded(data.taskList));\n  }\n}\nfunction createTaskSucceeded(task) {\n  //creates action\n  return {\n    type: 'CREATE_TASK_SUCCEEDED',\n    payload: task\n  };\n}\nasync function createTask(dispatch, title) {\n  //makes query to the server to create task\n  let currentDate = await fetchTime();\n  let task = {\n    \"title\": title,\n    \"created\": currentDate\n  };\n  const query = `mutation taskAdd($task: TaskInputs!){\n\t  taskAdd(task: $task) {\n    id title created status\n\t  }\n\t}`;\n  const data = await graphQLFetch(query, {\n    task\n  }); //fetches new task and dispatches it into state\n\n  if (data) {\n    dispatch(createTaskSucceeded(data.taskAdd));\n  }\n}\nfunction editTaskSucceeded(id, changes = {}) {\n  //creates action for edit task in state\n  return {\n    type: 'EDIT_TASK_SUCCEEDED',\n    payload: {\n      id,\n      changes\n    }\n  };\n}\nasync function editTask(dispatch, id, changes = {}) {\n  //send query to the server to update task\n  const query = `mutation taskUpdate($id: Int!, $changes: TaskUpdateInputs!) {\n\t  taskUpdate(id: $id, changes: $changes) {\n    title status\n\t  }\n\t}`; //gets updated task from server and dispatches changes to state\n\n  const data = await graphQLFetch(query, {\n    id,\n    changes\n  });\n\n  if (data) {\n    dispatch(editTaskSucceeded(id, data.taskUpdate));\n  }\n}\nfunction deleteTaskSucceeded(id) {\n  return {\n    type: 'DELETE_TASK_SUCCEEDED',\n    payload: {\n      id\n    }\n  };\n}\nasync function deleteTask(dispatch, id) {\n  const query = `mutation deleteTask($id: Int!) {\n\t  taskDelete(id: $id) \n\t}`;\n  const data = await graphQLFetch(query, {\n    id\n  });\n\n  if (data && data.taskDelete) {\n    dispatch(deleteTaskSucceeded(id));\n  }\n}\n\n//# sourceURL=webpack://todotestapp/./src/actions/index.js?");

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TasksReducer)\n/* harmony export */ });\n/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/index.js */ \"./src/actions/index.js\");\n\nfunction TasksReducer(state = {\n  tasks: []\n}, action) {\n  switch (action.type) {\n    case 'FETCH_TASKS_SUCCEEDED':\n      return {\n        tasks: action.payload.tasks\n      };\n\n    case 'CREATE_TASK_SUCCEEDED':\n      return {\n        tasks: state.tasks.concat(action.payload)\n      };\n\n    case 'EDIT_TASK_SUCCEEDED':\n      return {\n        tasks: state.tasks.map(task => {\n          if (task.id === action.payload.id) {\n            return Object.assign({}, task, action.payload.changes);\n          }\n\n          return task;\n        })\n      };\n\n    case 'DELETE_TASK_SUCCEEDED':\n      return {\n        tasks: state.tasks.filter(task => task.id !== action.payload.id)\n      };\n\n    case 'CREATE_TASK':\n      return {\n        tasks: state.tasks.concat(action.payload)\n      };\n\n    case 'EDIT_TASK':\n      return {\n        tasks: state.tasks.map(task => {\n          if (task.id === action.payload.id) {\n            return Object.assign({}, task, action.payload.params);\n          }\n\n          return task;\n        })\n      };\n\n    case 'DELETE_TASK':\n      return {\n        tasks: state.tasks.filter(task => task.id !== action.payload.id)\n      };\n\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack://todotestapp/./src/reducers/index.js?");

/***/ }),

/***/ "./src/styles.js":
/*!***********************!*\
  !*** ./src/styles.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppContainer\": () => (/* binding */ AppContainer),\n/* harmony export */   \"Help\": () => (/* binding */ Help),\n/* harmony export */   \"TasksContainer\": () => (/* binding */ TasksContainer),\n/* harmony export */   \"TasksTitle\": () => (/* binding */ TasksTitle),\n/* harmony export */   \"TaskContainer\": () => (/* binding */ TaskContainer),\n/* harmony export */   \"AddTaskButton\": () => (/* binding */ AddTaskButton),\n/* harmony export */   \"NewTaskFormContainer\": () => (/* binding */ NewTaskFormContainer),\n/* harmony export */   \"InlineContainer\": () => (/* binding */ InlineContainer),\n/* harmony export */   \"NewTaskButton\": () => (/* binding */ NewTaskButton),\n/* harmony export */   \"CancelNewTaskButton\": () => (/* binding */ CancelNewTaskButton),\n/* harmony export */   \"NewTaskInput\": () => (/* binding */ NewTaskInput),\n/* harmony export */   \"TaskEditInput\": () => (/* binding */ TaskEditInput),\n/* harmony export */   \"DestroyTaskButton\": () => (/* binding */ DestroyTaskButton),\n/* harmony export */   \"TaskDate\": () => (/* binding */ TaskDate),\n/* harmony export */   \"FooterContainer\": () => (/* binding */ FooterContainer),\n/* harmony export */   \"FooterCounter\": () => (/* binding */ FooterCounter),\n/* harmony export */   \"FilterButton\": () => (/* binding */ FilterButton),\n/* harmony export */   \"ShowDateButton\": () => (/* binding */ ShowDateButton)\n/* harmony export */ });\n/* harmony import */ var styled_components_native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components/native */ \"./node_modules/styled-components/native/dist/styled-components.native.esm.js\");\n\nconst AppContainer = styled_components_native__WEBPACK_IMPORTED_MODULE_0__[\"default\"].View`\n\talign-items: flex-start;\n\tbackground-color: #3179ba;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\theight: 100%;\n\twidth: 100%;\n\tpadding: 20px;\n`;\nconst Help = styled_components_native__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Text`\n\ttext-align: center;\n\tcolor: #777;\n\tfont-size: 0.8rem;\n\tpadding-top: 10px;\n`;\nconst TasksContainer = styled_components_native__WEBPACK_IMPORTED_MODULE_0__[\"default\"].View`\n\tbackground-color: #ebecf0;\n\tmax-width: 800px;\n\tmin-width: 375px;\n\twidth: 100%;\n\tmin-height: 40px;\n\tborder-radius: 3px;\n\tpadding: 8px 8px;\n`;\nconst TasksTitle = styled_components_native__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Text`\n\twidth: 100%;\n\ttext-align: center;\n\tmin-height: 30px;\n\tcolor: #777;\n\tfont-size: 2em;\n`;\nconst TaskContainer = styled_components_native__WEBPACK_IMPORTED_MODULE_0__[\"default\"].View`\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tbackground-color: #fff;\n\tcolor: #333;\n\tcursor: pointer;\n\tmargin-bottom: 0.5rem;\n\tpadding: 0.5rem;\n\tmax-width: 800px;\n\tborder-radius: 3px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\ttext-decoration: ${p => p.textDecoration};\n`;\nconst AddTaskButton = styled_components_native__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Button`\n\tbackground-color: #ffffff3d;\n\tborder-radius: 3px;\n\tborder: none;\n\tcolor: #000;\n\tcursor: pointer;\n\tmax-width: 800px;\n\tpadding: 10px 12px;\n\tmargin-bottom: 15px;\n\ttext-align: left;\n\ttransition: background 285ms ease-in;\n\twidth: 100%;\n`;\nconst NewTaskFormContainer = styled_components_native__WEBPACK_IMPORTED_MODULE_0__[\"default\"].View`\n\tmax-width: 800px;\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\talign-items: flex-start;\n\tpadding-bottom: 10px;\n`;\nconst InlineContainer = styled_components_native__WEBPACK_IMPORTED_MODULE_0__[\"default\"].View`\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n`;\nconst NewTaskButton = styled_components_native__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Button`\n\tbackground-color: #5aac44;\n\tborder-radius: 3px;\n\tborder: none;\n\tcolor: #fff;\n\topacity: ${p => p.opacity};\n\tpadding: 6px 12px;\n\tmargin: 50px;\n\ttext-align: center;\n\tcursor: pointer;\n\tdisplay: inline;\n`;\nconst CancelNewTaskButton = styled_components_native__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Button`\n\tbackground-color: #ff6600;\n\tmargin-left: 20px;\n\tborder-radius: 3px;\n\tborder: none;\n\tcolor: #fff;\n\tpadding: 6px 12px;\n\tmargin-left: 6px;\n\ttext-align: center;\n\tcursor: pointer;\n\tdisplay: inline;\n`;\nconst NewTaskInput = styled_components_native__WEBPACK_IMPORTED_MODULE_0__[\"default\"].TextInput`\n\tbackground-color: white;\n\tborder-radius: 3px;\n\tborder: none;\n\tmargin-bottom: 0.5rem;\n\tpadding: 0.5rem 1rem;\n\twidth: 100%;\n`;\nconst TaskEditInput = styled_components_native__WEBPACK_IMPORTED_MODULE_0__[\"default\"].TextInput`\n\tborder-radius: 3px;\n\tborder: none;\n\tmargin-bottom: 0.5rem;\n\tpadding: 0.5rem 1rem;\n\twidth: 100%;\n`;\nconst DestroyTaskButton = styled_components_native__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Button`\n\tbackground-color: transparent;\n\tposition: relative;\n\twidth: 10px;\n\theight: 10px;\n  z-index: 1;\n\tborder: none;\n\tcolor: peru;\n\tpadding: 0px;\n\ttext-align: center;\n\tcursor: pointer;\n\tdisplay: inline-block;\n\topacity: 0.5;\n`;\nconst TaskDate = styled_components_native__WEBPACK_IMPORTED_MODULE_0__[\"default\"].View`\n\tpadding-right: 10px;\n\tpadding-left: 10px;\n\tdisplay: inline;\n`;\nconst FooterContainer = styled_components_native__WEBPACK_IMPORTED_MODULE_0__[\"default\"].View`\n\twidth: 100%;\n\t\n`;\nconst FooterCounter = styled_components_native__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Text`\n\tcolor: #777;\n\tmargin: 5px 20px 10px 20px;\n\tfont-size: 1.25em;\n`;\nconst FilterButton = styled_components_native__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Button`\n\tbackground-color: transparent;\n\tborder-radius: 3px;\n\tborder: none;\n\tcolor: #777;\n\tpadding: 6px 10px;\n\ttext-align: center;\n\tcursor: pointer;\n\tdisplay: inline;\n`;\nconst ShowDateButton = styled_components_native__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Button`\n\tbackground-color: papayawhip;\n\tborder-radius: 3px;\n\tborder: none;\n\tcolor: #fff;\n\tpadding: 6px 10px;\n\tmargin-left: 30px;\n\ttext-align: center;\n\tcursor: pointer;\n\tdisplay: inline;\n`;\n\n//# sourceURL=webpack://todotestapp/./src/styles.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\r\\n\\tbox-sizing: border-box;\\r\\n}\\r\\n*, *:before, *:after {\\r\\n\\tbox-sizing: inherit;\\r\\n}\\r\\nhtml, body, #root {\\r\\n\\theight: 100%;\\r\\n\\tfont-family: arial, \\\"sans-serif\\\", tahoma;\\r\\n}\\r\\n\\r\\n/* These styles disable body scrolling if you are using <ScrollView> */\\r\\nbody { overflow: hidden; }\\r\\n/* These styles make the root element full-height */\\r\\n#root { display:flex; height:100%; }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todotestapp/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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