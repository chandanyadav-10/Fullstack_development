"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// practice by myself
let n = "104";
let v = n;
console.log(v.length);
console.log(typeof v);
let response = "42";
let numericLength = response.length;
let bookString = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject);
const inputElement = document.getElementById("username");
// any
let value;
value = "chai";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase();
// unknown
let newValue;
newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;
if (typeof newValue === "string") {
    newValue.toUpperCase();
}
// Error handling with unknown
try {
    // Risky code
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Errro", error);
}
// Type Assertion
const data = "chai aur code";
const strData = data;
function redirectBasedOnRole(role) {
    if (role === "admin") {
        console.log("Redirecting to admin dashboard");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to user dashboard");
        return;
    }
    role;
}
// never type
function neverReturn() {
    while (true) { }
}
//# sourceMappingURL=moreTypes.js.map