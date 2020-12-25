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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/context/context.tsx":
/*!****************************************!*\
  !*** ./components/context/context.tsx ***!
  \****************************************/
/*! exports provided: Context, ConfigProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Context\", function() { return Context; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ConfigProvider\", function() { return ConfigProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/derekvelzy/shadetree/components/context/context.tsx\";\n\n\n\n\nconst Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(null);\nconst ConfigProvider = ({\n  children\n}) => {\n  const {\n    0: topUsers,\n    1: setTopUsers\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const {\n    0: services,\n    1: setServices\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const {\n    0: selectedService,\n    1: setSelectedService\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: selectedCity,\n    1: setSelectedCity\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n\n  const getResults = (service, city) => {\n    console.log(service, city);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    async function getData() {\n      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://localhost:3000/api/topUsers').then(results => {\n        const users = results.data.topUsers;\n        let narrow = [];\n        let user;\n        let n = 0;\n\n        for (let i = 0; i < users.length; i++) {\n          if (user !== users[i].user_id) {\n            narrow.push({\n              user_id: users[i].user_id,\n              first: users[i].first,\n              last: users[i].last,\n              username: users[i].username,\n              mech: users[i].mech,\n              location: users[i].location,\n              photo: users[i].photo,\n              rating: users[i].rating,\n              service: [users[i].service],\n              photo_url: [users[i].photo_url]\n            });\n            n += 1;\n            user = users[i].user_id;\n          } else {\n            narrow[n - 1].service.push(users[i].service);\n            narrow[n - 1].photo_url.push(users[i].photo_url);\n          }\n        }\n\n        setTopUsers(narrow);\n        setServices(results.data.services);\n      });\n      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://localhost:3000/api/userData').then(results => {\n        setUser(results.data);\n      });\n    }\n\n    getData();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Context.Provider, {\n    value: {\n      topUsers,\n      setTopUsers,\n      services,\n      setServices,\n      selectedService,\n      setSelectedService,\n      selectedCity,\n      setSelectedCity,\n      user,\n      getResults\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 93,\n    columnNumber: 5\n  }, undefined);\n};\nConfigProvider.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRleHQvY29udGV4dC50c3g/NWVmMyJdLCJuYW1lcyI6WyJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNvbmZpZ1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJ0b3BVc2VycyIsInNldFRvcFVzZXJzIiwidXNlU3RhdGUiLCJzZXJ2aWNlcyIsInNldFNlcnZpY2VzIiwic2VsZWN0ZWRTZXJ2aWNlIiwic2V0U2VsZWN0ZWRTZXJ2aWNlIiwic2VsZWN0ZWRDaXR5Iiwic2V0U2VsZWN0ZWRDaXR5IiwidXNlciIsInNldFVzZXIiLCJnZXRSZXN1bHRzIiwic2VydmljZSIsImNpdHkiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiZ2V0RGF0YSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3VsdHMiLCJ1c2VycyIsImRhdGEiLCJuYXJyb3ciLCJuIiwiaSIsImxlbmd0aCIsInVzZXJfaWQiLCJwdXNoIiwiZmlyc3QiLCJsYXN0IiwidXNlcm5hbWUiLCJtZWNoIiwibG9jYXRpb24iLCJwaG90byIsInJhdGluZyIsInBob3RvX3VybCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUE2Qk8sTUFBTUEsT0FBTyxnQkFBR0MsMkRBQWEsQ0FBNkIsSUFBN0IsQ0FBN0I7QUFNQSxNQUFNQyxjQUF3QixHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQXlCO0FBQy9ELFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBYSxFQUFiLENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCRixzREFBUSxDQUFZLEVBQVosQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csZUFBRDtBQUFBLE9BQWtCQztBQUFsQixNQUF3Q0os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VDtBQUNFLFNBQUssRUFBRTtBQUNMakIsY0FESztBQUVMQyxpQkFGSztBQUdMRSxjQUhLO0FBSUxDLGlCQUpLO0FBS0xDLHFCQUxLO0FBTUxDLHdCQU5LO0FBT0xDLGtCQVBLO0FBUUxDLHFCQVJLO0FBU0xDLFVBVEs7QUFVTEU7QUFWSyxLQURUO0FBQUEsY0FjR1o7QUFkSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFrQkQsQ0F2RU07QUF5RVBELGNBQWMsQ0FBQ3dDLFNBQWYsR0FBMkI7QUFDekJ2QyxVQUFRLEVBQUV3QyxpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBREEsQ0FBM0IiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRleHQvY29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBUb3AsIFNlcnZpY2UsIFVzZXIgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS9tb2RlbC9tb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9wVG90YWwge1xuICB1c2VyX2lkOiBOdW1iZXI7XG4gIHVzZXJuYW1lOiBTdHJpbmc7XG4gIGZpcnN0OiBTdHJpbmc7XG4gIGxhc3Q6IFN0cmluZztcbiAgcGhvdG86IFN0cmluZztcbiAgbWVjaDogQm9vbGVhbjtcbiAgcmF0aW5nOiBTdHJpbmc7XG4gIGxvY2F0aW9uOiBTdHJpbmc7XG4gIHNlcnZpY2U6IFN0cmluZ1tdO1xuICBwaG90b191cmw6IFN0cmluZ1tdO1xufVxuXG5pbnRlcmZhY2UgQXBwQ29udGV4dEludGVyZmFjZSB7XG4gIHRvcFVzZXJzOiBUb3BUb3RhbFtdLFxuICBzZXRUb3BVc2VyczogKGFyZzogVG9wVG90YWxbXSkgPT4gdm9pZCxcbiAgc2VydmljZXM6IFNlcnZpY2VbXSxcbiAgc2V0U2VydmljZXM6IChhcmc6IFNlcnZpY2VbXSkgPT4gdm9pZDtcbiAgc2VsZWN0ZWRTZXJ2aWNlOiBTdHJpbmcsXG4gIHNldFNlbGVjdGVkU2VydmljZTogKGFyZzogU3RyaW5nKSA9PiB2b2lkO1xuICBzZWxlY3RlZENpdHk6IFN0cmluZztcbiAgc2V0U2VsZWN0ZWRDaXR5OiAoYXJnOiBTdHJpbmcpID0+IHZvaWQ7XG4gIHVzZXI6IFVzZXI7XG4gIGdldFJlc3VsdHM6IChhcmcxOiBTdHJpbmcsIGFyZzI6IFN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0PEFwcENvbnRleHRJbnRlcmZhY2UgfCBudWxsPihudWxsKTtcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG5leHBvcnQgY29uc3QgQ29uZmlnUHJvdmlkZXI6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcbiAgY29uc3QgW3RvcFVzZXJzLCBzZXRUb3BVc2Vyc10gPSB1c2VTdGF0ZTxUb3BUb3RhbFtdPihbXSk7XG4gIGNvbnN0IFtzZXJ2aWNlcywgc2V0U2VydmljZXNdID0gdXNlU3RhdGU8U2VydmljZVtdPihbXSk7XG4gIGNvbnN0IFtzZWxlY3RlZFNlcnZpY2UsIHNldFNlbGVjdGVkU2VydmljZV0gPSB1c2VTdGF0ZTxTdHJpbmc+KCcnKTtcbiAgY29uc3QgW3NlbGVjdGVkQ2l0eSwgc2V0U2VsZWN0ZWRDaXR5XSA9IHVzZVN0YXRlPFN0cmluZz4oJycpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyPihudWxsKTtcblxuICBjb25zdCBnZXRSZXN1bHRzID0gKHNlcnZpY2U6IFN0cmluZywgY2l0eTogU3RyaW5nKSA9PiB7XG4gICAgY29uc29sZS5sb2coc2VydmljZSwgY2l0eSk7XG5cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS90b3BVc2VycycpXG4gICAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgY29uc3QgdXNlcnM6IFRvcFtdID0gcmVzdWx0cy5kYXRhLnRvcFVzZXJzO1xuICAgICAgICAgIGxldCBuYXJyb3c6IFRvcFRvdGFsW10gPSBbXTtcbiAgICAgICAgICBsZXQgdXNlcjtcbiAgICAgICAgICBsZXQgbiA9IDA7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHVzZXIgIT09IHVzZXJzW2ldLnVzZXJfaWQpIHtcbiAgICAgICAgICAgICAgbmFycm93LnB1c2goe1xuICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJzW2ldLnVzZXJfaWQsXG4gICAgICAgICAgICAgICAgZmlyc3Q6IHVzZXJzW2ldLmZpcnN0LFxuICAgICAgICAgICAgICAgIGxhc3Q6IHVzZXJzW2ldLmxhc3QsXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJzW2ldLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIG1lY2g6IHVzZXJzW2ldLm1lY2gsXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IHVzZXJzW2ldLmxvY2F0aW9uLFxuICAgICAgICAgICAgICAgIHBob3RvOiB1c2Vyc1tpXS5waG90byxcbiAgICAgICAgICAgICAgICByYXRpbmc6IHVzZXJzW2ldLnJhdGluZyxcbiAgICAgICAgICAgICAgICBzZXJ2aWNlOiBbdXNlcnNbaV0uc2VydmljZV0sXG4gICAgICAgICAgICAgICAgcGhvdG9fdXJsOiBbdXNlcnNbaV0ucGhvdG9fdXJsXVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBuICs9IDE7XG4gICAgICAgICAgICAgIHVzZXIgPSB1c2Vyc1tpXS51c2VyX2lkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbmFycm93W24gLSAxXS5zZXJ2aWNlLnB1c2godXNlcnNbaV0uc2VydmljZSk7XG4gICAgICAgICAgICAgIG5hcnJvd1tuIC0gMV0ucGhvdG9fdXJsLnB1c2godXNlcnNbaV0ucGhvdG9fdXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0VG9wVXNlcnMobmFycm93KTtcbiAgICAgICAgICBzZXRTZXJ2aWNlcyhyZXN1bHRzLmRhdGEuc2VydmljZXMpO1xuICAgICAgICB9KVxuXG4gICAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlckRhdGEnKVxuICAgICAgICAudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICAgIHNldFVzZXIocmVzdWx0cy5kYXRhKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZ2V0RGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgdG9wVXNlcnMsXG4gICAgICAgIHNldFRvcFVzZXJzLFxuICAgICAgICBzZXJ2aWNlcyxcbiAgICAgICAgc2V0U2VydmljZXMsXG4gICAgICAgIHNlbGVjdGVkU2VydmljZSxcbiAgICAgICAgc2V0U2VsZWN0ZWRTZXJ2aWNlLFxuICAgICAgICBzZWxlY3RlZENpdHksXG4gICAgICAgIHNldFNlbGVjdGVkQ2l0eSxcbiAgICAgICAgdXNlcixcbiAgICAgICAgZ2V0UmVzdWx0c1xuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuQ29uZmlnUHJvdmlkZXIucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/context/context.tsx\n");

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/context/context */ \"./components/context/context.tsx\");\n\nvar _jsxFileName = \"/Users/derekvelzy/shadetree/pages/_app.jsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_context_context__WEBPACK_IMPORTED_MODULE_2__[\"ConfigProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzeD82MGQzIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFELEtBQThCO0FBQzFDLHNCQUNFLHFFQUFDLDBFQUFEO0FBQUEsMkJBQ0UscUVBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsQ0FORDs7QUFRZUYsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgQ29uZmlnUHJvdmlkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRleHQvY29udGV4dCc7XG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDb25maWdQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0NvbmZpZ1Byb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/globals.css\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./pages/_app.jsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

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