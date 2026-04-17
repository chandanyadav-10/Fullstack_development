/************************ Prototypes and __proto__ *************************************/
// let user = {
//     name: "Chandan",
//     age: 27,
//     greet: function () {
//         console.log("Hello " + this.name);
//     }
// }

// console.log(user);
// user.greet()


// let person = {
//     f_name: "Vikash",
//     l_name: "Yadav"

// }
// console.log(person.f_name);

// person.__proto__ = {
//     run: () => {
//         alert("run")
//     }
// }

// user.__proto__ = person;
// user.run();

//better way to set proto-----------------------------------------

// Object.setPrototypeOf(user, person);

// Object.setPrototypeOf(object, prototypeObject);

// object → the object you want to modify
// prototypeObject → the object you want to attach as prototype

// let user = {
//     name: "Chandan",
//     age: 27,
//     greet: function () {
//         console.log("Hello " + this.name);
//     }
// };

// let person = {
//     f_name: "Vikash",
//     l_name: "Yadav",
//     run: function () {
//         console.log("Running...");
//     }
// };

// // ✅ Set prototype
// Object.setPrototypeOf(user, person);

// // Now access
// console.log(user.f_name); // Vikash (from prototype)
// user.run(); // Running...