const chaiFlavors: string[] = ["Masala", "Adarakh"];
const chaiPrice: number[] = [10, 20];

const rating: Array<number> = [4.5, 3.8];

type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  { name: "Masal", price: 20 },
  { name: "Adarakh", price: 30 },
];

const cities: readonly string[] = ["Mumbai", "Banglore", "Delhi", "Hydrabad"];
// cities.push("Pune")

const table: number[][] = [
  [1, 4, 7, 9],
  [4, 6, 8, 2],
];

let chaiTuple: [string, number];
chaiTuple = ["Masala", 20];
//chaiTuple = [20, "Masala"]; // We cannot use wrong format of defined tuples

let userInfo: [string, number, boolean?];
userInfo = ["Chandan", 104];
userInfo = ["Chandan", 104, true];

const location: readonly [number, number] = [23.67, 33.56];

const chaiItems: [name: string, price: number] = ["Masala", 100];

enum cupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = cupSize.SMALL;

enum Status {
  PENDING = 100,
  SERVED, //101
  CANCELLED, //102
}

enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}

function makeChai(type: ChaiType) {
  console.log(`Making: ${type}`);
}

makeChai(ChaiType.GINGER);
// makeChai("masala")

enum randomEnum {
  ID = 1,
  NAME = "Chai",
}

const enum sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

const s = sugars.MEDIUM

//unexpected behaviour
let t: [string, number] = ["Chandan", 104]
t.push("SDE")