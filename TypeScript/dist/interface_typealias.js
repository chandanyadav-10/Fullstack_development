"use strict";
//Example 1 - typealias
Object.defineProperty(exports, "__esModule", { value: true });
function makeChai(order) {
    console.log("Making chai:", order);
}
function serveChai(order) {
    console.log("Serving chai:", order);
}
const order = {
    type: "Masala Chai",
    sugar: 2,
    strong: true,
};
makeChai(order);
serveChai(order);
//# sourceMappingURL=interface_typealias.js.map