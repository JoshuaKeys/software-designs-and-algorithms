import { Item } from "./Item";

// your code goes here
export abstract class Weapon extends Item {
    baseDamage: number;
    damangeModifier: number;
    baseDurability: number;
    durabilityModifier: number;
    MODIFIER_CHANGE_RATE = 0.05;
    constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(value, name, weight);
        this.baseDamage = baseDamage;
        this.baseDurability = baseDurability;
        this.damangeModifier = this.MODIFIER_CHANGE_RATE;
        this.damangeModifier = this.MODIFIER_CHANGE_RATE;
    }

    getDamage() {
        return this.baseDamage + this.damangeModifier;
    }
    getDurability() {
        return this.baseDurability + this.durabilityModifier;
    }
    toString() {
        const result = `${this.name} - Value: ${this.value}, Weight: ${this.weight}, Damage: ${this.getDamage()}, Durability: ${this.getDurability()}`;

        return result;
    }
    use() {
        let initialString = `You use the ${this.name}, dealing ${this.getDamage()} points of damage`
        this.baseDurability -= this.MODIFIER_CHANGE_RATE;
        if (this.getDamage() <= 0) {
            initialString += `The ${this.name} breaks`
        }

        return initialString;
    }
}