"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let subs = '1M';
let apiRequestStatus = 'pending';
// apiRequestStatus = 'Chandan' //it will throw an error coz custom data already defined to this variable and we cannot assigned other value instead this values
// apiRequestStatus = "success"
let airlineSeat = 'window';
airlineSeat = 'aisle';
// let orders = ['22', '25', '40', '35', '20']
// let currentOrder;
// for(let order of orders){
//    if(order === '40'){
//     currentOrder = order
//    } 
// }
// currentOrder = 60;
// console.log(currentOrder);
const orders = ["12", "20", "28", "42"];
let currentOrder;
for (let order of orders) {
    if (order === "28") {
        currentOrder = order;
        break;
    }
    currentOrder = "11";
}
console.log(currentOrder);
//# sourceMappingURL=unionAndany.js.map