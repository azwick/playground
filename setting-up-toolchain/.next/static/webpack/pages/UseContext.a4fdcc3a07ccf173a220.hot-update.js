webpackHotUpdate_N_E("pages/UseContext",{

/***/ "./pages/UseContext.js":
/*!*****************************!*\
  !*** ./pages/UseContext.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/Anne/Documents/playground/setting-up-toolchain/pages/UseContext.js\",\n    _s = $RefreshSig$();\n\n\nvar themes = {\n  light: {\n    foreground: \"#000000\",\n    background: \"#eeeeee\"\n  },\n  dark: {\n    foreground: \"#ffffff\",\n    background: \"#222222\"\n  }\n};\nvar ThemeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(themes.light);\n\nfunction Toolbar(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ThemedButton, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 4\n  }, this);\n}\n\n_c = Toolbar;\n\nfunction ThemedButton() {\n  _s();\n\n  var theme = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(ThemeContext);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    style: {\n      background: theme.background,\n      color: theme.foreground\n    },\n    children: \"I am styled by theme context!\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 4\n  }, this);\n}\n\n_s(ThemedButton, \"+C1P7ukOg/azcV4AZ819oyezFOE=\");\n\n_c2 = ThemedButton;\n\nfunction App() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ThemeContext.Provider, {\n    value: themes.dark,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Toolbar, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 4\n  }, this);\n}\n\n_c3 = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Toolbar\");\n$RefreshReg$(_c2, \"ThemedButton\");\n$RefreshReg$(_c3, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVXNlQ29udGV4dC5qcz9jYmU2Il0sIm5hbWVzIjpbInRoZW1lcyIsImxpZ2h0IiwiZm9yZWdyb3VuZCIsImJhY2tncm91bmQiLCJkYXJrIiwiVGhlbWVDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiVG9vbGJhciIsInByb3BzIiwiVGhlbWVkQnV0dG9uIiwidGhlbWUiLCJ1c2VDb250ZXh0IiwiY29sb3IiLCJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxPQUFLLEVBQUU7QUFDTkMsY0FBVSxFQUFFLFNBRE47QUFFTkMsY0FBVSxFQUFFO0FBRk4sR0FETTtBQUtiQyxNQUFJLEVBQUU7QUFDTEYsY0FBVSxFQUFFLFNBRFA7QUFFTEMsY0FBVSxFQUFFO0FBRlA7QUFMTyxDQUFmO0FBV0EsSUFBTUUsWUFBWSxnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQlAsTUFBTSxDQUFDQyxLQUEzQixDQUFyQjs7QUFFQSxTQUFTTyxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUN0QixzQkFDQztBQUFBLDJCQUNDLHFFQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQUtEOztLQU5RRCxPOztBQVFULFNBQVNFLFlBQVQsR0FBd0I7QUFBQTs7QUFDdEIsTUFBTUMsS0FBSyxHQUFHQyx3REFBVSxDQUFDUCxZQUFELENBQXhCO0FBQ0Esc0JBQ0M7QUFBUSxTQUFLLEVBQUU7QUFBRUYsZ0JBQVUsRUFBRVEsS0FBSyxDQUFDUixVQUFwQjtBQUFnQ1UsV0FBSyxFQUFFRixLQUFLLENBQUNUO0FBQTdDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQUtEOztHQVBRUSxZOztNQUFBQSxZOztBQVNULFNBQVNJLEdBQVQsR0FBZTtBQUNiLHNCQUNDLHFFQUFDLFlBQUQsQ0FBYyxRQUFkO0FBQXVCLFNBQUssRUFBRWQsTUFBTSxDQUFDSSxJQUFyQztBQUFBLDJCQUNDLHFFQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQUtEOztNQU5RVSxHO0FBUU1BLGtFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvVXNlQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHRoZW1lcyA9IHtcbiAgbGlnaHQ6IHtcbiAgIGZvcmVncm91bmQ6IFwiIzAwMDAwMFwiLFxuICAgYmFja2dyb3VuZDogXCIjZWVlZWVlXCJcbiAgfSxcbiAgZGFyazoge1xuICAgZm9yZWdyb3VuZDogXCIjZmZmZmZmXCIsXG4gICBiYWNrZ3JvdW5kOiBcIiMyMjIyMjJcIlxuICB9XG4gfTtcblxuY29uc3QgVGhlbWVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh0aGVtZXMubGlnaHQpO1xuXG5mdW5jdGlvbiBUb29sYmFyKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICA8ZGl2PlxuICAgIDxUaGVtZWRCdXR0b24gLz5cbiAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBUaGVtZWRCdXR0b24oKSB7XG4gIGNvbnN0IHRoZW1lID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuICByZXR1cm4gKFxuICAgPGJ1dHRvbiBzdHlsZT17eyBiYWNrZ3JvdW5kOiB0aGVtZS5iYWNrZ3JvdW5kLCBjb2xvcjogdGhlbWUuZm9yZWdyb3VuZCB9fT5cbiAgICBJIGFtIHN0eWxlZCBieSB0aGVtZSBjb250ZXh0IVxuICAgPC9idXR0b24+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RoZW1lcy5kYXJrfT5cbiAgICA8VG9vbGJhciAvPlxuICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/UseContext.js\n");

/***/ })

})