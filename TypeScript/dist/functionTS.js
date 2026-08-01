"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeChai(type, cups) {
    console.log(`Make ${cups} cups of ${type}`);
}
makeChai("Ginger Chai", 3);
function getChaiPrice() {
    return 20;
}
// function makeOrder(order: string): string {
//   if (!order) return null;
//   return order;
// }
function chaiLog() {
    console.log("Chai is Ready");
}
// function orderChai(type?: string){
// }  // when there is multiple parameter then this optional parameter we write in last of all parameter.
function orderChai(type = "Elaichi Chai") {
} // when there is multiple parameter then this default parameter we write in last of all parameter.
function createChai(order) {
    return 4;
}
const price = createChai({
    type: "Masala Chai",
    sugar: 2,
    size: "large",
});
console.log(price); // 4
//# sourceMappingURL=functionTS.js.map