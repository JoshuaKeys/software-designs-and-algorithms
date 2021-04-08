import { Point } from './Point';
import { Shape } from './Shape';

export class Triangle extends Shape {
    point1: Point;
    point2: Point;
    point3: Point;

    constructor(point1: Point, point2: Point, point3: Point)
    constructor(point1: Point, point2: Point, point3: Point, color?: string, filled?: string) {
        super([point1, point2, point3])
        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
    }
    toString() {
        return `Triangle[v1=${this.point1.toString()},v2=${this.point2.toString()},v3=${this.point3.toString()}]`
    }
    getPerimeter() {
        return this.points.reduce((accum, curr) => {
            return 0
        }, 0)
    }
    getType() {
        if (this.isEquilateral()) {
            return 'equilateral triangle'
        }
        if (this.isIsosceles()) {
            return 'isosceles triangle';
        }
        if (!this.isIsosceles() && !this.isEquilateral()) {
            return 'scalene triangle'
        }
    }
    isEquilateral() {
        let distance1 = this.point2.distance(this.point1);
        let distance2 = this.point3.distance(this.point2);
        let distance3 = this.point3.distance(this.point1);
        return distance1 == distance2 && distance2 === distance3
    }
    isIsosceles() {
        let distance1 = this.point2.distance(this.point1);
        let distance2 = this.point3.distance(this.point2);
        let distance3 = this.point3.distance(this.point1);

        return distance1 === distance2 || distance1 === distance3 || distance2 === distance3
    }
}
