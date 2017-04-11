export class Point {

    constructor(private x:number, private y:number) {
        
    }

    addPoint(pt:Point):Point {
        return new Point(this.x+pt.x, this.y+pt.y);

    }

    getX():number {
        return this.x;
    }

    getY():number {
        return this.y;
    }
}

export class Point3D extends Point {

    constructor(x:number, y:number, private z:number) {
        super(x, y);
    }

    addPoint(pt:Point3D):Point3D {
        let p:Point = super.addPoint(pt);
        return new Point3D(p.getX(), p.getY(), this.z+pt.z);
    }
}