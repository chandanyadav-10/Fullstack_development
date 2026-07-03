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
console.log(light("red"));
//# sourceMappingURL=typeNarrowing.js.map