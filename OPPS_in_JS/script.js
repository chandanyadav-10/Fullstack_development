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

// class Vehicles{
//     constructor(structure, engine, wheels){
//         this.structure = structure;
//         this.engine = engine;
//         this.wheels = wheels

//     }
//     showLook(){
//         console.log("Vehicle look like " + this.structure + " car")
//     }
//     showEngine(){
//         console.log("Vehicle has " + this.engine + " Engine")
//     }
//     showWheels(){
//         console.log("Vehicles should have " + this.wheels + " wheels")
//     }
// }

// class Car extends Vehicles{
//     showColor(){
//         console.log(this.structure + " has black color")
//     }
//     runCar(){
//         console.log("Car is running on the highway")
//     }
//     showLook(){
//         super.showLook()
//         // console.log("Vehicle look like " + this.structure + " par")
//     }
// }

// let v = new Vehicles("BMW", "V6", 4)
// let c = new Car("Audi", "V8", 4)

// v.showLook()
// c.showLook()
// c.runCar()
// c.showEngine()
// c.showWheels()
// v.runCar() //THis will throw an error

// Method overriding and super keywords-------------------------------------------------------

// class Employee {
//     login() {
//         console.log('Employee has logged in');
//     }

//     logout() {
//         console.log('Employee has logged out');
//     }

//     requestLeaves(leaves) {
//         console.log(`Employee has requested ${leaves} leaves one extra leave approved!:)`)
//     }
// }

// class Programmer extends Employee {
//     requestCoffee(x) {
//         console.log(`Employee has requested ${x} coffees`)
//     }
//     requestLeaves(leaves) {
//         //   console.log(`Employee has requested ${leaves + 1  } leaves - One extra !`) //method overriding
//         // super.requestLeaves(leaves + 1) // parent class version of methods call means call parents methods as it is and make some changes with this for child class and use it for child class

// }
// }

// // let e = new Employee()
// let e = new Programmer()
// e.login()
// e.requestLeaves(3)

// constructor with super keywords------------------------------------------------------------

// class Employee {
//   constructor(name) {
//     console.log(`${name}:- Employee's constructor is here`)
//     this.name = name
//   }

//   login() {
//     console.log('Employee has logged in');
//   }

//   logout() {
//     console.log('Employee has logged out');
//   }

//   requestLeaves(leaves) {
//     console.log(`Employee has requested ${leaves} leaves - Auto approved`)
//   }
// }

// class Programmer extends Employee {

//   constructor(name) {
//     // this.name // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
//     super(name)
//     this.name = name
//     console.log(`Programmer ${this.name} this is a newly written constructor`)
//   }

//   // constructor(...args){ ---> If there is no constructor in the child class, this is created automatically
//   //   super(...args)
//   // }

//   requestCoffee(x) {
//     console.log(`Employee has requested ${x} coffees`)
//   }

//   requestLeaves(leaves) {
//     super.requestLeaves(leaves + 1)
//     console.log("One extra is granted")
//     // console.log(`Employee has requested ${leaves + 1} leaves (One extra)`)
//   }
// }

// let e = new Programmer("Chandan")
// e.login()
// e.requestLeaves(3)

//Static Method---------------------------------------------------------------------------------

// Method 1 (inside method)---

// class Animal {
//   constructor(name) {
//     this.name = Animal.capitalize(name)
//   }

//   walk() {
//     alert("Animal " + this.name + " is walking")
//   }

//   static capitalize(name) {
//     return name.charAt(0).toUpperCase() + name.substr(1, name.length)
//   }
// }

// j = new Animal("jack")
// j.walk();

// Method 2 (outside before object)---

// j = new Animal(Animal.capitalize("jack"))
// j.walk();

// Method 3----
// class Animal {
//   constructor(name) {
//     this.name = Animal.capitalize(name)
//   }

//   walk() {
//     alert("Animal " + Animal.capitalize(this.name) + " is walking")
//   }

//   static capitalize(name) {
//     return name.charAt(0).toUpperCase() + name.substr(1, name.length)
//   }
// }

// j = new Animal("jack")
// j.walk();

// getter/setter and instanceof operator-------------------------------------------------

// example 1---
// class Animal {
//   constructor(name) {
//     this.name = name   // uses setter
//   }

//   get name() {
//     return this._name
//   }

//   set name(newName) {
//     if (!newName || newName.length < 3) {
//       console.log("Name must be at least 3 characters")
//       return
//     }
//     this._name = newName
//   }
// }

// let a = new Animal("Bruno")

// console.log(a.name)  // getter

// // a.name = "Jo"        // ❌ rejected
// a.name = "Jack"      // ✅ accepted

// console.log(a.name)

// example 2---

// class User {
//     constructor(name) {
//         this.name = name      // goes through setter
//     }
//     register() {
//         console.log("User register")
//     }
//     set name(v) {
//         console.log("Setter called with:", v)

//         if (v.length < 3) {   // 🔒 control: validation
//             console.log("Rejected")
//             return
//         }

//         this._name = v.trim() // 🔒 control: modify before saving
//     }

//     get name() {
//         console.log("Getter called")
//         return this._name.toUpperCase() // 🔒 control: modify on read
//     }
// }
// class Admin extends User {
//     login() {
//         console.log("Admin login")
//     }
// }

// let u = new Admin("Bruno")
// u.register()

// // Setter called with: Bruno

// u.name = "Jo"
// // Setter called with: Jo
// // Rejected

// console.log(u.name)
// // Getter called
// // BRUNO

// let name = "Chandan";

// // instanceof operator------------------------------------

// console.log(u instanceof User) // true
// console.log(u instanceof Admin) // true
// console.log(name instanceof Admin) //false

/* *************************************************Chapter 11 Practice Set****************************** */

// Q.1 and 2------

// class Complex {
//   constructor(real, imaginary) {
//     this.real = real;
//     this.imaginary = imaginary;
//   }
//   complexNumber() {
//     // console.log(`${this.real} + ${this.imaginary}i`)

//     //Better version – handles negative

//     if (this.imaginary >= 0) {
//       console.log(`${this.real} + ${this.imaginary}i`);
//     } else {
//       console.log(`${this.real} - ${Math.abs(this.imaginary)}i`);
//     }

//   }
// }

// let cnum1 = new Complex(3, 4);
// let cnum2 = new Complex(3, -4);
// cnum1.complexNumber();
// cnum2.complexNumber();

// Q.5--
// class ComplexNumber {
//   constructor(real, imaginary) {
//     this._real = real;
//     this._imaginary = imaginary;
//   }

//   // Getter for real part
//   get real() {
//     return this._real;
//   }

//   // Setter for real part
//   set real(value) {
//     this._real = value;
//   }

//   // Getter for imaginary part
//   get imaginary() {
//     return this._imaginary;
//   }

//   // Setter for imaginary part
//   set imaginary(value) {
//     this._imaginary = value;
//   }

//   // Method to display complex number
//   display() {
//     console.log(`${this._real} + ${this._imaginary}i`);
//   }
// }

// // Usage
// let num = new ComplexNumber(3, 4);

// // Getting values
// console.log(num.real);        // 3
// console.log(num.imaginary);   // 4

// // Setting values
// num.real = 5;
// num.imaginary = 6;

// num.display(); // 5 + 6i

// Q. 3-----

// class Human {
//   constructor(name) {
//     this.name = name;
//   }

//   introduce() {
//     console.log(`Hi, I am ${this.name}`);
//   }
// }

// class Student extends Human {
//   constructor(name, course) {
//     super(name); // call parent constructor
//     this.course = course;
//   }

//   // 🔥 Method Overriding
//   introduce() {
//     console.log(`Hi, I am ${this.name} and I study ${this.course}`);
//   }
// }

// // Usage
// let s1 = new Student("Chandan", "MSc.IT");

// s1.introduce();

// // Q.4--------------------
// console.log(s1 instanceof Human)
// console.log(s1 instanceof Student)

// class Human {
//   constructor(name) {
//     this._name = name;
//   }
//   walk() {
//     console.log(this._name + " name human is walking");
//   }
//   set name(newName) {
//     console.log("Setter is called")
//     this._name = newName;
//   }
//   get name() {
//     console.log("Getter is called");
//     return this._name;
//   }
// }

// let n = new Human("Chandan");
// n.walk();
// console.log(n.name)
// n._name = "Sandesh"
// console.log(n.name)

// setter/getter and static example for understanding this concept more clearly---------------------------------------------
class User {
  static userCount = 0;   // shared across all users

  constructor(username, password) {
    this.username = username;
    this._password = password;  // protected
    User.userCount++;  // increase count when new user created
  }

  // Getter (read password safely)
  get password() {
    return "********";  // hide real password
  }

  // Setter (update password with validation)
  set password(newPass) {
    if (newPass.length < 6) {
      console.log("Password too short!");
    } else {
      this._password = newPass;
      console.log("Password updated successfully");
    }
  }

  // Normal method
  login(pass) {
    if (pass === this._password) {
      console.log(this.username + " logged in ✅");
    } else {
      console.log("Wrong password ❌");
    }
  }

  // Static method (class-level logic)
  static totalUsers() {
    console.log("Total users: " + User.userCount);
  }
}

// Creating objects (real users)
let user1 = new User("Chandan", "123456");
let user2 = new User("Rahul", "abcdef");

// Using methods
user1.login("123456");

// Using setter
user1.password = "newpass123";

// Using getter
console.log(user1.password);

// Static method
User.totalUsers();