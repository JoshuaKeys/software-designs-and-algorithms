export class Point {
    public x: number;
    public y: number;

    constructor();
    constructor(x: number, y: number)
    constructor(x?: number, y?: number) {
        if (x !== undefined && y !== undefined) {
            this.x = x;
            this.y = y;
            return;
        }
        this.x = 0;
        this.y = 0;
    }
    toString() {
        return `(${this.x}, ${this.y})`
    }
    distance()
    distance(other?: Point)
    distance(xOrPoint?: number | Point, y?: number) {
        if (xOrPoint instanceof Point) {
            return this.computeDistance(xOrPoint.x, xOrPoint.y);
        }
        if (xOrPoint && y) {
            return this.computeDistance(xOrPoint, y);
        }
        return this.computeDistance(0, 0);
    }
    private computeDistance(x, y) {
        return Math.sqrt(
            Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2)
        )
    }
}