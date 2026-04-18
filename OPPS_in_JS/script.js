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

/* *******************************************Classes, Objects and Contructors************************ */

// classes, objects and constructors-------------------------------------------------

// //!-> I know this code does not make any sense but i write this code for my practice only
// class User {
//     constructor(f_name, l_name, email_address, password) {
//         console.log("Called Constructor...." + f_name)
//         this.fname = f_name
//         this.lname = l_name
//         this.email = email_address
//         this.password = password
//     }
//     register() {

//         console.log(`Your first and last name is ${this.fname} ${this.lname}.\nYour Email address is ${this.email} and password is ${this.password} `)
//         alert("register successfully")

//     }
//     login() {
//         console.log("Your email is: " + this.email + "and password is " + this.password)
//         alert("login Successfully")

//     }
//     logout() {
//         alert("Logout!")

//     }

// }
// let fname = prompt("Enter Your First Name: ")
// let lname = prompt("Enter Your last Name: ")
// let email = prompt("Enter Your Email Address: ")
// let password = prompt("Enter Your Password: ")

// let u1 = new User(fname, lname, email, password)

// u1.register()
// u1.login()
// u1.logout()


//class inheritance and extends keyword-----------------------------------------------------------

class Vehicles{
    constructor(structure, engine, wheels){
        this.structure = structure;
        this.engine = engine;
        this.wheels = wheels
       
    }
    showLook(){
        console.log("Vehicle look like " + this.structure + " Car")
    }
    showEngine(){
        console.log("Vehicle has " + this.engine + " Engine")
    }
    showWheels(){
        console.log("Vehicles should have " + this.wheels + " wheels")
    }
}

class Car extends Vehicles{
    showColor(){
        console.log(this.structure + " has black color")
    }
    runCar(){
        console.log("Car is running on the highway")
    }
}

let v = new Vehicles("BMW", "V6", 4, "Red")
let c = new Car("Sedan", "V8", 4, "Black")

v.showLook()
c.showLook()
c.runCar()
v.runCar() //THis will throw an error


