/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    addPoint(pt) {
        return new Point(this.x + pt.x, this.y + pt.y);
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
}
exports.Point = Point;
class Point3D extends Point {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    addPoint(pt) {
        let p = super.addPoint(pt);
        return new Point3D(p.getX(), p.getY(), this.z + pt.z);
    }
}
exports.Point3D = Point3D;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Custom Types = Class, Interface
const module1_1 = __webpack_require__(0);
// use class Point
let p1 = new module1_1.Point(10, 5);
let p2 = new module1_1.Point(1, 2);
let p3 = p1.addPoint(p2);
console.log(p3.getX() + "," + p3.getY());
// Using Point3D
let p31 = new module1_1.Point3D(1, 2, 3);
let p32 = new module1_1.Point3D(10, 11, 12);
let p33 = p31.addPoint(p32);
console.log(p33);
class MyCricketTeam {
    getTotalPlayers() {
        return 11;
    }
}
class MyFootballTeam {
    getTotalPlayers() {
        return 9;
    }
}
let players;
players = new MyCricketTeam();
console.log(players.getTotalPlayers());
players = new MyFootballTeam();
console.log(players.getTotalPlayers());


/***/ })
/******/ ]);