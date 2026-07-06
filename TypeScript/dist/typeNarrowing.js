"use strict";
//typeof Narrowing
Object.defineProperty(exports, "__esModule", { value: true });
function print(value) {
    if (typeof value === "string") {
        return value.toLocaleUpperCase();
    }
    else {
        return value.toFixed(2);
    }
}
console.log(print("Chandan"));
//Truthiness Narrowing
//Example 1
function serveChai(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    else {
        return `Serving Ginger Chai ${msg}`;
    }
}
console.log(serveChai("Masala Chai"));
//Example 2
let age = 20;
if (age) {
    console.log(age.toFixed(2));
}
else {
    console.log("Done");
}
function light(trafficLight) {
    if (trafficLight === "red") {
        return "Stop";
    }
    if (trafficLight === "yellow") {
        return "Slow Down";
    }
    if (trafficLight === "green") {
        return "Go";
    }
}
console.log(light("yellow"));
class kulhadChai {
    serve() {
        return "Serving Kulhad Chai";
    }
}
class cutting {
    serve() {
        return "Serving cutting Chai";
    }
}
function serve(chai) {
    if (chai instanceof kulhadChai) {
        return chai.serve();
    }
    return chai.serve();
}
const chai1 = new kulhadChai();
const chai2 = new cutting();
console.log(serve(chai1)); // Serving Kulhad Chai
console.log(serve(chai2)); // Serving Cutting Chai
//# sourceMappingURL=typeNarrowing.js.map