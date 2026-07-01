// Types of Ts

// 1. Inference
let name = "Chandan"
// name = 123 // it will give error cz data slresdy assingned to the variable is string so we cannot assingned with number or other data types
 
let result = Math.random() > 0.5 ? 10 : 5;
// let result = Math.random() > 0.5 ? "Chandan" : 5;
console.log(result)

let channelName = "ChaiaurCode";
// channelName = 22222222222 //it gives error - type number is not assignable to type string


// 2. Annotation
let myNativePlace:string = "Azamgarh UP"
myNativePlace = "Mumbai"
// myNativePlace = 6789; //it gives error coz to the variable already annotate datatype string

let chaiCode:boolean



