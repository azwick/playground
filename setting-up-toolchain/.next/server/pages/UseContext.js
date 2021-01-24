module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/UseContext.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/UseContext.js":
/*!*****************************!*\
  !*** ./pages/UseContext.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/Anne/Documents/playground/setting-up-toolchain/pages/UseContext.js\";\n\nconst themes = {\n  light: {\n    foreground: \"#000000\",\n    background: \"#eeeeee\"\n  },\n  dark: {\n    foreground: \"#ffffff\",\n    background: \"#222222\"\n  }\n};\nconst ThemeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(themes.light);\n\nfunction ThemedButton() {\n  const theme = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(ThemeContext);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    style: {\n      background: theme.background,\n      color: theme.foreground\n    },\n    children: \"I am styled by theme context!\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 4\n  }, this);\n}\n\nfunction App() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ThemeContext.Provider, {\n    value: themes.dark,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ThemedButton, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 4\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Vc2VDb250ZXh0LmpzP2NiZTYiXSwibmFtZXMiOlsidGhlbWVzIiwibGlnaHQiLCJmb3JlZ3JvdW5kIiwiYmFja2dyb3VuZCIsImRhcmsiLCJUaGVtZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJUaGVtZWRCdXR0b24iLCJ0aGVtZSIsInVzZUNvbnRleHQiLCJjb2xvciIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsTUFBTSxHQUFHO0FBQ2JDLE9BQUssRUFBRTtBQUNOQyxjQUFVLEVBQUUsU0FETjtBQUVOQyxjQUFVLEVBQUU7QUFGTixHQURNO0FBS2JDLE1BQUksRUFBRTtBQUNMRixjQUFVLEVBQUUsU0FEUDtBQUVMQyxjQUFVLEVBQUU7QUFGUDtBQUxPLENBQWY7QUFXQSxNQUFNRSxZQUFZLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CUCxNQUFNLENBQUNDLEtBQTNCLENBQXJCOztBQUVBLFNBQVNPLFlBQVQsR0FBd0I7QUFDdEIsUUFBTUMsS0FBSyxHQUFHQyx3REFBVSxDQUFDTCxZQUFELENBQXhCO0FBQ0Esc0JBQ0M7QUFBUSxTQUFLLEVBQUU7QUFBRUYsZ0JBQVUsRUFBRU0sS0FBSyxDQUFDTixVQUFwQjtBQUFnQ1EsV0FBSyxFQUFFRixLQUFLLENBQUNQO0FBQTdDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQUtEOztBQUVELFNBQVNVLEdBQVQsR0FBZTtBQUNiLHNCQUNDLHFFQUFDLFlBQUQsQ0FBYyxRQUFkO0FBQXVCLFNBQUssRUFBRVosTUFBTSxDQUFDSSxJQUFyQztBQUFBLDJCQUNBLHFFQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQUtEOztBQUVjUSxrRUFBZiIsImZpbGUiOiIuL3BhZ2VzL1VzZUNvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCB0aGVtZXMgPSB7XG4gIGxpZ2h0OiB7XG4gICBmb3JlZ3JvdW5kOiBcIiMwMDAwMDBcIixcbiAgIGJhY2tncm91bmQ6IFwiI2VlZWVlZVwiXG4gIH0sXG4gIGRhcms6IHtcbiAgIGZvcmVncm91bmQ6IFwiI2ZmZmZmZlwiLFxuICAgYmFja2dyb3VuZDogXCIjMjIyMjIyXCJcbiAgfVxuIH07XG5cbmNvbnN0IFRoZW1lQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQodGhlbWVzLmxpZ2h0KTtcblxuZnVuY3Rpb24gVGhlbWVkQnV0dG9uKCkge1xuICBjb25zdCB0aGVtZSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcbiAgcmV0dXJuIChcbiAgIDxidXR0b24gc3R5bGU9e3sgYmFja2dyb3VuZDogdGhlbWUuYmFja2dyb3VuZCwgY29sb3I6IHRoZW1lLmZvcmVncm91bmQgfX0+XG4gICAgSSBhbSBzdHlsZWQgYnkgdGhlbWUgY29udGV4dCFcbiAgIDwvYnV0dG9uPlxuICApO1xufVxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0aGVtZXMuZGFya30+XG4gICA8VGhlbWVkQnV0dG9uIC8+XG4gICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/UseContext.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });