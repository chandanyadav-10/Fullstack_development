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

//Hoisting in js-----------------------------------------------------

// let a;
// Following two lines will run successfully due to JavaScript hoisting

// console.log(a)
// greet()

// var greet = function() {
//     console.log("Good morning")
// }

// var a = 9; // Declaration hoisted to the top but initialization is not
// console.log(a)

// Closure in JS----------------------------------------------------------------------

// function init() {
//   var name = "Mozilla"; // name is a local variable created by init

//   function displayName() {
//     // displayName() is the inner function, a closure
//     console.log(name); // use variable declared in the parent function
//   }

//   name = "Harry";

//   return displayName;
// }

// let c = init();
// c();

/* What is a Closure (simple idea)

A closure is when a function remembers variables from where it was created, even after that outer function is finished.

👉 In simple words:
“Function + its remembered data = Closure” */


// Basic Example

// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }

//   return inner;
// }

// const myFunc = outer();
// myFunc(); // 1
// myFunc(); // 2
// myFunc(); // 3

/*What’s happening here?
outer() runs and creates count = 0
It returns inner function
Normally, count should be gone after outer() ends ❌
But… inner() still remembers count ✅

👉 That memory is called a closure 

Why closure happens?

Because of lexical scope

👉 JavaScript functions remember where they were written, not where they are called.*/

// Another Simple Example

// function greet(name) {
//   return function() {
//     console.log("Hello " + name);
//   };
// }

// const sayHello = greet("Chandan");
// sayHello(); // Hello Chandan 

// 👉 Even after greet() finishes, name is still remembered.

// ⚙️ Common Use Cases
// 1. Data Privacy (important)

// function bankAccount() {
//   let balance = 1000;

//   return {
//     deposit: function(amount) {
//       balance += amount;
//       console.log(balance);
//     },
//     getBalance: function() {
//       return balance;
//     }
//   };
// }

// const account = bankAccount();
// account.deposit(500); // 1500
// console.log(account.getBalance()); // 1500

// 👉 You cannot access balance directly, only through functions
// 👉 Closure keeps it private 🔒

// 2. Function Factory

// function multiply(x) {
//   return function(y) {
//     return x * y;
//   };
// }

// const double = multiply(2);
// console.log(double(5)); // 10

// 👉 x is remembered → closure


// 3. setTimeout example (important interview)

// function test() {
//   let msg = "Hello";

//   setTimeout(function() {
//     console.log(msg);
//   }, 2000);
// }

// test();

// 👉 Even after 2 seconds, msg is remembered

// Arrow Function in JS --------------------------------------------------------------------

// const sayHello = (name, greeting) => console.log(greeting + " " + name);

// const x = {
//   name: "Chandan",
//   role: "Js Developer",
//   exp: 30,
//   show: function () {
//     // let that = this
//     // console.log(this)

//     setTimeout(() => {
//       console.log(`The name is ${this.name}\nThe role is ${this.role}`);
//     }, 2000);
//   }
// };

// // sayHello("Chandan", "Good Afternoon")
// // console.log(x.name, x.exp)

// x.show();