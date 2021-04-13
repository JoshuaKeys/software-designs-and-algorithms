import { Comparable } from './Comparable';

let id = 0;
let counter = 0;

export abstract class Item implements Comparable<Item> {
    value: number;
    name: string;
    weight: number;
    id: number;
    public compareTo(other: Item): number {
        // your code goes here
        if (this.value === other.value) {
            return this.name.toLowerCase() > this.name.toLowerCase() ? 1 : -1;
        }
        return this.value > other.value ? 1 : -1;
    }
    // your code goes here
    constructor(value: number, name: string, weight: number) {
        this.value = value;
        this.name = name;
        this.weight = weight;
        this.id = id++;
        ++counter;
    }

    toString() {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
    }
    static get numberOfItems() {
        return counter;
    }


    static reset() {
        counter = 0;
    }
}
