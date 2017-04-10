// Custom Types = Class, Interface
// Define a Class Point with x and y members
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
// use class Point
let p1 = new Point(10, 5);
let p2 = new Point(1, 2);
let p3 = p1.addPoint(p2);
console.log(p3.getX() + "," + p3.getY());
// Inheritance
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
// Using Point3D
let p31 = new Point3D(1, 2, 3);
let p32 = new Point3D(10, 11, 12);
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
