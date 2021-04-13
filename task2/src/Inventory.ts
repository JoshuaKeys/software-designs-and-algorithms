import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

// your code goes here
class Inventory {
    items: Array<Item>;


    sort()
    sort(comparator?: ItemComparator) {
        if (!comparator) {
            return this.items.sort((a, b) => a.value > b.value ? 1 : a.value === b.value ? 0 : -1);
        }
        return this.items.sort(comparator.compare);
    }
    toString() {
        return this.items.join(',');
    }
}