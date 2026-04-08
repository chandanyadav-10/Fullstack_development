/***********************************Chapter 9 Callbacks, promises & async/await *****************************************/

// Callback function and callback error handling------------------------------------------------------------
// let loadScript = (src, callback) => {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = () => {
//     console.log("Loaded Script with SRC: " + src);
//     callback(null, src);
//   };
//   script.onerror = function () {
//     console.log("Loaded Script with SRC: " + src);
//     callback(new Error("SRC got some errors"));
//   };
//   document.body.appendChild(script);
// };

// function hello(error, src) {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   alert("Hello World1 " + src);
// }
// function goodmorning(error, src) {
//   alert("Good Morning: " + src);
// }

// loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js",
//   hello,
// );

//Intro to Promise---------------------------------------------------------------------------------------

// console.log("Hello Promise")
// let promise = new Promise((resolve, reject) => {
//   console.log("resolved successfully");
//   resolve(10);
// });
// console.log(promise)

// console.log("Hello Promise2")
// setTimeout(function(){
//   console.log("Hello Promise3")
// }, 2000)
// console.log(promise)
// console.log("Hello Promise4")

// let p = new Promise((resolve)=>{
//   setTimeout(() => resolve("done"), 3000)

// })
// p.then(alert);
// console.log(p)

//.then() and .catch() method-----------------------------------------------------------------------------

// let p1 = new Promise((resolve, reject) => {
//   console.log("I am a promise and I am resolved");
//   setTimeout(function () {
//     resolve(true);
//     // reject(false);
//   }, 5000);
// });

// let p2 = new Promise((resolve, reject) => {
//   console.log("I am a promise and I am rejected");
//   setTimeout(function () {
//     reject(new Error("I am an error"));
//   }, 5000);
// });

// console.log(p1, p2);

// p1.then(
//   (value) => {
//     console.log(value);
//   },
//   (error) => {
//     console.log("I am an error came from resolved promise");
//   }
// );

//OR----

//To get the value we use then and to handle or catch the error we use catch method
// p1.then((value) => {
//   console.log(value);
// }).catch((error) => {
//   console.log("I am an error came from resolved promise");
// });

// p2.catch((error) => {
//   console.log("I am an error");
// });

//promises chaining-----------------------------------------------------------------------------------------------

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("I am a promise and resolved in 2 seconds");
//     resolve(10);
//   }, 2000);
// });

// p1.then((value) => {
//   console.log(value);
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("I am a promise 2 and I am also resolved in 2 secods");
//       resolve(20);
//     });
//   });
//   return p2;
// })
//   .then((value) => {
//     console.log("I am premise 2 and I am done now");
//     return 2;
//   })
//   .then((value) => {
//     console.log("Okay:)");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//Rewrite loadScript function using promise and loading multinple script-------------------------------------------------------

// let loadScript = (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src;
//     document.body.append(script);
//     script.onload = () => {
//       resolve("Script has loaded Okay:)");
//     };
//     script.onerror = () => {
//       reject("SRC got some error");
//     };
//   });
// };

// let p = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js")
// p.then((value)=>{
//   console.log(value)
//   return loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js")
// }).then((value)=>{
//   console.log("Second src is ready for load")
// }).catch((error)=>{
//   console.log(error)
// })
