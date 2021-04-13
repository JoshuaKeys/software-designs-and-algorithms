import { Weapon } from "./Weapon";

// your code goes here
export class Bow extends Weapon {
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super('bow', baseDamage, baseDurability, value, weight);
    }
    polish() {
        if (this.durabilityModifier + this.MODIFIER_CHANGE_RATE <= 1) {
            this.durabilityModifier += this.MODIFIER_CHANGE_RATE;
        }
    }
}