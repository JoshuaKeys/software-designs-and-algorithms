import { Weapon } from './Weapon';
// your code goes here
class Sword extends Weapon {
    name: string;
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super('sword', baseDamage, baseDurability, value, weight);
        this.name = 'sword';
    }
    polish() {
        const cal25Percent = this.baseDamage * 25 / 100;
        if (this.damangeModifier + this.MODIFIER_CHANGE_RATE < this.baseDamage + cal25Percent) {
            this.damangeModifier += this.MODIFIER_CHANGE_RATE;
        }
        this.damangeModifier += this.MODIFIER_CHANGE_RATE;
    }
}