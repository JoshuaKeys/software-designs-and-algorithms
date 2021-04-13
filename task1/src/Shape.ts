import { Point } from "./Point";

export abstract class Shape {
    color: string;
    filled: boolean;
    points: Point[];
    constructor(points: Point[])
    constructor(points: Point[], color?: string, filled?: boolean) {
        if (!this.hasAtLeastThreePoints(points)) {
            throw (new Error('Should have at least 3 points'))
        }

        this.points = points
        if (color && typeof filled === 'boolean') {
            this.color = color;
            this.filled = filled;
            return;
        }
        this.color = 'green';
        this.filled = true;
    }
    hasAtLeastThreePoints(points: Point[]) {
        return points.length >= 3;
    }
    toString() {
        const points = this.getPointsString(this.points);
        return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}. Points:${points}.`
    }
    getPerimeter() {
        return this.points.reduce((accum, curr, index, arr) => {
            if (index === 0) {
                return accum + curr.distance()
            }
            if (index === arr.length - 1) {
                let lastLength = accum + curr.distance(arr[index - 1])
                return lastLength + curr.distance(arr[0])
            } else {
                return accum + curr.distance(arr[index - 1],);
            }

        }, 0)
    }
    getPointsString(points) {
        return points.reduce((accum, current, index, array) => {
            if (index === array.length - 1) {
                return `${accum} ${current.toString()}`
            }
            return `${accum} ${current.toString()},`

        }, '')
    }

    abstract getType(): string;
}

