// Custom Types = Class, Interface
import {Point, Point3D} from "./module1"


// use class Point
let p1:Point = new Point(10, 5);
let p2:Point = new Point(1, 2);

let p3:Point = p1.addPoint(p2);
console.log(p3.getX() + ","+ p3.getY());




// Using Point3D
let p31:Point3D = new Point3D(1,2,3);
let p32:Point3D = new Point3D(10,11,12);

let p33:Point3D = p31.addPoint(p32);

console.log(p33);

// Define an interface IPlayers
interface IPlayers {
    getTotalPlayers():number;
}

class MyCricketTeam implements IPlayers {
    getTotalPlayers():number {
        return 11;
    }
}

class MyFootballTeam implements IPlayers {
    getTotalPlayers():number {
        return 9;
    }
}

let players:IPlayers;
players = new MyCricketTeam();

console.log(players.getTotalPlayers());


players = new MyFootballTeam();

console.log(players.getTotalPlayers());