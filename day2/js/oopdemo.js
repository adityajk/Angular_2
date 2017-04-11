"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Custom Types = Class, Interface
const module1_1 = require("./module1");
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
