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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.js */ \"./src/styles.js\");\n/* harmony import */ var _NewTaskForm_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewTaskForm.jsx */ \"./src/NewTaskForm.jsx\");\n\n\n\n\nconst AddTask = ({\n  onAdd\n}) => {\n  const [showForm, setShowForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n\n  if (showForm) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NewTaskForm_jsx__WEBPACK_IMPORTED_MODULE_2__.NewTaskForm, {\n      onAdd: text => {\n        onAdd(text);\n        setShowForm(false);\n      },\n      onCancel: () => setShowForm(false)\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.AddTaskButton, {\n    onClick: () => setShowForm(true)\n  }, \"+ AddTask\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddTask);\n\n//# sourceURL=webpack://todotestapp/./src/AddTask.jsx?");

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer */ \"./src/reducer.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.js */ \"./src/styles.js\");\n/* harmony import */ var _TodoApp_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TodoApp.jsx */ \"./src/TodoApp.jsx\");\n\n\n\n\n\n\n\n\n\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_8__.createStore)(_reducer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__.devToolsEnhancer)());\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_6__.AppContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TodoApp_jsx__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null));\n}\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n  store: store\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, null)), document.getElementById('root'));\n\n//# sourceURL=webpack://todotestapp/./src/App.jsx?");

/***/ }),

/***/ "./src/NewTaskForm.jsx":
/*!*****************************!*\
  !*** ./src/NewTaskForm.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NewTaskForm\": () => (/* binding */ NewTaskForm)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.js */ \"./src/styles.js\");\n\n\nconst NewTaskForm = ({\n  onAdd,\n  onCancel\n}) => {\n  const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  let disabled = true; //if task is empty \"create\" (NewTaskButton) button is disabled and faded\n\n  let opacity = 0.4;\n\n  if (text === \"\") {\n    disabled = true;\n    opacity = 0.4;\n  } else {\n    disabled = false;\n    opacity = 1.0;\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.NewTaskFormContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.NewTaskInput, {\n    value: text,\n    placeholder: \"Add task\",\n    onChange: e => setText(e.target.value)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.NewTaskButton, {\n    opacity: opacity,\n    disabled: disabled,\n    onClick: () => onAdd(text)\n  }, \"Create\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.CancelNewTaskButton, {\n    onClick: onCancel\n  }, \"Cancel\")));\n};\n\n//# sourceURL=webpack://todotestapp/./src/NewTaskForm.jsx?");

/***/ }),

/***/ "./src/Task.jsx":
/*!**********************!*\
  !*** ./src/Task.jsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.js */ \"./src/styles.js\");\n\n\nconst ESCAPE_KEY = 27;\nconst ENTER_KEY = 13;\nconst Task = ({\n  task\n}) => {\n  const [editing, setEditing] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [editText, setEditText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(task.title);\n  const [buttonVisible, setButtonVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n\n  function handleKeyDown(event) {\n    if (event.which === ESCAPE_KEY) {\n      setEditText(task.title);\n      setEditing(false);\n    } else if (event.which === ENTER_KEY) {\n      console.log(\"submited\", editText);\n      setEditText(task.title);\n      setEditing(false);\n    }\n  }\n\n  if (editing) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.TaskEditInput, {\n      value: editText,\n      placeholder: \"Add task\",\n      onChange: e => setEditText(e.target.value),\n      onBlur: () => {\n        console.log(\"submited\", editText);\n        setEditing(false);\n      },\n      onKeyDown: e => handleKeyDown(e)\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.TaskContainer, {\n    className: task.status === \"completed\" ? \"completed\" : \"\",\n    onDoubleClick: () => setEditing(true),\n    onMouseOver: () => setButtonVisible(true),\n    onMouseOut: () => setButtonVisible(false)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    className: \"toggle\",\n    type: \"checkbox\",\n    checked: task.status === \"completed\",\n    onChange: () => console.log(\"Task status changed\")\n  }), task.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.TaskDate, null, new Date(task.created).toDateString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.DestroyTaskButton, {\n    className: buttonVisible ? \"visible\" : \"\"\n  })));\n};\n\n//# sourceURL=webpack://todotestapp/./src/Task.jsx?");

/***/ }),

/***/ "./src/TaskFooter.jsx":
/*!****************************!*\
  !*** ./src/TaskFooter.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskFooter)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nfunction TaskFooter({\n  taskCount\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, taskCount, \" active tasks\"));\n}\n\n//# sourceURL=webpack://todotestapp/./src/TaskFooter.jsx?");

/***/ }),

/***/ "./src/TaskList.jsx":
/*!**************************!*\
  !*** ./src/TaskList.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Task_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.jsx */ \"./src/Task.jsx\");\n\n\nfunction TaskList({\n  tasks\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, tasks.map((task, item) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Task_jsx__WEBPACK_IMPORTED_MODULE_1__.Task, {\n    key: item,\n    task: task\n  })));\n} //\n\n//# sourceURL=webpack://todotestapp/./src/TaskList.jsx?");

/***/ }),

/***/ "./src/TodoApp.jsx":
/*!*************************!*\
  !*** ./src/TodoApp.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoApp)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.js */ \"./src/styles.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _TaskFooter_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskFooter.jsx */ \"./src/TaskFooter.jsx\");\n/* harmony import */ var _AddTask_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddTask.jsx */ \"./src/AddTask.jsx\");\n/* harmony import */ var _TaskList_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TaskList.jsx */ \"./src/TaskList.jsx\");\n\n\n\n\n\n\nconst sampleTask = {\n  status: \"active\",\n  title: \"Make ToDo App\",\n  date: \"2021-10-15\"\n};\nfunction TodoApp() {\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n  const tasks = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.tasks);\n  const [activeTasksCount, setActiveTasksCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  console.log(\"tasks: \", tasks);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setActiveTasksCount(tasks.reduce((total, task) => task.status === \"completed\" ? total : total + 1, 0));\n    console.log(\"useEffect\");\n  }, [tasks]);\n  console.log(\"tasks count: \", activeTasksCount);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.TasksContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_js__WEBPACK_IMPORTED_MODULE_1__.TasksTitle, null, \"ToDo\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddTask_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onAdd: console.log\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TaskList_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    tasks: tasks\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TaskFooter_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    taskCount: activeTasksCount\n  }));\n}\n\n//# sourceURL=webpack://todotestapp/./src/TodoApp.jsx?");

/***/ }),

/***/ "./src/reducer.js":
/*!************************!*\
  !*** ./src/reducer.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ reducer)\n/* harmony export */ });\nconst initialState = {\n  tasks: [{\n    id: 1,\n    status: \"active\",\n    title: \"Fix bug in line 8\",\n    description: \"Short description\",\n    created: \"2021-10-15\"\n  }, {\n    id: 2,\n    status: \"completed\",\n    title: \"Kill Bill\",\n    description: \"Long description\",\n    created: \"2021-10-17\"\n  }, {\n    id: 3,\n    status: \"active\",\n    title: \"Win a JackPot\",\n    description: \"Long description\",\n    created: \"2021-10-17\"\n  }]\n};\nfunction reducer(state = initialState, action) {\n  switch (action.type) {\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack://todotestapp/./src/reducer.js?");

/***/ }),

/***/ "./src/styles.js":
/*!***********************!*\
  !*** ./src/styles.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppContainer\": () => (/* binding */ AppContainer),\n/* harmony export */   \"TasksContainer\": () => (/* binding */ TasksContainer),\n/* harmony export */   \"TasksTitle\": () => (/* binding */ TasksTitle),\n/* harmony export */   \"TaskContainer\": () => (/* binding */ TaskContainer),\n/* harmony export */   \"AddTaskButton\": () => (/* binding */ AddTaskButton),\n/* harmony export */   \"NewTaskFormContainer\": () => (/* binding */ NewTaskFormContainer),\n/* harmony export */   \"NewTaskButton\": () => (/* binding */ NewTaskButton),\n/* harmony export */   \"CancelNewTaskButton\": () => (/* binding */ CancelNewTaskButton),\n/* harmony export */   \"NewTaskInput\": () => (/* binding */ NewTaskInput),\n/* harmony export */   \"TaskEditInput\": () => (/* binding */ TaskEditInput),\n/* harmony export */   \"DestroyTaskButton\": () => (/* binding */ DestroyTaskButton),\n/* harmony export */   \"TaskDate\": () => (/* binding */ TaskDate)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst AppContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n\talign-items: flex-start;\n\tbackground-color: #3179ba;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\theight: 100%;\n\tpadding: 20px;\n\twidth: 100%;\n`;\nconst TasksContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n\tbackground-color: #ebecf0;\n\tmax-width: 800px;\n\tmin-width: 200px;\n\twidth: 100%;\n\tmin-height: 40px;\n\tmargin-right: 20px;\n\tborder-radius: 3px;\n\tpadding: 8px 8px;\n\tflex-grow: 0;\n`;\nconst TasksTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n\twidth: 100%;\n\ttext-align: center;\n\tmin-height: 30px;\n\tcolor: #777;\n\tfont-size: 2em;\n`;\nconst TaskContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n\tbackground-color: #fff;\n\tcursor: pointer;\n\tmargin-bottom: 0.5rem;\n\tpadding: 0.5rem;\n\tmax-width: 800px;\n\tborder-radius: 3px;\n\tbox-shadow: #091e4240 0px 1px 0px 0px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\ttext-decoration: ${p => p.textDecoration};\n\t&.completed {\n\t\ttext-decoration: line-through;\n\t\tcolor: #888;\n\t}\n`;\nconst AddTaskButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button`\n\tbackground-color: #ffffff3d;\n\tborder-radius: 3px;\n\tborder: none;\n\tcolor: #000;\n\tcursor: pointer;\n\tmax-width: 800px;\n\tpadding: 10px 12px;\n\tmargin-bottom: 5px;\n\ttext-align: left;\n\ttransition: background 285ms ease-in;\n\twidth: 100%;\n\t&:hover {\n\t\tbackground-color: #3179ba55;\n\t}\n\t& disabled {\n\t\tbackground-color: red;\n\t}\n`;\nconst NewTaskFormContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n\tmax-width: 800px;\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\talign-items: flex-start;\n\tpadding-bottom: 10px;\n`;\nconst NewTaskButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button`\n\tbackground-color: #5aac44;\n\tborder-radius: 3px;\n\tborder: none;\n\tbox-shadow: none;\n\tcolor: #fff;\n\topacity: ${p => p.opacity};\n\tpadding: 6px 12px;\n\ttext-align: center;\n\tcursor: pointer;\n\tdisplay: inline;\n`;\nconst CancelNewTaskButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button`\n\tbackground-color: #ff6600;\n\tborder-radius: 3px;\n\tborder: none;\n\tbox-shadow: none;\n\tcolor: #fff;\n\tpadding: 6px 12px;\n\tmargin-left: 6px;\n\ttext-align: center;\n\tcursor: pointer;\n\tdisplay: inline;\n`;\nconst NewTaskInput = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].input`\n\tborder-radius: 3px;\n\tborder: none;\n\tbox-shadow: #091e4240 0px 1px 0px 0px;\n\tmargin-bottom: 0.5rem;\n\tpadding: 0.5rem 1rem;\n\twidth: 100%;\n`;\nconst TaskEditInput = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].input`\n\tborder-radius: 3px;\n\tborder: none;\n\tbox-shadow: #091e4240 0px 1px 0px 0px;\n\tmargin-bottom: 0.5rem;\n\tpadding: 0.5rem 1rem;\n\twidth: 100%;\n`;\nconst DestroyTaskButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button`\n\tbackground-color: transparent;\n\tposition: relative;\n\twidth: 10px;\n\theight: 10px;\n  z-index: 1;\n\tborder: none;\n\tbox-shadow: none;\n\tcolor: peru;\n\tpadding: 0px;\n\ttext-align: center;\n\tcursor: pointer;\n\tdisplay: inline-block;\n\topacity: 0.5;\n\t&:before {\n    content: '+';\n    color: peru;\n    position: absolute;\n    z-index: 2;\n    transform: rotate(45deg);\n    font-size: 1.5rem;\n    top: -17px;\n    left: -3px;\n    transition: all 0.3s cubic-bezier(0.77, 0, 0.2, 0.85);\n  }\n\t&.visible {\n\t\topacity: 1.0;\n\t\ttext-decoration: none;\n\t}\n`;\nconst TaskDate = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n\tpadding-right: 10px;\n\tpadding-left: 10px;\n\tdisplay: inline;\n`;\n\n//# sourceURL=webpack://todotestapp/./src/styles.js?");

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