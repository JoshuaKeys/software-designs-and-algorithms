import { Consumable } from "./Consumable";

// your code goes here
export class Pizza extends Consumable {
    numberOfSlices: number;
    slicesEaten: number;
    constructor(numberOfSlices: number, spoiled: boolean, value: number, weight: number) {
        super('Pizza', value, weight, spoiled);
        this.numberOfSlices = numberOfSlices;
        this.slicesEaten = 0;
    }
    eat() {
        if (this.slicesEaten < this.numberOfSlices) {
            this.slicesEaten++

            if (this.slicesEaten >= this.numberOfSlices) {
                this.consumed = true;
            }
            return "You eat a slice of the pizza"
        }
        else {
            return "";
        }
    }
}