webpackHotUpdate_N_E("pages/ImageToggleOnScroll",{

/***/ "./pages/ImageToggleOnScroll.js":
/*!**************************************!*\
  !*** ./pages/ImageToggleOnScroll.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/Anne/Documents/playground/setting-up-toolchain/pages/ImageToggleOnScroll.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar ToggleImg = function ToggleImg(_ref) {\n  _s();\n\n  var primaryImg = _ref.primaryImg,\n      secondaryImg = _ref.secondaryImg;\n  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null); // Code magic for finding out which img is in the middle of the view\n\n  var isInView = function isInView() {\n    var rect = imageRef.current.getBoundingClientRect();\n    return rect.top >= 0 && rect.bottom <= window.innerHeight;\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      inView = _useState[0],\n      setInView = _useState[1]; // False defines the default value = no img is by default in the view\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.addEventListener(\"srcoll\", scrollHandler);\n    return function () {\n      window.removeEventListener(\"scroll\", scrollHandler);\n    };\n  }, []); // Only run when the component is first redered = write []\n  // Everytime of scrolling, this will be called again\n\n  var scrollHandler = function scrollHandler() {\n    setInView(isInView());\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n    src: inView ? secondaryImg : primaryImg,\n    width: \"400\",\n    alt: \"\",\n    ref: imageRef\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ToggleImg, \"UYW9FcHyGk33g1TWtearVnAtnLg=\");\n\n_c = ToggleImg;\n\nvar ImageToggleOnScroll = function ImageToggleOnScroll() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [1, 2, 3, 4, 5, 6].map(function (myId) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ToggleImg, {\n          primaryImg: \"/static/bw/pic-0\".concat(myId, \".jpg\"),\n          secondaryImg: \"/static/ori/pic-0\".concat(myId, \".jpg\")\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }, _this)\n      }, myId, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = ImageToggleOnScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageToggleOnScroll);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ToggleImg\");\n$RefreshReg$(_c2, \"ImageToggleOnScroll\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvSW1hZ2VUb2dnbGVPblNjcm9sbC5qcz9lOWVlIl0sIm5hbWVzIjpbIlRvZ2dsZUltZyIsInByaW1hcnlJbWciLCJzZWNvbmRhcnlJbWciLCJpbWFnZVJlZiIsInVzZVJlZiIsImlzSW5WaWV3IiwicmVjdCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJib3R0b20iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInVzZVN0YXRlIiwiaW5WaWV3Iiwic2V0SW5WaWV3IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiSW1hZ2VUb2dnbGVPblNjcm9sbCIsIm1hcCIsIm15SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBZ0M7QUFBQTs7QUFBQSxNQUE5QkMsVUFBOEIsUUFBOUJBLFVBQThCO0FBQUEsTUFBbEJDLFlBQWtCLFFBQWxCQSxZQUFrQjtBQUNoRCxNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF2QixDQURnRCxDQUdoRDs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ25CLFFBQU1DLElBQUksR0FBR0gsUUFBUSxDQUFDSSxPQUFULENBQWlCQyxxQkFBakIsRUFBYjtBQUNBLFdBQU9GLElBQUksQ0FBQ0csR0FBTCxJQUFZLENBQVosSUFBaUJILElBQUksQ0FBQ0ksTUFBTCxJQUFlQyxNQUFNLENBQUNDLFdBQTlDO0FBQ0gsR0FIRDs7QUFKZ0Qsa0JBU3JCQyxzREFBUSxDQUFDLEtBQUQsQ0FUYTtBQUFBLE1BU3pDQyxNQVR5QztBQUFBLE1BU2xDQyxTQVRrQyxpQkFTSjs7O0FBRTVDQyx5REFBUyxDQUFDLFlBQU07QUFDZEwsVUFBTSxDQUFDTSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0MsYUFBbEM7QUFDQSxXQUFPLFlBQU07QUFDWFAsWUFBTSxDQUFDUSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0QsYUFBckM7QUFDRCxLQUZEO0FBR0QsR0FMUSxFQUtQLEVBTE8sQ0FBVCxDQVhnRCxDQWdCekM7QUFHUDs7QUFDQSxNQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEJILGFBQVMsQ0FBQ1YsUUFBUSxFQUFULENBQVQ7QUFDSCxHQUZEOztBQUlBLHNCQUNFO0FBQ0UsT0FBRyxFQUFFUyxNQUFNLEdBQUdaLFlBQUgsR0FBa0JELFVBRC9CO0FBRUUsU0FBSyxFQUFDLEtBRlI7QUFHRSxPQUFHLEVBQUMsRUFITjtBQUdTLE9BQUcsRUFBRUU7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQS9CRDs7R0FBTUgsUzs7S0FBQUEsUzs7QUFpQ04sSUFBTW9CLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUNoQyxzQkFDRTtBQUFBLGNBQ0csQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQkMsR0FBbkIsQ0FBdUIsVUFBQ0MsSUFBRCxFQUFVO0FBQ2hDLDBCQUNFO0FBQUEsK0JBQ0UscUVBQUMsU0FBRDtBQUNFLG9CQUFVLDRCQUFxQkEsSUFBckIsU0FEWjtBQUVFLHNCQUFZLDZCQUFzQkEsSUFBdEI7QUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FBVUEsSUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFRRCxLQVRBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBY0QsQ0FmRDs7TUFBTUYsbUI7QUFpQlNBLGtGQUFmIiwiZmlsZSI6Ii4vcGFnZXMvSW1hZ2VUb2dnbGVPblNjcm9sbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFRvZ2dsZUltZyA9ICh7cHJpbWFyeUltZywgc2Vjb25kYXJ5SW1nfSkgPT4ge1xuICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZihudWxsKTtcblxuICAvLyBDb2RlIG1hZ2ljIGZvciBmaW5kaW5nIG91dCB3aGljaCBpbWcgaXMgaW4gdGhlIG1pZGRsZSBvZiB0aGUgdmlld1xuICBjb25zdCBpc0luVmlldyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSBpbWFnZVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgcmV0dXJuIHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0O1xuICB9XG5cbiAgY29uc3QgW2luVmlldyxzZXRJblZpZXddID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBGYWxzZSBkZWZpbmVzIHRoZSBkZWZhdWx0IHZhbHVlID0gbm8gaW1nIGlzIGJ5IGRlZmF1bHQgaW4gdGhlIHZpZXdcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic3Jjb2xsXCIsIHNjcm9sbEhhbmRsZXIpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxIYW5kbGVyKTtcbiAgICB9O1xuICB9LFtdKTsgLy8gT25seSBydW4gd2hlbiB0aGUgY29tcG9uZW50IGlzIGZpcnN0IHJlZGVyZWQgPSB3cml0ZSBbXVxuXG5cbiAgLy8gRXZlcnl0aW1lIG9mIHNjcm9sbGluZywgdGhpcyB3aWxsIGJlIGNhbGxlZCBhZ2FpblxuICBjb25zdCBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgc2V0SW5WaWV3KGlzSW5WaWV3KCkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGltZyBcbiAgICAgIHNyYz17aW5WaWV3ID8gc2Vjb25kYXJ5SW1nIDogcHJpbWFyeUltZ31cbiAgICAgIHdpZHRoPVwiNDAwXCIgXG4gICAgICBhbHQ9XCJcIiByZWY9e2ltYWdlUmVmfVxuICAgIC8+XG4gIClcbn1cblxuY29uc3QgSW1hZ2VUb2dnbGVPblNjcm9sbCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge1sxLCAyLCAzLCA0LCA1LCA2XS5tYXAoKG15SWQpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17bXlJZH0+XG4gICAgICAgICAgICA8VG9nZ2xlSW1nIFxuICAgICAgICAgICAgICBwcmltYXJ5SW1nPXtgL3N0YXRpYy9idy9waWMtMCR7bXlJZH0uanBnYH1cbiAgICAgICAgICAgICAgc2Vjb25kYXJ5SW1nPXtgL3N0YXRpYy9vcmkvcGljLTAke215SWR9LmpwZ2B9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVRvZ2dsZU9uU2Nyb2xsOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/ImageToggleOnScroll.js\n");

/***/ })

})