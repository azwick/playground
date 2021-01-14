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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/ImageChangeOnMouseOver.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/ImageChangeOnMouseOver.js":
/*!*****************************************!*\
  !*** ./pages/ImageChangeOnMouseOver.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/Anne/Documents/playground/setting-up-toolchain/pages/ImageChangeOnMouseOver.js\";\n\n\nconst ToggleImg = ({\n  primaryImg,\n  secondaryImg\n}) => {\n  const imageRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n    onMouseOver: () => {\n      imageRef.current.src = secondaryImg;\n    },\n    onMouseOut: () => {\n      imageRef.current.src = primaryImg;\n    },\n    src: primaryImg,\n    width: \"400\",\n    alt: \"\",\n    ref: imageRef\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, undefined);\n};\n\nconst ImageChangeOnMouseOver = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ToggleImg, {\n      primaryImg: \"/static/bw/pic-01.jpg\",\n      secondaryImg: \"/static/ori/pic-01.jpg\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, undefined), \"\\xA0\\xA0\\xA0\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ToggleImg, {\n      primaryImg: \"/static/bw/pic-02.jpg\",\n      secondaryImg: \"/static/ori/pic-02.jpg\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageChangeOnMouseOver);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9JbWFnZUNoYW5nZU9uTW91c2VPdmVyLmpzPzFmNzMiXSwibmFtZXMiOlsiVG9nZ2xlSW1nIiwicHJpbWFyeUltZyIsInNlY29uZGFyeUltZyIsImltYWdlUmVmIiwidXNlUmVmIiwiY3VycmVudCIsInNyYyIsIkltYWdlQ2hhbmdlT25Nb3VzZU92ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUcsQ0FBQztBQUFDQyxZQUFEO0FBQWFDO0FBQWIsQ0FBRCxLQUFnQztBQUM5QyxRQUFNQyxRQUFRLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF2QjtBQUVBLHNCQUNJO0FBQUssZUFBVyxFQUFFLE1BQU07QUFDcEJELGNBQVEsQ0FBQ0UsT0FBVCxDQUFpQkMsR0FBakIsR0FBdUJKLFlBQXZCO0FBQ0gsS0FGRDtBQUVHLGNBQVUsRUFBRSxNQUFNO0FBQ2pCQyxjQUFRLENBQUNFLE9BQVQsQ0FBaUJDLEdBQWpCLEdBQXVCTCxVQUF2QjtBQUNILEtBSkQ7QUFLSSxPQUFHLEVBQUVBLFVBTFQ7QUFNSSxTQUFLLEVBQUMsS0FOVjtBQU9JLE9BQUcsRUFBQyxFQVBSO0FBT1csT0FBRyxFQUFFRTtBQVBoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFXSCxDQWREOztBQWdCQSxNQUFNSSxzQkFBc0IsR0FBRyxNQUFNO0FBQ2pDLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsU0FBRDtBQUNJLGdCQUFVLEVBQUMsdUJBRGY7QUFFSSxrQkFBWSxFQUFDO0FBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosK0JBTUkscUVBQUMsU0FBRDtBQUNJLGdCQUFVLEVBQUMsdUJBRGY7QUFFSSxrQkFBWSxFQUFDO0FBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFhSCxDQWREOztBQWdCZUEscUZBQWYiLCJmaWxlIjoiLi9wYWdlcy9JbWFnZUNoYW5nZU9uTW91c2VPdmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlUmVmfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgVG9nZ2xlSW1nID0gKHtwcmltYXJ5SW1nLCBzZWNvbmRhcnlJbWd9KSA9PiB7XG4gICAgY29uc3QgaW1hZ2VSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8aW1nIG9uTW91c2VPdmVyPXsoKSA9PiB7XG4gICAgICAgICAgICBpbWFnZVJlZi5jdXJyZW50LnNyYyA9IHNlY29uZGFyeUltZztcbiAgICAgICAgfX0gb25Nb3VzZU91dD17KCkgPT4ge1xuICAgICAgICAgICAgaW1hZ2VSZWYuY3VycmVudC5zcmMgPSBwcmltYXJ5SW1nO1xuICAgICAgICB9fSBcbiAgICAgICAgICAgIHNyYz17cHJpbWFyeUltZ30gXG4gICAgICAgICAgICB3aWR0aD1cIjQwMFwiIFxuICAgICAgICAgICAgYWx0PVwiXCIgcmVmPXtpbWFnZVJlZn1cbiAgICAgICAgLz5cbiAgICApXG59XG5cbmNvbnN0IEltYWdlQ2hhbmdlT25Nb3VzZU92ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxUb2dnbGVJbWcgXG4gICAgICAgICAgICAgICAgcHJpbWFyeUltZz1cIi9zdGF0aWMvYncvcGljLTAxLmpwZ1wiIFxuICAgICAgICAgICAgICAgIHNlY29uZGFyeUltZz1cIi9zdGF0aWMvb3JpL3BpYy0wMS5qcGdcIiBcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAmbmJzcDsmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgIDxUb2dnbGVJbWcgXG4gICAgICAgICAgICAgICAgcHJpbWFyeUltZz1cIi9zdGF0aWMvYncvcGljLTAyLmpwZ1wiIFxuICAgICAgICAgICAgICAgIHNlY29uZGFyeUltZz1cIi9zdGF0aWMvb3JpL3BpYy0wMi5qcGdcIiBcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDaGFuZ2VPbk1vdXNlT3ZlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/ImageChangeOnMouseOver.js\n");

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