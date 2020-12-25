webpackHotUpdate_N_E("pages/index",{

/***/ "./components/context/context.tsx":
/*!****************************************!*\
  !*** ./components/context/context.tsx ***!
  \****************************************/
/*! exports provided: Context, ConfigProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Context\", function() { return Context; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ConfigProvider\", function() { return ConfigProvider; });\n/* harmony import */ var _Users_derekvelzy_shadetree_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_derekvelzy_shadetree_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_derekvelzy_shadetree_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_derekvelzy_shadetree_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\nvar _jsxFileName = \"/Users/derekvelzy/shadetree/components/context/context.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__[\"createContext\"])(null);\nvar ConfigProvider = function ConfigProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      topUsers = _useState[0],\n      setTopUsers = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      services = _useState2[0],\n      setServices = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      selectedService = _useState3[0],\n      setSelectedService = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      selectedCity = _useState4[0],\n      setSelectedCity = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      user = _useState5[0],\n      setUser = _useState5[1];\n\n  var getResults = function getResults() {\n    console.log('nuts');\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    function getData() {\n      return _getData.apply(this, arguments);\n    }\n\n    function _getData() {\n      _getData = Object(_Users_derekvelzy_shadetree_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_derekvelzy_shadetree_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        return _Users_derekvelzy_shadetree_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('http://localhost:3000/api/topUsers').then(function (results) {\n                  var users = results.data.topUsers;\n                  var narrow = [];\n                  var user;\n                  var n = 0;\n\n                  for (var i = 0; i < users.length; i++) {\n                    if (user !== users[i].user_id) {\n                      narrow.push({\n                        user_id: users[i].user_id,\n                        first: users[i].first,\n                        last: users[i].last,\n                        username: users[i].username,\n                        mech: users[i].mech,\n                        location: users[i].location,\n                        photo: users[i].photo,\n                        rating: users[i].rating,\n                        service: [users[i].service],\n                        photo_url: [users[i].photo_url]\n                      });\n                      n += 1;\n                      user = users[i].user_id;\n                    } else {\n                      narrow[n - 1].service.push(users[i].service);\n                      narrow[n - 1].photo_url.push(users[i].photo_url);\n                    }\n                  }\n\n                  setTopUsers(narrow);\n                  setServices(results.data.services);\n                });\n                axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('http://localhost:3000/api/userData').then(function (results) {\n                  setUser(results.data);\n                });\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _getData.apply(this, arguments);\n    }\n\n    getData();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Context.Provider, {\n    value: {\n      topUsers: topUsers,\n      setTopUsers: setTopUsers,\n      services: services,\n      setServices: setServices,\n      selectedService: selectedService,\n      setSelectedService: setSelectedService,\n      selectedCity: selectedCity,\n      setSelectedCity: setSelectedCity,\n      user: user\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 91,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ConfigProvider, \"RviaF/oRwBVDV2waYNA9ntwDTBc=\");\n\n_c = ConfigProvider;\nConfigProvider.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node.isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"ConfigProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L2NvbnRleHQudHN4PzVlZjMiXSwibmFtZXMiOlsiQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDb25maWdQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJ0b3BVc2VycyIsInNldFRvcFVzZXJzIiwic2VydmljZXMiLCJzZXRTZXJ2aWNlcyIsInNlbGVjdGVkU2VydmljZSIsInNldFNlbGVjdGVkU2VydmljZSIsInNlbGVjdGVkQ2l0eSIsInNldFNlbGVjdGVkQ2l0eSIsInVzZXIiLCJzZXRVc2VyIiwiZ2V0UmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJnZXREYXRhIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzdWx0cyIsInVzZXJzIiwiZGF0YSIsIm5hcnJvdyIsIm4iLCJpIiwibGVuZ3RoIiwidXNlcl9pZCIsInB1c2giLCJmaXJzdCIsImxhc3QiLCJ1c2VybmFtZSIsIm1lY2giLCJsb2NhdGlvbiIsInBob3RvIiwicmF0aW5nIiwic2VydmljZSIsInBob3RvX3VybCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUE0Qk8sSUFBTUEsT0FBTyxnQkFBR0MsMkRBQWEsQ0FBNkIsSUFBN0IsQ0FBN0I7QUFNQSxJQUFNQyxjQUF3QixHQUFHLFNBQTNCQSxjQUEyQixPQUF5QjtBQUFBOztBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7O0FBQUEsa0JBQy9CQyxzREFBUSxDQUFhLEVBQWIsQ0FEdUI7QUFBQSxNQUN4REMsUUFEd0Q7QUFBQSxNQUM5Q0MsV0FEOEM7O0FBQUEsbUJBRS9CRixzREFBUSxDQUFZLEVBQVosQ0FGdUI7QUFBQSxNQUV4REcsUUFGd0Q7QUFBQSxNQUU5Q0MsV0FGOEM7O0FBQUEsbUJBR2pCSixz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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRGM7QUFBQTtBQUFBOztBQXNDZE4sV0FBTztBQUNSLEdBdkNRLEVBdUNOLEVBdkNNLENBQVQ7QUF5Q0Esc0JBQ0UscUVBQUMsT0FBRCxDQUFTLFFBQVQ7QUFDRSxTQUFLLEVBQUU7QUFDTGQsY0FBUSxFQUFSQSxRQURLO0FBRUxDLGlCQUFXLEVBQVhBLFdBRks7QUFHTEMsY0FBUSxFQUFSQSxRQUhLO0FBSUxDLGlCQUFXLEVBQVhBLFdBSks7QUFLTEMscUJBQWUsRUFBZkEsZUFMSztBQU1MQyx3QkFBa0IsRUFBbEJBLGtCQU5LO0FBT0xDLGtCQUFZLEVBQVpBLFlBUEs7QUFRTEMscUJBQWUsRUFBZkEsZUFSSztBQVNMQyxVQUFJLEVBQUpBO0FBVEssS0FEVDtBQUFBLGNBYUdWO0FBYkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUJELENBckVNOztHQUFNRCxjOztLQUFBQSxjO0FBdUViQSxjQUFjLENBQUN1QyxTQUFmLEdBQTJCO0FBQ3pCdEMsVUFBUSxFQUFFdUMsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURBLENBQTNCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb250ZXh0L2NvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgVG9wLCBTZXJ2aWNlLCBVc2VyIH0gZnJvbSAnLi4vLi4vZGF0YWJhc2UvbW9kZWwvbW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRvcFRvdGFsIHtcbiAgdXNlcl9pZDogTnVtYmVyO1xuICB1c2VybmFtZTogU3RyaW5nO1xuICBmaXJzdDogU3RyaW5nO1xuICBsYXN0OiBTdHJpbmc7XG4gIHBob3RvOiBTdHJpbmc7XG4gIG1lY2g6IEJvb2xlYW47XG4gIHJhdGluZzogU3RyaW5nO1xuICBsb2NhdGlvbjogU3RyaW5nO1xuICBzZXJ2aWNlOiBTdHJpbmdbXTtcbiAgcGhvdG9fdXJsOiBTdHJpbmdbXTtcbn1cblxuaW50ZXJmYWNlIEFwcENvbnRleHRJbnRlcmZhY2Uge1xuICB0b3BVc2VyczogVG9wVG90YWxbXSxcbiAgc2V0VG9wVXNlcnM6IChhcmc6IFRvcFRvdGFsW10pID0+IHZvaWQsXG4gIHNlcnZpY2VzOiBTZXJ2aWNlW10sXG4gIHNldFNlcnZpY2VzOiAoYXJnOiBTZXJ2aWNlW10pID0+IHZvaWQ7XG4gIHNlbGVjdGVkU2VydmljZTogU3RyaW5nLFxuICBzZXRTZWxlY3RlZFNlcnZpY2U6IChhcmc6IFN0cmluZykgPT4gdm9pZDtcbiAgc2VsZWN0ZWRDaXR5OiBTdHJpbmc7XG4gIHNldFNlbGVjdGVkQ2l0eTogKGFyZzogU3RyaW5nKSA9PiB2b2lkO1xuICB1c2VyOiBVc2VyO1xufVxuXG5leHBvcnQgY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QXBwQ29udGV4dEludGVyZmFjZSB8IG51bGw+KG51bGwpO1xuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG59XG5cbmV4cG9ydCBjb25zdCBDb25maWdQcm92aWRlcjogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBbdG9wVXNlcnMsIHNldFRvcFVzZXJzXSA9IHVzZVN0YXRlPFRvcFRvdGFsW10+KFtdKTtcbiAgY29uc3QgW3NlcnZpY2VzLCBzZXRTZXJ2aWNlc10gPSB1c2VTdGF0ZTxTZXJ2aWNlW10+KFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkU2VydmljZSwgc2V0U2VsZWN0ZWRTZXJ2aWNlXSA9IHVzZVN0YXRlPFN0cmluZz4oJycpO1xuICBjb25zdCBbc2VsZWN0ZWRDaXR5LCBzZXRTZWxlY3RlZENpdHldID0gdXNlU3RhdGU8U3RyaW5nPignJyk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXI+KG51bGwpO1xuXG4gIGNvbnN0IGdldFJlc3VsdHMgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ251dHMnKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xuICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3RvcFVzZXJzJylcbiAgICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgICBjb25zdCB1c2VyczogVG9wW10gPSByZXN1bHRzLmRhdGEudG9wVXNlcnM7XG4gICAgICAgICAgbGV0IG5hcnJvdzogVG9wVG90YWxbXSA9IFtdO1xuICAgICAgICAgIGxldCB1c2VyO1xuICAgICAgICAgIGxldCBuID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodXNlciAhPT0gdXNlcnNbaV0udXNlcl9pZCkge1xuICAgICAgICAgICAgICBuYXJyb3cucHVzaCh7XG4gICAgICAgICAgICAgICAgdXNlcl9pZDogdXNlcnNbaV0udXNlcl9pZCxcbiAgICAgICAgICAgICAgICBmaXJzdDogdXNlcnNbaV0uZmlyc3QsXG4gICAgICAgICAgICAgICAgbGFzdDogdXNlcnNbaV0ubGFzdCxcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlcnNbaV0udXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgbWVjaDogdXNlcnNbaV0ubWVjaCxcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogdXNlcnNbaV0ubG9jYXRpb24sXG4gICAgICAgICAgICAgICAgcGhvdG86IHVzZXJzW2ldLnBob3RvLFxuICAgICAgICAgICAgICAgIHJhdGluZzogdXNlcnNbaV0ucmF0aW5nLFxuICAgICAgICAgICAgICAgIHNlcnZpY2U6IFt1c2Vyc1tpXS5zZXJ2aWNlXSxcbiAgICAgICAgICAgICAgICBwaG90b191cmw6IFt1c2Vyc1tpXS5waG90b191cmxdXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIG4gKz0gMTtcbiAgICAgICAgICAgICAgdXNlciA9IHVzZXJzW2ldLnVzZXJfaWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBuYXJyb3dbbiAtIDFdLnNlcnZpY2UucHVzaCh1c2Vyc1tpXS5zZXJ2aWNlKTtcbiAgICAgICAgICAgICAgbmFycm93W24gLSAxXS5waG90b191cmwucHVzaCh1c2Vyc1tpXS5waG90b191cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZXRUb3BVc2VycyhuYXJyb3cpO1xuICAgICAgICAgIHNldFNlcnZpY2VzKHJlc3VsdHMuZGF0YS5zZXJ2aWNlcyk7XG4gICAgICAgIH0pXG5cbiAgICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2VyRGF0YScpXG4gICAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgc2V0VXNlcihyZXN1bHRzLmRhdGEpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBnZXREYXRhKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICB0b3BVc2VycyxcbiAgICAgICAgc2V0VG9wVXNlcnMsXG4gICAgICAgIHNlcnZpY2VzLFxuICAgICAgICBzZXRTZXJ2aWNlcyxcbiAgICAgICAgc2VsZWN0ZWRTZXJ2aWNlLFxuICAgICAgICBzZXRTZWxlY3RlZFNlcnZpY2UsXG4gICAgICAgIHNlbGVjdGVkQ2l0eSxcbiAgICAgICAgc2V0U2VsZWN0ZWRDaXR5LFxuICAgICAgICB1c2VyXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5Db25maWdQcm92aWRlci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/context/context.tsx\n");

/***/ })

})