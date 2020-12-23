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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _connect_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../connect/db */ \"./database/connect/db.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getTopUsers: async callback => {\n    const q = 'SELECT users.*, services.service, services.photo_url FROM users JOIN users_services ON users_services.user_id = users.user_id JOIN services ON users_services.service_id = services.service_id where (rating > 4.7)';\n    _connect_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(q, (err, results) => {\n      if (err) {\n        console.log('err! stop it right there');\n        callback(err, null);\n      } else {\n        callback(null, results.rows);\n      }\n    });\n  },\n  getInitialPageLoad: async callback => {\n    const send = {\n      topUsers: null,\n      services: null\n    };\n\n    try {\n      const q1 = 'SELECT users.*, services.service, services.photo_url FROM users JOIN users_services ON users_services.user_id = users.user_id JOIN services ON users_services.service_id = services.service_id where (rating > 4.7)';\n      const q2 = 'SELECT * FROM services';\n      const firstCall = await _connect_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(q1);\n      send.topUsers = firstCall.rows;\n      const secondCall = await _connect_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(q2);\n      send.services = secondCall.rows;\n      callback(null, send);\n    } catch (e) {\n      callback(e, null);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9tb2RlbC9tb2RlbC50cz84MGNmIl0sIm5hbWVzIjpbImdldFRvcFVzZXJzIiwiY2FsbGJhY2siLCJxIiwiZGIiLCJxdWVyeSIsImVyciIsInJlc3VsdHMiLCJjb25zb2xlIiwibG9nIiwicm93cyIsImdldEluaXRpYWxQYWdlTG9hZCIsInNlbmQiLCJ0b3BVc2VycyIsInNlcnZpY2VzIiwicTEiLCJxMiIsImZpcnN0Q2FsbCIsInNlY29uZENhbGwiLCJlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUErQmU7QUFDYkEsYUFBVyxFQUFFLE1BQU9DLFFBQVAsSUFBOEI7QUFDekMsVUFBTUMsQ0FBQyxHQUFHLHFOQUFWO0FBQ0FDLHVEQUFFLENBQUNDLEtBQUgsQ0FBU0YsQ0FBVCxFQUFZLENBQUNHLEdBQUQsRUFBYUMsT0FBYixLQUE4QjtBQUN4QyxVQUFJRCxHQUFKLEVBQVM7QUFDUEUsZUFBTyxDQUFDQyxHQUFSLENBQVksMEJBQVo7QUFDQVAsZ0JBQVEsQ0FBQ0ksR0FBRCxFQUFNLElBQU4sQ0FBUjtBQUNELE9BSEQsTUFHTztBQUNMSixnQkFBUSxDQUFDLElBQUQsRUFBT0ssT0FBTyxDQUFDRyxJQUFmLENBQVI7QUFDRDtBQUNGLEtBUEQ7QUFRRCxHQVhZO0FBYWJDLG9CQUFrQixFQUFFLE1BQU9ULFFBQVAsSUFBOEI7QUFDaEQsVUFBTVUsSUFBYyxHQUFHO0FBQUNDLGNBQVEsRUFBRSxJQUFYO0FBQWlCQyxjQUFRLEVBQUU7QUFBM0IsS0FBdkI7O0FBQ0EsUUFBSTtBQUNGLFlBQU1DLEVBQUUsR0FBRyxxTkFBWDtBQUNBLFlBQU1DLEVBQUUsR0FBRyx3QkFBWDtBQUNBLFlBQU1DLFNBQVMsR0FBRyxNQUFNYixtREFBRSxDQUFDQyxLQUFILENBQVNVLEVBQVQsQ0FBeEI7QUFDQUgsVUFBSSxDQUFDQyxRQUFMLEdBQWdCSSxTQUFTLENBQUNQLElBQTFCO0FBQ0EsWUFBTVEsVUFBVSxHQUFHLE1BQU1kLG1EQUFFLENBQUNDLEtBQUgsQ0FBU1csRUFBVCxDQUF6QjtBQUNBSixVQUFJLENBQUNFLFFBQUwsR0FBZ0JJLFVBQVUsQ0FBQ1IsSUFBM0I7QUFDQVIsY0FBUSxDQUFDLElBQUQsRUFBT1UsSUFBUCxDQUFSO0FBQ0QsS0FSRCxDQVFFLE9BQU9PLENBQVAsRUFBVTtBQUNWakIsY0FBUSxDQUFDaUIsQ0FBRCxFQUFJLElBQUosQ0FBUjtBQUNEO0FBQ0Y7QUExQlksQ0FBZiIsImZpbGUiOiIuL2RhdGFiYXNlL21vZGVsL21vZGVsLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiIGZyb20gJy4uL2Nvbm5lY3QvZGInO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRvcCB7XG4gIHVzZXJfaWQ6IE51bWJlcjtcbiAgdXNlcm5hbWU6IFN0cmluZztcbiAgZmlyc3Q6IFN0cmluZztcbiAgbGFzdDogU3RyaW5nO1xuICBwaG90bzogU3RyaW5nO1xuICBtZWNoOiBCb29sZWFuO1xuICByYXRpbmc6IFN0cmluZztcbiAgbG9jYXRpb246IFN0cmluZztcbiAgc2VydmljZTogU3RyaW5nO1xuICBwaG90b191cmw6IFN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2aWNlIHtcbiAgc2VydmljZV9pZDogTnVtYmVyO1xuICBzZXJ2aWNlOiBTdHJpbmc7XG4gIHBob3RvX3VybDogU3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbWJpbmVkIHtcbiAgdG9wVXNlcnM6IFRvcFtdO1xuICBzZXJ2aWNlczogU2VydmljZVtdO1xufVxuXG5pbnRlcmZhY2UgQ2FsbGJhY2sge1xuICAoZXJyOiBFcnJvciwgcmVzdWx0PzogdW5kZWZpbmVkIHwgbnVsbCk6IHZvaWQ7XG4gIChlcnI6IHVuZGVmaW5lZCB8IG51bGwsIHJlc3VsdDogVG9wW10pOiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldFRvcFVzZXJzOiBhc3luYyAoY2FsbGJhY2s6IENhbGxiYWNrKSA9PiB7XG4gICAgY29uc3QgcSA9ICdTRUxFQ1QgdXNlcnMuKiwgc2VydmljZXMuc2VydmljZSwgc2VydmljZXMucGhvdG9fdXJsIEZST00gdXNlcnMgSk9JTiB1c2Vyc19zZXJ2aWNlcyBPTiB1c2Vyc19zZXJ2aWNlcy51c2VyX2lkID0gdXNlcnMudXNlcl9pZCBKT0lOIHNlcnZpY2VzIE9OIHVzZXJzX3NlcnZpY2VzLnNlcnZpY2VfaWQgPSBzZXJ2aWNlcy5zZXJ2aWNlX2lkIHdoZXJlIChyYXRpbmcgPiA0LjcpJztcbiAgICBkYi5xdWVyeShxLCAoZXJyOiBFcnJvciwgcmVzdWx0czogYW55KSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnIhIHN0b3AgaXQgcmlnaHQgdGhlcmUnKVxuICAgICAgICBjYWxsYmFjayhlcnIsIG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0cy5yb3dzKTtcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIGdldEluaXRpYWxQYWdlTG9hZDogYXN5bmMgKGNhbGxiYWNrOiBDYWxsYmFjaykgPT4ge1xuICAgIGNvbnN0IHNlbmQ6IENvbWJpbmVkID0ge3RvcFVzZXJzOiBudWxsLCBzZXJ2aWNlczogbnVsbH07XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHExID0gJ1NFTEVDVCB1c2Vycy4qLCBzZXJ2aWNlcy5zZXJ2aWNlLCBzZXJ2aWNlcy5waG90b191cmwgRlJPTSB1c2VycyBKT0lOIHVzZXJzX3NlcnZpY2VzIE9OIHVzZXJzX3NlcnZpY2VzLnVzZXJfaWQgPSB1c2Vycy51c2VyX2lkIEpPSU4gc2VydmljZXMgT04gdXNlcnNfc2VydmljZXMuc2VydmljZV9pZCA9IHNlcnZpY2VzLnNlcnZpY2VfaWQgd2hlcmUgKHJhdGluZyA+IDQuNyknO1xuICAgICAgY29uc3QgcTIgPSAnU0VMRUNUICogRlJPTSBzZXJ2aWNlcyc7XG4gICAgICBjb25zdCBmaXJzdENhbGwgPSBhd2FpdCBkYi5xdWVyeShxMSk7XG4gICAgICBzZW5kLnRvcFVzZXJzID0gZmlyc3RDYWxsLnJvd3M7XG4gICAgICBjb25zdCBzZWNvbmRDYWxsID0gYXdhaXQgZGIucXVlcnkocTIpO1xuICAgICAgc2VuZC5zZXJ2aWNlcyA9IHNlY29uZENhbGwucm93cztcbiAgICAgIGNhbGxiYWNrKG51bGwsIHNlbmQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNhbGxiYWNrKGUsIG51bGwpO1xuICAgIH1cbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./database/model/model.ts\n");

/***/ }),

/***/ "./pages/api/topUsers.ts":
/*!*******************************!*\
  !*** ./pages/api/topUsers.ts ***!
  \*******************************/
/*! exports provided: default, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n/* harmony import */ var _database_model_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../database/model/model */ \"./database/model/model.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  _database_model_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getInitialPageLoad((err, results) => {\n    if (err) {\n      console.log('error in controller');\n      res.status(400);\n      res.end();\n    } else {\n      res.end(JSON.stringify(results));\n    }\n  });\n});\nconst config = {\n  api: {\n    externalResolver: true\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdG9wVXNlcnMudHM/NzRlNSJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJtb2RlbCIsImdldEluaXRpYWxQYWdlTG9hZCIsImVyciIsInJlc3VsdHMiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbmZpZyIsImFwaSIsImV4dGVybmFsUmVzb2x2ZXIiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR2UsZ0VBQUNBLEdBQUQsRUFBc0JDLEdBQXRCLEtBQStDO0FBQzVEQywrREFBSyxDQUFDQyxrQkFBTixDQUF5QixDQUFDQyxHQUFELEVBQW9CQyxPQUFwQixLQUFrRDtBQUN6RSxRQUFJRCxHQUFKLEVBQVM7QUFDUEUsYUFBTyxDQUFDQyxHQUFSLENBQVkscUJBQVo7QUFDQU4sU0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWDtBQUNBUCxTQUFHLENBQUNRLEdBQUo7QUFDRCxLQUpELE1BSU87QUFDTFIsU0FBRyxDQUFDUSxHQUFKLENBQVFDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixPQUFmLENBQVI7QUFDRDtBQUNGLEdBUkQ7QUFTRCxDQVZEO0FBWU8sTUFBTU8sTUFBTSxHQUFHO0FBQ3BCQyxLQUFHLEVBQUU7QUFDSEMsb0JBQWdCLEVBQUU7QUFEZjtBQURlLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvdG9wVXNlcnMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IG1vZGVsLCB7IFRvcCwgU2VydmljZSwgQ29tYmluZWQgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS9tb2RlbC9tb2RlbCc7XG5pbXBvcnQgZGIgZnJvbSAnLi4vLi4vZGF0YWJhc2UvY29ubmVjdC9kYic7XG5cbmV4cG9ydCBkZWZhdWx0IChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBtb2RlbC5nZXRJbml0aWFsUGFnZUxvYWQoKGVycjogRXJyb3IgfCBudWxsLCByZXN1bHRzPzogQ29tYmluZWQgfCBudWxsKSA9PiB7XG4gICAgaWYgKGVycikge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGluIGNvbnRyb2xsZXInKTtcbiAgICAgIHJlcy5zdGF0dXMoNDAwKTtcbiAgICAgIHJlcy5lbmQoKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHJlc3VsdHMpKTtcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGFwaToge1xuICAgIGV4dGVybmFsUmVzb2x2ZXI6IHRydWUsXG4gIH0sXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/topUsers.ts\n");

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