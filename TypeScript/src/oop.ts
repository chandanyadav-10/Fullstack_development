// class Chai {
//   flavour: string;
//   //   price: number;

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
  public flavour: string = "Masala";

  private secretIngredients = "Cardamom";

  reveal() {
    return this.secretIngredients; //ok
  }
}

const mc = new MakeChai();
mc.reveal();
// console.log(mc.reveal());

class Shop {
  protected shopName = "Chai Corner";
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
  readonly capacity: number;

  constructor(capacity: number) {
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
  private _sugar = 2;

  get sugar() {
    return this._sugar;
  }

  set sugar(value: number) {
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
  static shopName = "Code Caffe";

  constructor(public flavour: string) {
    this.flavour = flavour;
  }
}

console.log(EkChai.shopName);

abstract class Drink {
  abstract make(): void;
}

class MyChai extends Drink {
  make() {
    console.log("Brewing Chai");
  }
}

// composition class -------------------------

class Heater {
  heat() {}
}

class ChaiMaker {
  constructor(private heater: Heater) {}

  make() {
    this.heater.heat();
  }
}
