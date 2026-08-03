interface Chai {
  flavour: string;
  price: number;
  milk?: boolean;
}

const Ginger: Chai = {
  flavour: "Ginger",
  price: 30,
};

interface Shop {
  readonly id: number;
  name: string;
}

const S: Shop = {
  id: 1,
  name: "Code Caffe",
};

// S.id = 2 //this will give error and we cannot update readonly properties

interface DiscountCalculator {
  (price: number): number;
}

const apply50: DiscountCalculator = (p) => p * 0.5;

interface TeaMachine {
  start(): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log("Start");
  },
  stop() {
    console.log("Stop");
  },
};

interface ChaiRatings {
  [flavor: string]: number;
}

const ratings: ChaiRatings = {
  masala: 4.8,
  ginger: 4.7,
};

interface User {
  name: String;
}

interface User {
  age: number;
}

const u: User = {
  name: "Chandan",
  age: 27,
};

interface Fly {
  fly(): void;
}

interface Swim {
  swim(): void;
}

interface Duck extends Fly, Swim {
  name: string;
}

const duck: Duck = {
  name: "Donald",

  fly() {
    console.log("Flying");
  },

  swim() {
    console.log("Swimming");
  },
};

interface A {
  a: string;
}

interface B {
  b: string;
}

interface c extends A, B {}


