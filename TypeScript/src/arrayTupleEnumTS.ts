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
    [4, 6, 8, 2]
]