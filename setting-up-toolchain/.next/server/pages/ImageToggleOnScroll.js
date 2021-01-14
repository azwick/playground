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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/ImageToggleOnScroll.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/ImageToggleOnScroll.js":
/*!**************************************!*\
  !*** ./pages/ImageToggleOnScroll.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/Anne/Documents/playground/setting-up-toolchain/pages/ImageToggleOnScroll.js\";\n\n\nconst ToggleImg = ({\n  primaryImg,\n  secondaryImg\n}) => {\n  const imageRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null); // Code magic for finding out which img is in the middle of the view\n\n  const isInView = () => {\n    const rect = imageRef.current.getBoundingClientRect();\n    return rect.top >= 0 && rect.bottom <= window.innerHeight;\n  };\n\n  const {\n    0: inView,\n    1: setInView\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false); // False defines the default value = no img is by default in the view\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    setInView(isInView()); // Sets the first img in view \n\n    window.addEventListener(\"scroll\", scrollHandler);\n    return () => {\n      window.removeEventListener(\"scroll\", scrollHandler);\n    };\n  }, []); // Only run when the component is first rendered = []\n  // Everytime of scrolling, this will be called again\n\n  const scrollHandler = () => {\n    setInView(isInView());\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n    src: inView ? secondaryImg : primaryImg,\n    width: \"600\",\n    alt: \"\",\n    ref: imageRef\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst ImageToggleOnScroll = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [1, 2, 3, 4, 5, 6].map(myId => {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ToggleImg, {\n          primaryImg: `/static/bw/pic-0${myId}.jpg`,\n          secondaryImg: `/static/ori/pic-0${myId}.jpg`\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 13\n        }, undefined)\n      }, myId, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 11\n      }, undefined);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageToggleOnScroll);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9JbWFnZVRvZ2dsZU9uU2Nyb2xsLmpzP2U5ZWUiXSwibmFtZXMiOlsiVG9nZ2xlSW1nIiwicHJpbWFyeUltZyIsInNlY29uZGFyeUltZyIsImltYWdlUmVmIiwidXNlUmVmIiwiaXNJblZpZXciLCJyZWN0IiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvdHRvbSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiaW5WaWV3Iiwic2V0SW5WaWV3IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJJbWFnZVRvZ2dsZU9uU2Nyb2xsIiwibWFwIiwibXlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFNBQVMsR0FBRyxDQUFDO0FBQUNDLFlBQUQ7QUFBYUM7QUFBYixDQUFELEtBQWdDO0FBQ2hELFFBQU1DLFFBQVEsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXZCLENBRGdELENBR2hEOztBQUNBLFFBQU1DLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFVBQU1DLElBQUksR0FBR0gsUUFBUSxDQUFDSSxPQUFULENBQWlCQyxxQkFBakIsRUFBYjtBQUNBLFdBQU9GLElBQUksQ0FBQ0csR0FBTCxJQUFZLENBQVosSUFBaUJILElBQUksQ0FBQ0ksTUFBTCxJQUFlQyxNQUFNLENBQUNDLFdBQTlDO0FBQ0QsR0FIRDs7QUFLQSxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVFDO0FBQVIsTUFBcUJDLHNEQUFRLENBQUMsS0FBRCxDQUFuQyxDQVRnRCxDQVNKOztBQUU1Q0MseURBQVMsQ0FBQyxNQUFNO0FBQ2RGLGFBQVMsQ0FBQ1QsUUFBUSxFQUFULENBQVQsQ0FEYyxDQUNTOztBQUN2Qk0sVUFBTSxDQUFDTSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0MsYUFBbEM7QUFDQSxXQUFPLE1BQU07QUFDWFAsWUFBTSxDQUFDUSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0QsYUFBckM7QUFDRCxLQUZEO0FBR0QsR0FOUSxFQU1QLEVBTk8sQ0FBVCxDQVhnRCxDQWlCekM7QUFHUDs7QUFDQSxRQUFNQSxhQUFhLEdBQUcsTUFBTTtBQUN4QkosYUFBUyxDQUFDVCxRQUFRLEVBQVQsQ0FBVDtBQUNILEdBRkQ7O0FBSUEsc0JBQ0U7QUFDRSxPQUFHLEVBQUVRLE1BQU0sR0FBR1gsWUFBSCxHQUFrQkQsVUFEL0I7QUFFRSxTQUFLLEVBQUMsS0FGUjtBQUdFLE9BQUcsRUFBQyxFQUhOO0FBR1MsT0FBRyxFQUFFRTtBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU9ELENBaENEOztBQWtDQSxNQUFNaUIsbUJBQW1CLEdBQUcsTUFBTTtBQUNoQyxzQkFDRTtBQUFBLGNBQ0csQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQkMsR0FBbkIsQ0FBd0JDLElBQUQsSUFBVTtBQUNoQywwQkFDRTtBQUFBLCtCQUNFLHFFQUFDLFNBQUQ7QUFDRSxvQkFBVSxFQUFHLG1CQUFrQkEsSUFBSyxNQUR0QztBQUVFLHNCQUFZLEVBQUcsb0JBQW1CQSxJQUFLO0FBRnpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQUFVQSxJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFRRCxLQVRBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBY0QsQ0FmRDs7QUFpQmVGLGtGQUFmIiwiZmlsZSI6Ii4vcGFnZXMvSW1hZ2VUb2dnbGVPblNjcm9sbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFRvZ2dsZUltZyA9ICh7cHJpbWFyeUltZywgc2Vjb25kYXJ5SW1nfSkgPT4ge1xuICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZihudWxsKTtcblxuICAvLyBDb2RlIG1hZ2ljIGZvciBmaW5kaW5nIG91dCB3aGljaCBpbWcgaXMgaW4gdGhlIG1pZGRsZSBvZiB0aGUgdmlld1xuICBjb25zdCBpc0luVmlldyA9ICgpID0+IHtcbiAgICBjb25zdCByZWN0ID0gaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gcmVjdC50b3AgPj0gMCAmJiByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH1cblxuICBjb25zdCBbaW5WaWV3LHNldEluVmlld10gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIEZhbHNlIGRlZmluZXMgdGhlIGRlZmF1bHQgdmFsdWUgPSBubyBpbWcgaXMgYnkgZGVmYXVsdCBpbiB0aGUgdmlld1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SW5WaWV3KGlzSW5WaWV3KCkpOyAvLyBTZXRzIHRoZSBmaXJzdCBpbWcgaW4gdmlldyBcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxIYW5kbGVyKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsSGFuZGxlcik7XG4gICAgfTtcbiAgfSxbXSk7IC8vIE9ubHkgcnVuIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBmaXJzdCByZW5kZXJlZCA9IFtdXG5cblxuICAvLyBFdmVyeXRpbWUgb2Ygc2Nyb2xsaW5nLCB0aGlzIHdpbGwgYmUgY2FsbGVkIGFnYWluXG4gIGNvbnN0IHNjcm9sbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBzZXRJblZpZXcoaXNJblZpZXcoKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8aW1nIFxuICAgICAgc3JjPXtpblZpZXcgPyBzZWNvbmRhcnlJbWcgOiBwcmltYXJ5SW1nfVxuICAgICAgd2lkdGg9XCI2MDBcIiBcbiAgICAgIGFsdD1cIlwiIHJlZj17aW1hZ2VSZWZ9XG4gICAgLz5cbiAgKTtcbn07XG5cbmNvbnN0IEltYWdlVG9nZ2xlT25TY3JvbGwgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtbMSwgMiwgMywgNCwgNSwgNl0ubWFwKChteUlkKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e215SWR9PlxuICAgICAgICAgICAgPFRvZ2dsZUltZyBcbiAgICAgICAgICAgICAgcHJpbWFyeUltZz17YC9zdGF0aWMvYncvcGljLTAke215SWR9LmpwZ2B9XG4gICAgICAgICAgICAgIHNlY29uZGFyeUltZz17YC9zdGF0aWMvb3JpL3BpYy0wJHtteUlkfS5qcGdgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VUb2dnbGVPblNjcm9sbDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/ImageToggleOnScroll.js\n");

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