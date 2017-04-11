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
