"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
let info;
info = {
    name: "Chandan Yadav",
    class: "MSc.IT.",
    rollNo: 212,
    isPass: true,
};
const Adarakh = {
    name: "Adarakh Chai",
    price: 30,
    ingredients: ["Tea Leaves", "Ginger", "Suger"],
};
let smallCup = { size: "300ml" };
let bigCup = { size: "500ml", material: "soil" };
smallCup = bigCup;
const Coffee = { brewTime: 10, beans: "Arabica" };
const BrewCoffee = Coffee;
const hotChana = (update) => {
    console.log("Update Chana with", update);
};
hotChana({ name: "Tabhaka Chana" });
hotChana({ price: 20 });
hotChana({}); // THIS CAN CREATE ISSUE SOMETIMES
const placeOrder = (order) => {
    console.log(order);
};
placeOrder({ name: "Masala Chai", quantity: 2 });
const chaiInfo = {
    name: "Nagori Chai",
    price: 10,
};
//# sourceMappingURL=objectTS.js.map