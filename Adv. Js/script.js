/* ************************************Chapter 12 Advance JavaScript********************************** */

// IIFE - Immediately Invoked Function Expression-----------------------------------------------

// let a = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(456)
//     }, 4000)
//   })
// }

// (async() =>{
//     let b = await a()
//     console.log(b)
//     let c = await a()
//     console.log(c)
//     let d = await a()
//     console.log(d)
// })()

// console.log(d) throw Uncaught ReferenceError: d is not defined

// Destructuring and Spread Operator-------------------------------------------------------------------------

// let arr = [3, 4, 6, 8, 10]
// let [a, b, c, d, e] = arr
// console.log(a, b, c, d, e)

// let [, b, , ...rest] = arr
// console.log(b, rest)

// let [a, , , ...rest] = arr
// console.log(a, rest)

// let obj = {a: 3, b: 6}
// let {a, b} = obj
// console.log(a, b)

// let obj = {a: 1, b: 2}
// let {a:x, b:y} = obj
// console.log(x, y)

//Spread Operator---------------------------------------------------------------------

// let arr1 = [6, 7, 5, 9, 8];

// let obj1 = {...arr1}
// console.log(obj1)

// function sum(v1, v2, v3, v4, v5) {
//   return v1 + v2 + v3 + v4 + v5;
// }
// console.log(sum(...arr1));

// let obj2 = {
//     name: "Chandan",
//     college: "RADAV",
//     rollNo: 217
// }

// console.log({...obj2, name: "Rishi", college: "DAV"}) //This will overwrite the ob2 object value of name and college
// console.log({name: "Rishi", college: "DAV", ...obj2}) // This will print without changing any value of obj2 object

// const a = "the", b = "no"
// const c = {a, b}
// console.log(c)

//Local, Global and Block Scoped Variables-----------------------------------------------------------------

// 1. Global Scope

// let name = "Chandan"; // Global variable

// function greet() {
//   console.log(name); // ✅ accessible
// }

// greet();
// console.log(name); // ✅ accessible

// 2. Function Scope (Local Scope)

// function test() {
//   let age = 25; // Local variable
//   console.log(age); // ✅ works
// }

// test();

// console.log(age); // ❌ Error: age is not defined

// 3. Block Scope (let and const)

// if (true) {
//   let city = "Mumbai";
//   const country = "India";

//   console.log(city);    // ✅ works
//   console.log(country); // ✅ works
// }

// console.log(city);    // ❌ Error
// console.log(country); // ❌ Error