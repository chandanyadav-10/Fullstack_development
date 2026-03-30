/***********************************Variale practice******************** */

// let name = "Chandan";
// let num = 6;
// console.log(name + num);

// console.log(typeof (name+num));

// const a = {
//  name : "Chandan",
//  class : "MSc.IT.",
//  Roll_no: 217
// }

// a['College'] = "RADAv";
// a['name'] = "Sandesh";

// console.log(a);

// const dictionary = {
//   Happy: "Feeling good and joyful",
//   Sad: "Feeling unhappy or down",
//   Brave: "Not afraid to face danger",
//   Kind: "Being nice and caring",
//   Fast: "Moving quickly",
//   Slow: "Moving without speed",
//   Easy: "Not difficult",
//   Hard: "Difficult to do",
//   Big: "Large in size",
//   Small: "Little in size"
// };
// console.log(dictionary["Brave"]);
// console.log(dictionary.Hard);

/********************************Operators and conditional statements practice ********************* */

//if...else statament---------------

// let age = prompt("Enter your age: ")
// age = Number.parseInt(age);
// if(age>10 && age<20){
//   console.log("Your age is between 10 and 20")
// }
// else{
//   console.log("Your age in not between 10 and 20")
// }

// console.log(typeof age);

// let num = Number(prompt("Enter a number: "));

// if(num%2==0 && num%3==0){
//   console.log("Number is divisible by 2 and 3")

// }
// else{
//   console.log("Number is not divisible by 2 and 3")
// }

// console.log(typeof num);

//switch case statement------------------

// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));
// let operator = prompt("Enter operator (+, -, *, /):");

// let result;

// switch (operator) {
//   case "+":
//     result = num1 + num2;
//     break;

//   case "-":
//     result = num1 - num2;
//     break;

//   case "*":
//     result = num1 * num2;
//     break;

//   case "/":
//     result = num1 / num2;
//     break;

//   default:
//     result = "Invalid operator";
// }

// console.log("Result: " + result);

//if...else if...else if...else...---------------------------------------

// let num = Number(prompt("Enter a number:"));

// if (num % 2 === 0 && num % 3 === 0) {
//   console.log("Divisible by both 2 and 3");
// } else if (num % 2 === 0) {
//   console.log("Divisible by 2 only");
// } else if (num % 3 === 0) {
//   console.log("Divisible by 3 only");
// } else {
//   console.log("Not divisible by 2 or 3");
// }

//ternary operator------------------------------------------------

// condition ? value_if_true : value_if_false

// let age = Number(prompt("Enter age: "))

// console.log((age>18) ? "You can drive car" : "You cannot drive a car");

// let num = Number(prompt("Enter a number:"));

// let result = (num % 2 === 0 && num % 3 === 0)
//   ? "Divisible by both 2 or 3"
//   : "Not divisible by both 2 or 3";

// console.log(result);

/*****************************Loops and FUnction**************************************** */

// simple for looop----------------------------------------

// for (let i = 1; i <= 5; i++) {
//     console.log("Number:", i);
// }

// simple program to demonstrate for in loop--------------------------------

// let student = {
//     name: "Chandan",
//     age: 21,
//     course: "MCA"
// };

// for (let key in student) {
//     console.log(key + ": " + student[key]);
// }

// let numbers = [10, 20, 30, 40];

// for (let index in numbers) {
//     console.log("Index:", index, "Value:", numbers[index]);
// }

// simple program to demonstrate for of loop--------------------------------

// let fruits = ["Apple", "Banana", "Mango"]; // for of loop doesn't work directly with object

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// this will give you error====================================
// let student = {
//     name: "Chandan",
//     age: 21
// };

// for (let value of student) {
//     console.log(value);
// }

// correct way using object.values>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let student = {
//     name: "Chandan",
//     age: 21,
//     course: "MCA"
// };

// for (let value of Object.values(student)) {
//     console.log(value);
// }

// for (let [key, value] of Object.entries(student)) {
//     console.log(key + ": " + value);
// }

// Object + for...in → direct ✅
// Object + for...of → use Object.values() or Object.entries() ✅

//simple while loop program---------------------------------------------------

// let i = 1;

// while (i <= 5) {
//     console.log("Number:", i);
//     i++;
// }

//simple program to demo do while loop-------------------------------------------------

// let i = 1;

// do {
//     console.log("Number:", i);
//     i++;
// } while (i <= 5);

//simple function program--------------------------------------------

// function greet() {
//     console.log("Hello, welcome!");
// }

// greet(); // calling the function

// function greet(name) {
//     console.log("Hello " + name);
// }

// greet("Chandan");

/*******************************Practice loop and fucntion*************************** */

//print marks of students in obj using for loop-------------------------------------

// let marks = {
//     Harry: 98,
//     Rohan: 70,
//     Akash: 75,
//     Chandan: 85,
//     Sandesh: 80
// }

// for(let student in marks){
//     console.log(student + ": " + marks[student])
// }

// for(let i = 0; i<Object.keys(marks).length; i++){
//     console.log("Marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
// }

// let cn = 52;
// let i;

// while(i != cn){
//     console.log("Try Again!!");
//     i= prompt("Enter a number");
// }

// console.log("You have Entered a correct number");

// let mean = (a,b,c,d) =>{
//     return (a+b+c+d)/4;
// }
// console.log(mean(10,20,30,40));

/**********************************Stirng and Array Methods*********************************** */

//EScaping characters in string-------------------------

// let name = "Chandan\nYadav";
// console.log(name);
// console.log(name.length);

// let str = "Chandan\'s laptop";
// console.log(str);

// let text = "Hello\nChandan\tWelcome to \"JavaScript\"";
// console.log(text);

// let name1 = "Chandan";
// let name2 = "Yadav";
// let name3  = name1 + " " + name2;
// console.log(name3);
// let name4 = `${name1} ${name2}`;
// console.log(name4);
// let name5 = name1.concat(" ", name2, " is a good boy");
// console.log(name5);

// let name = "Chandan Yadav";
// console.log(name.length);
// console.log(name.toUpperCase());

// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2]);
// console.log(name[3]);
// console.log(name[4]);
// console.log(name[5]);
// console.log(name[6]);
// console.log(name[7]);
// console.log(name[8]);
// console.log(name[9]);
// console.log(name[10]);
// console.log(name[11]);
// console.log(name[12]);

// console.log(name.charAt(0));
// console.log(name.charAt(1));
// console.log(name.charAt(2));
// console.log(name.charAt(3));
// console.log(name.charAt(4));
// console.log(name.charAt(5));
// console.log(name.charAt(6));
// console.log(name.charAt(7));
// console.log(name.charAt(8));
// console.log(name.charAt(9));
// console.log(name.charAt(10));
// console.log(name.charAt(11));
// console.log(name.charAt(12));

// let n = [1, 2, 3, 4, 5];
// console.log(n)
// console.log(n.length);
// console.log(n[0]);

// console.log(typeof n);

// let newArray = (n.toString());
// console.log(newArray);
// console.log(typeof newArray)

// console.log(n.join("-"));
// // console.log(n.pop());
// // console.log(n);
// console.log(n.push(6));
// console.log(n);
// delete n[2];
// console.log(n);

//sort method in array-------------------------

// let s  = [5, 3, 8, 1, 2];
// s.sort();
// console.log(s);

// let compare = (a, b) => {
//     return a - b;
// }

// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// num.sort(compare)
// console.log(num)

//splice method in array-------------------------------------------------

/*add element without removing any element-------------------*/

// let arr = [10, 11, 12, 15, 16, 14, 15];
// console.log(arr);
// console.log(arr.splice(3, 0, 13, 14))
// console.log(arr);

/*remove element without adding any element-------------------*/

// console.log(arr.splice(3, 2));
// console.log(arr);

/*remove element and add element at the same time-------------------*/

// arr.splice(3, 2, 13, 14);
// console.log(arr);

/*forEach method in array-------------------------------------------------*/

// let arr = [10, 11, 12, 15, 16, 14, 15];
// arr.forEach(value => {console.log(value * 2)});

// let arr = [10, 11, 12, 15, 16, 14, 15];
// let result = arr.forEach(value => value * 2);
// console.log(result); //does not return new array

/*Array.from method--------------------------------------------------------*/

// let name = "Chandan Yadav";
// let arr = Array.from(name);
// console.log(arr);

/*for of anf for in loop with array-------------------------------------------------*/

// let arr = [10, 11, 12, 15, 16, 14, 15];
// for(let index in arr){
//     console.log("Index: " + index + " Value: " + arr[index]);
// }

// for(let value of arr){
//     console.log("Value: " + value);
// }

/*map, filter and reduce method in array-------------------------------------------------*/

// let arr = [10, 11, 12, 15, 16, 14, 15];
// console.log(arr);
// let newarr = arr.map((value, index) => {
//   return value + index;
// });
// console.log(newarr);

// let f =  (value) => {
//     return value > 12
// }

// let newArr = arr.filter(f);
// console.log(newArr);

// let newarr = arr.reduce((h1, h2) => {
//   return h1 + h2;
// });
// console.log(newarr);


/***********************************************Practice Strings and Arrays************************************/

// console.log("harr\"".length);

// let amount = "Please enter the amount: 1000";
// console.log(amount.length);
// console.log(amount.slice(24));
// let newAmount = (Number(amount.slice("Please enter the amount: ".length)));
// console.log(newAmount);
// console.log(typeof newAmount);
// let name = "Chandan Yadav";
// let newName = "B" + name.slice(1);
// console.log(newName);

// let newname2 = name.replace("Chandan", "Sandesh");
// console.log(newname2);


// let arr = [10, 11, 12, 15, 16, 14, 15];
// console.log(typeof arr);
// let userInput = Number(prompt("Enter a number: "));
// arr.push(userInput);
// console.log(arr);
// console.log(typeof arr)

// let arr = [10, 11, 12, 15, 16, 14, 15];
// let userInput;
// while(userInput != 0){
// userInput = Number(prompt("Enter a number: "));
// arr.push(userInput);
// console.log(arr);
// }


// let arr = [10, 30, 500, 16, 80, 99, 15];
// let divisibleBy10 = (value) =>{
//     return value % 10 === 0;
// }

// let newArr = arr.filter(divisibleBy10);
// console.log(newArr);

// let divideBy10 = arr.filter(value =>{
//     return value % 10 === 0;
// })

// console.log(divideBy10);

// let arr = [10, 30, 500, 16, 80, 99, 15];
// let newArr = arr.map(value =>{
//     return value * value;
// })
// console.log(newArr);    

let arr = [1,2,3,4,5];
let n = arr.reduce((h1, h2) =>{
    return h1 * h2;
})
console.log(n);
