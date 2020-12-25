module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/topUsers.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./database/connect/db.js":
/*!********************************!*\
  !*** ./database/connect/db.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst {\n  Pool\n} = __webpack_require__(/*! pg */ \"pg\");\n\nconst db = new Pool({\n  host: 'localhost',\n  port: 5432,\n  username: 'derek',\n  password: 'open',\n  database: 'shadetree'\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (db);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9jb25uZWN0L2RiLmpzPzM1ZTkiXSwibmFtZXMiOlsiUG9vbCIsInJlcXVpcmUiLCJkYiIsImhvc3QiLCJwb3J0IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImRhdGFiYXNlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU07QUFBRUE7QUFBRixJQUFXQyxtQkFBTyxDQUFDLGNBQUQsQ0FBeEI7O0FBRUEsTUFBTUMsRUFBRSxHQUFHLElBQUlGLElBQUosQ0FBUztBQUNsQkcsTUFBSSxFQUFFLFdBRFk7QUFFbEJDLE1BQUksRUFBRSxJQUZZO0FBR2xCQyxVQUFRLEVBQUUsT0FIUTtBQUlsQkMsVUFBUSxFQUFFLE1BSlE7QUFLbEJDLFVBQVEsRUFBRTtBQUxRLENBQVQsQ0FBWDtBQVFlTCxpRUFBZiIsImZpbGUiOiIuL2RhdGFiYXNlL2Nvbm5lY3QvZGIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IFBvb2wgfSA9IHJlcXVpcmUoJ3BnJylcblxuY29uc3QgZGIgPSBuZXcgUG9vbCh7XG4gIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICBwb3J0OiA1NDMyLFxuICB1c2VybmFtZTogJ2RlcmVrJyxcbiAgcGFzc3dvcmQ6ICdvcGVuJyxcbiAgZGF0YWJhc2U6ICdzaGFkZXRyZWUnXG59KVxuXG5leHBvcnQgZGVmYXVsdCBkYjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./database/connect/db.js\n");

/***/ }),

/***/ "./database/model/model.ts":
/*!*********************************!*\
  !*** ./database/model/model.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _connect_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../connect/db */ \"./database/connect/db.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getInitialPageLoad: async callback => {\n    const send = {\n      topUsers: [],\n      services: []\n    };\n\n    try {\n      const q1 = 'SELECT users.*, services.service, services.photo_url FROM users JOIN users_services ON users_services.user_id = users.user_id JOIN services ON users_services.service_id = services.service_id where (rating > 4.7)';\n      const q2 = 'SELECT * FROM services';\n      const firstCall = await _connect_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(q1);\n      send.topUsers = firstCall.rows;\n      const secondCall = await _connect_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(q2);\n      send.services = secondCall.rows;\n      callback(null, send);\n    } catch (e) {\n      callback(e, null);\n    }\n  },\n  getUserData: async callback => {\n    try {\n      const q = 'SELECT * FROM users WHERE user_id = 1';\n      const call = await _connect_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(q);\n      callback(null, call.rows[0]);\n    } catch (e) {\n      callback(e, null);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9tb2RlbC9tb2RlbC50cz84MGNmIl0sIm5hbWVzIjpbImdldEluaXRpYWxQYWdlTG9hZCIsImNhbGxiYWNrIiwic2VuZCIsInRvcFVzZXJzIiwic2VydmljZXMiLCJxMSIsInEyIiwiZmlyc3RDYWxsIiwiZGIiLCJxdWVyeSIsInJvd3MiLCJzZWNvbmRDYWxsIiwiZSIsImdldFVzZXJEYXRhIiwicSIsImNhbGwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQStDZTtBQUNiQSxvQkFBa0IsRUFBRSxNQUFPQyxRQUFQLElBQXFDO0FBQ3ZELFVBQU1DLElBQWMsR0FBRztBQUFDQyxjQUFRLEVBQUUsRUFBWDtBQUFlQyxjQUFRLEVBQUU7QUFBekIsS0FBdkI7O0FBQ0EsUUFBSTtBQUNGLFlBQU1DLEVBQUUsR0FBRyxxTkFBWDtBQUNBLFlBQU1DLEVBQUUsR0FBRyx3QkFBWDtBQUNBLFlBQU1DLFNBQVMsR0FBRyxNQUFNQyxtREFBRSxDQUFDQyxLQUFILENBQVNKLEVBQVQsQ0FBeEI7QUFDQUgsVUFBSSxDQUFDQyxRQUFMLEdBQWdCSSxTQUFTLENBQUNHLElBQTFCO0FBQ0EsWUFBTUMsVUFBVSxHQUFHLE1BQU1ILG1EQUFFLENBQUNDLEtBQUgsQ0FBU0gsRUFBVCxDQUF6QjtBQUNBSixVQUFJLENBQUNFLFFBQUwsR0FBZ0JPLFVBQVUsQ0FBQ0QsSUFBM0I7QUFDQVQsY0FBUSxDQUFDLElBQUQsRUFBT0MsSUFBUCxDQUFSO0FBQ0QsS0FSRCxDQVFFLE9BQU9VLENBQVAsRUFBVTtBQUNWWCxjQUFRLENBQUNXLENBQUQsRUFBSSxJQUFKLENBQVI7QUFDRDtBQUNGLEdBZFk7QUFnQmJDLGFBQVcsRUFBRSxNQUFPWixRQUFQLElBQWtDO0FBQzdDLFFBQUk7QUFDRixZQUFNYSxDQUFDLEdBQUcsdUNBQVY7QUFDQSxZQUFNQyxJQUFJLEdBQUcsTUFBTVAsbURBQUUsQ0FBQ0MsS0FBSCxDQUFTSyxDQUFULENBQW5CO0FBQ0FiLGNBQVEsQ0FBQyxJQUFELEVBQU9jLElBQUksQ0FBQ0wsSUFBTCxDQUFVLENBQVYsQ0FBUCxDQUFSO0FBQ0QsS0FKRCxDQUlFLE9BQU9FLENBQVAsRUFBVTtBQUNWWCxjQUFRLENBQUNXLENBQUQsRUFBSSxJQUFKLENBQVI7QUFDRDtBQUNGO0FBeEJZLENBQWYiLCJmaWxlIjoiLi9kYXRhYmFzZS9tb2RlbC9tb2RlbC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYiBmcm9tICcuLi9jb25uZWN0L2RiJztcblxuZXhwb3J0IGludGVyZmFjZSBUb3Age1xuICB1c2VyX2lkOiBOdW1iZXI7XG4gIHVzZXJuYW1lOiBTdHJpbmc7XG4gIGZpcnN0OiBTdHJpbmc7XG4gIGxhc3Q6IFN0cmluZztcbiAgcGhvdG86IFN0cmluZztcbiAgbWVjaDogQm9vbGVhbjtcbiAgcmF0aW5nOiBTdHJpbmc7XG4gIGxvY2F0aW9uOiBTdHJpbmc7XG4gIHNlcnZpY2U6IFN0cmluZztcbiAgcGhvdG9fdXJsOiBTdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VydmljZSB7XG4gIHNlcnZpY2VfaWQ6IE51bWJlcjtcbiAgc2VydmljZTogU3RyaW5nO1xuICBwaG90b191cmw6IFN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21iaW5lZCB7XG4gIHRvcFVzZXJzOiBUb3BbXTtcbiAgc2VydmljZXM6IFNlcnZpY2VbXTtcbn1cblxuaW50ZXJmYWNlIEluaXRpYWxDYWxsYmFjayB7XG4gIChlcnI6IEVycm9yLCByZXN1bHQ/OiB1bmRlZmluZWQgfCBudWxsKTogdm9pZDtcbiAgKGVycjogdW5kZWZpbmVkIHwgbnVsbCwgcmVzdWx0OiBDb21iaW5lZCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XG4gIHVzZXJfaWQ6IE51bWJlcjtcbiAgdXNlcm5hbWU6IFN0cmluZztcbiAgZmlyc3Q6IFN0cmluZztcbiAgbGFzdDogU3RyaW5nO1xuICBwaG90bzogU3RyaW5nO1xuICBtZWNoOiBCb29sZWFuO1xuICByYXRpbmc6IFN0cmluZztcbiAgbG9jYXRpb246IFN0cmluZztcbn1cblxuaW50ZXJmYWNlIFVzZXJDYWxsYmFjayB7XG4gIChlcnI6IEVycm9yLCByZXN1bHQ/OiB1bmRlZmluZWQgfCBudWxsKTogdm9pZDtcbiAgKGVycjogdW5kZWZpbmVkIHwgbnVsbCwgcmVzdWx0OiBVc2VyKTogdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRJbml0aWFsUGFnZUxvYWQ6IGFzeW5jIChjYWxsYmFjazogSW5pdGlhbENhbGxiYWNrKSA9PiB7XG4gICAgY29uc3Qgc2VuZDogQ29tYmluZWQgPSB7dG9wVXNlcnM6IFtdLCBzZXJ2aWNlczogW119O1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBxMSA9ICdTRUxFQ1QgdXNlcnMuKiwgc2VydmljZXMuc2VydmljZSwgc2VydmljZXMucGhvdG9fdXJsIEZST00gdXNlcnMgSk9JTiB1c2Vyc19zZXJ2aWNlcyBPTiB1c2Vyc19zZXJ2aWNlcy51c2VyX2lkID0gdXNlcnMudXNlcl9pZCBKT0lOIHNlcnZpY2VzIE9OIHVzZXJzX3NlcnZpY2VzLnNlcnZpY2VfaWQgPSBzZXJ2aWNlcy5zZXJ2aWNlX2lkIHdoZXJlIChyYXRpbmcgPiA0LjcpJztcbiAgICAgIGNvbnN0IHEyID0gJ1NFTEVDVCAqIEZST00gc2VydmljZXMnO1xuICAgICAgY29uc3QgZmlyc3RDYWxsID0gYXdhaXQgZGIucXVlcnkocTEpO1xuICAgICAgc2VuZC50b3BVc2VycyA9IGZpcnN0Q2FsbC5yb3dzO1xuICAgICAgY29uc3Qgc2Vjb25kQ2FsbCA9IGF3YWl0IGRiLnF1ZXJ5KHEyKTtcbiAgICAgIHNlbmQuc2VydmljZXMgPSBzZWNvbmRDYWxsLnJvd3M7XG4gICAgICBjYWxsYmFjayhudWxsLCBzZW5kKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjYWxsYmFjayhlLCBudWxsKTtcbiAgICB9XG4gIH0sXG5cbiAgZ2V0VXNlckRhdGE6IGFzeW5jIChjYWxsYmFjazogVXNlckNhbGxiYWNrKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHEgPSAnU0VMRUNUICogRlJPTSB1c2VycyBXSEVSRSB1c2VyX2lkID0gMSc7XG4gICAgICBjb25zdCBjYWxsID0gYXdhaXQgZGIucXVlcnkocSk7XG4gICAgICBjYWxsYmFjayhudWxsLCBjYWxsLnJvd3NbMF0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNhbGxiYWNrKGUsIG51bGwpO1xuICAgIH1cbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./database/model/model.ts\n");

/***/ }),

/***/ "./pages/api/topUsers.ts":
/*!*******************************!*\
  !*** ./pages/api/topUsers.ts ***!
  \*******************************/
/*! exports provided: default, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n/* harmony import */ var _database_model_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../database/model/model */ \"./database/model/model.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  _database_model_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getInitialPageLoad((err, results) => {\n    if (err) {\n      console.log('error in controller');\n      res.status(400);\n      res.end();\n    } else {\n      res.end(JSON.stringify(results));\n    }\n  });\n});\nconst config = {\n  api: {\n    externalResolver: true\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdG9wVXNlcnMudHM/NzRlNSJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJtb2RlbCIsImdldEluaXRpYWxQYWdlTG9hZCIsImVyciIsInJlc3VsdHMiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbmZpZyIsImFwaSIsImV4dGVybmFsUmVzb2x2ZXIiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBT2UsZ0VBQUNBLEdBQUQsRUFBc0JDLEdBQXRCLEtBQStDO0FBQzVEQywrREFBSyxDQUFDQyxrQkFBTixDQUF5QixDQUFDQyxHQUFELEVBQW9CQyxPQUFwQixLQUFrRDtBQUN6RSxRQUFJRCxHQUFKLEVBQVM7QUFDUEUsYUFBTyxDQUFDQyxHQUFSLENBQVkscUJBQVo7QUFDQU4sU0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWDtBQUNBUCxTQUFHLENBQUNRLEdBQUo7QUFDRCxLQUpELE1BSU87QUFDTFIsU0FBRyxDQUFDUSxHQUFKLENBQVFDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixPQUFmLENBQVI7QUFDRDtBQUNGLEdBUkQ7QUFTRCxDQVZEO0FBWU8sTUFBTU8sTUFBTSxHQUFHO0FBQ3BCQyxLQUFHLEVBQUU7QUFDSEMsb0JBQWdCLEVBQUU7QUFEZjtBQURlLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvdG9wVXNlcnMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IG1vZGVsLCB7IENvbWJpbmVkIH0gZnJvbSAnLi4vLi4vZGF0YWJhc2UvbW9kZWwvbW9kZWwnO1xuaW1wb3J0IGRiIGZyb20gJy4uLy4uL2RhdGFiYXNlL2Nvbm5lY3QvZGInO1xuXG5pbnRlcmZhY2UgRmV0Y2hlciB7XG4gIChlcnI6IEVycm9yIHwgbnVsbCwgcmVzdWx0czogQ29tYmluZWQgfCBudWxsKTogdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIG1vZGVsLmdldEluaXRpYWxQYWdlTG9hZCgoZXJyOiBFcnJvciB8IG51bGwsIHJlc3VsdHM/OiBDb21iaW5lZCB8IG51bGwpID0+IHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IgaW4gY29udHJvbGxlcicpO1xuICAgICAgcmVzLnN0YXR1cyg0MDApO1xuICAgICAgcmVzLmVuZCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkocmVzdWx0cykpO1xuICAgIH1cbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpOiB7XG4gICAgZXh0ZXJuYWxSZXNvbHZlcjogdHJ1ZSxcbiAgfSxcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/topUsers.ts\n");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pg\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwZ1wiPzRkYTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicGcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///pg\n");

/***/ })

/******/ });