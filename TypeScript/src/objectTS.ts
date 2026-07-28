const Info = {
  name: "Chandan Yadav",
  class: "MSc.IT.",
  rollNo: 212,
  isPass: true,
};

// {
//     name: string;
//     class: string;
//     rollNo: number;
//     isPass: boolean
// }

//-----------------Declaring Object type--------------------------------------
// Specifying Object Types
// define the type of an object.

let info: {
  name: string;
  class: string;
  rollNo: number;
  isPass: boolean;
};

info = {
  name: "Chandan Yadav",
  class: "MSc.IT.",
  rollNo: 212,
  isPass: true,
};

//ChatGPT Example--

// const person: {
//   name: string;
//   age: number;
//   isStudent: boolean;
// } = {
//   name: "Alice",
//   age: 25,
//   isStudent: true
// };

// If a property has the wrong type, TypeScript gives an error.

// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Alice",
//   age: "25" // ❌ Error: string is not assignable to number
// };

//---------------------------------Using type Aliases------------------------------------

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const Adarakh: Tea = {
  name: "Adarakh Chai",
  price: 30,
  ingredients: ["Tea Leaves", "Ginger", "Suger"],
};

type cup = { size: string };
let smallCup: cup = { size: "300ml" };

let bigCup = { size: "500ml", material: "soil" };

smallCup = bigCup;

type Brew = { brewTime: number };
const Coffee = { brewTime: 10, beans: "Arabica" };
const BrewCoffee: Brew = Coffee;

// type User = {
//   username: string;
//   password: string;
// };

// const u: User = {
//   username: "chandanyadav_104",
// //   password: "123456789",  // Property 'password' is missing in type '{ password: string; }' but required in type 'User'.
// };

//split datatype------------------
// type Item = {name: string, quantity: number}
// type Address = {street: string, pin: number}

// type order = {
//     id: string;
//     items: Item[];
//     address: Address
// }

//----------------------Interesting takes in only in TypeScript Object--------------------------------------------

type Chana = {
  name: string;
  price: number;
  isHot: boolean;
};

const hotChana = (update: Partial<Chana>) => {
  console.log("Update Chana with", update);
};

hotChana({ name: "Tabhaka Chana" });
hotChana({ price: 20 });
hotChana({}); // THIS CAN CREATE ISSUE SOMETIMES

type chaiOrder = {
  name?: string;
  quantity?: number;
};

const placeOrder = (order: Required<chaiOrder>) => {
  console.log(order);
};

placeOrder({ name: "Masala Chai", quantity: 2 });

type chaha = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

type BasicChaiInfo = Pick<chaha, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
  name: "Nagori Chai",
  price: 10,
};

type secretChai = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string;
};

type publicChai = Omit<secretChai, "secretIngedients">;
