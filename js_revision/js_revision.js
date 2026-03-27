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

let num = Number(prompt("Enter a number:"));

let result = (num % 2 === 0 && num % 3 === 0)
  ? "Divisible by both 2 or 3"
  : "Not divisible by both 2 or 3";

console.log(result);