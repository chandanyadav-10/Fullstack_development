"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chaiFlavors = ["Masala", "Adarakh"];
const chaiPrice = [10, 20];
const rating = [4.5, 3.8];
const menu = [
    { name: "Masal", price: 20 },
    { name: "Adarakh", price: 30 },
];
const cities = ["Mumbai", "Banglore", "Delhi", "Hydrabad"];
// cities.push("Pune")
const table = [
    [1, 4, 7, 9],
    [4, 6, 8, 2],
];
let chaiTuple;
chaiTuple = ["Masala", 20];
//chaiTuple = [20, "Masala"]; // We cannot use wrong format of defined tuples
let userInfo;
userInfo = ["Chandan", 104];
userInfo = ["Chandan", 104, true];
const location = [23.67, 33.56];
const chaiItems = ["Masala", 100];
var cupSize;
(function (cupSize) {
    cupSize[cupSize["SMALL"] = 0] = "SMALL";
    cupSize[cupSize["MEDIUM"] = 1] = "MEDIUM";
    cupSize[cupSize["LARGE"] = 2] = "LARGE";
})(cupSize || (cupSize = {}));
const size = cupSize.SMALL;
var Status;
(function (Status) {
    Status[Status["PENDING"] = 100] = "PENDING";
    Status[Status["SERVED"] = 101] = "SERVED";
    Status[Status["CANCELLED"] = 102] = "CANCELLED";
})(Status || (Status = {}));
var ChaiType;
(function (ChaiType) {
    ChaiType["MASALA"] = "masala";
    ChaiType["GINGER"] = "ginger";
})(ChaiType || (ChaiType = {}));
function makeChai(type) {
    console.log(`Making: ${type}`);
}
makeChai(ChaiType.GINGER);
// makeChai("masala")
var randomEnum;
(function (randomEnum) {
    randomEnum[randomEnum["ID"] = 1] = "ID";
    randomEnum["NAME"] = "Chai";
})(randomEnum || (randomEnum = {}));
var sugars;
(function (sugars) {
    sugars[sugars["LOW"] = 1] = "LOW";
    sugars[sugars["MEDIUM"] = 2] = "MEDIUM";
    sugars[sugars["HIGH"] = 3] = "HIGH";
})(sugars || (sugars = {}));
const s = sugars.MEDIUM;
//unexpected behaviour
let t = ["Chandan", 104];
t.push("SDE");
//# sourceMappingURL=arrayTupleEnumTS.js.map