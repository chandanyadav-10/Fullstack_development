"use strict";
// class Chai {
//   flavour: string;
//   //   price: number;
Object.defineProperty(exports, "__esModule", { value: true });
//   //   constructor(flavour: string, price: number) {
//   //     this.flavour = flavour;
//   //     this.price = price;
//   //   }
//   constructor(flavour: string, price: number) {
//     this.flavour = flavour;
//     console.log(this);
//   }
// }
// const masalaChai = new Chai("Masala", 10);
// masalaChai.flavour = "Ginger";
class MakeChai {
    flavour = "Masala";
    secretIngredients = "Cardamom";
    reveal() {
        return this.secretIngredients; //ok
    }
}
const mc = new MakeChai();
mc.reveal();
// console.log(mc.reveal());
class Shop {
    shopName = "Chai Corner";
}
class Branch extends Shop {
    getName() {
        return this.shopName; //ok
    }
}
let shopName = new Branch().getName();
console.log(shopName);
class Wallet {
    #balance = 100;
    getBalance() {
        return this.#balance;
    }
}
const w = new Wallet();
console.log(w.getBalance());
class Cup {
    capacity;
    constructor(capacity) {
        this.capacity = capacity;
    }
}
// class Cup{
//   readonly capacity: number;
//   constructor(capacity: number){
//     this.capacity = capacity
//   }
//   cupCapacity(){
//     console.log(`Capacity of cup is ${this.capacity}`)
//   }
// }
// const C = new Cup(250)
// C.cupCapacity()
class ModernChai {
    _sugar = 2;
    get sugar() {
        return this._sugar;
    }
    set sugar(value) {
        if (value > 5) {
            throw new Error("Too Sweet");
        }
        this._sugar = value;
    }
}
const m = new ModernChai();
m.sugar = 3;
console.log(m.sugar);
class EkChai {
    flavour;
    static shopName = "Code Caffe";
    constructor(flavour) {
        this.flavour = flavour;
        this.flavour = flavour;
    }
}
console.log(EkChai.shopName);
//# sourceMappingURL=oop.js.map