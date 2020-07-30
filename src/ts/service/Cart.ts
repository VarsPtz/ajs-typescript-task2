import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        const idItem: number = this._items.findIndex(items => items.id === item.id);
        if (idItem === -1) {
            this._items.push(item);
        }
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    getSum(): number {
        return this._items.reduce(function (sum, current) {
            if (typeof current.amount === 'number') {
                let total = current.price * current.amount;
                return sum += total;
            }
            return sum += current.price;
        }, 0);
    } 

    getSumWithDiscount(percent: number = 1): number {
        return this._items.reduce(function (sum, current) {
            if (typeof current.amount === 'number') {
                let total = current.price * current.amount;
                return sum += (total - (total * (percent / 100)));
            }
            return sum += (current.price - (current.price * (percent / 100)));
        }, 0);
    }

    deleteItem(id: number): void {
        const idItem: number = this._items.findIndex(item => item.id === id);
        if (idItem === -1) {
            throw new Error('These are not the droids you are looking for.');
        }    
        this._items.splice(idItem, 1);
    }
}    