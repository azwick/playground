webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/Users/Anne/Documents/playground/setting-up-toolchain/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n // Multiple useState calls\n\nvar inputElement = function inputElement() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      inputText = _useState[0],\n      setInputText = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      historyList = _useState2[0],\n      setHistoryList = _useState2[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      onChange: function onChange(e) {\n        setInputText(e.target.value);\n        setHistoryList([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(historyList), [e.target.value]));\n      },\n      placeholder: \"Enter Some Text\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, _this), inputText, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 18\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: historyList.map(function (rec) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: rec\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 28\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(inputElement, \"Bk0Id2fWlKN3EwjLkrmfJt96ZA4=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (inputElement);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJpbnB1dEVsZW1lbnQiLCJ1c2VTdGF0ZSIsImlucHV0VGV4dCIsInNldElucHV0VGV4dCIsImhpc3RvcnlMaXN0Iiwic2V0SGlzdG9yeUxpc3QiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJyZWMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFDQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1dDLHNEQUFRLENBQUMsRUFBRCxDQURuQjtBQUFBLE1BQ2hCQyxTQURnQjtBQUFBLE1BQ0xDLFlBREs7O0FBQUEsbUJBRWVGLHNEQUFRLENBQUMsRUFBRCxDQUZ2QjtBQUFBLE1BRWhCRyxXQUZnQjtBQUFBLE1BRUhDLGNBRkc7O0FBSXZCLHNCQUNJO0FBQUEsNEJBQ0k7QUFBTyxjQUFRLEVBQUUsa0JBQUNDLENBQUQsRUFBTztBQUNwQkgsb0JBQVksQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWjtBQUNBSCxzQkFBYyx3R0FBS0QsV0FBTCxJQUFpQkUsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQTFCLEdBQWQ7QUFDSCxPQUhEO0FBSUEsaUJBQVcsRUFBQztBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSixFQU9LTixTQVBMLGVBUUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJKLGVBUVM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJULGVBU0k7QUFBQSxnQkFDS0UsV0FBVyxDQUFDSyxHQUFaLENBQWdCLFVBQUNDLEdBQUQsRUFBUTtBQUNyQiw0QkFBTztBQUFBLG9CQUFNQTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDSCxPQUZBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBaUJILENBckJEOztHQUFNVixZOztBQXVCU0EsMkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gTXVsdGlwbGUgdXNlU3RhdGUgY2FsbHNcbmNvbnN0IGlucHV0RWxlbWVudCA9ICgpID0+IHtcbiAgICBjb25zdCBbaW5wdXRUZXh0LCBzZXRJbnB1dFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2hpc3RvcnlMaXN0LCBzZXRIaXN0b3J5TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldElucHV0VGV4dChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgc2V0SGlzdG9yeUxpc3QoWy4uLmhpc3RvcnlMaXN0LGUudGFyZ2V0LnZhbHVlXSk7XG4gICAgICAgICAgICB9fSBcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgU29tZSBUZXh0XCIgLz5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICB7aW5wdXRUZXh0fVxuICAgICAgICAgICAgPGhyLz48YnIvPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtoaXN0b3J5TGlzdC5tYXAoKHJlYyk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2PntyZWN9PC9kaXY+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5wdXRFbGVtZW50OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})