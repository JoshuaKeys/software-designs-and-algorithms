import { Item } from "./Item";

// your code goes here
export abstract class Consumable extends Item {
    consumed: boolean;
    spoiled: boolean;
    constructor(name: string, value: number, weight: number, spoiled: boolean) {
        super(value, name, weight);
        this.spoiled = spoiled;
        this.consumed = false;
    }
    use() {
        if (!this.spoiled && !this.consumed) {
            return this.eat();
        }
    }
    eat() {
        if (this.consumed) {
            return `There is nothing left of the ${this.name} to consume`
        } else {
            let result = `You eat the ${this.name}`;
            if (this.spoiled) {
                result += 'You feel sick.'
            }
            return result;
        }
    }
}