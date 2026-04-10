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

// callback hell or pyramid of doom---------------------------------------------------------------------

// loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js",
//   function goodmorning(error, src) {
//     alert("Good Morning1: " + src);
//     loadScript(
//       "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js",
//       function goodmorning(error, src) {
//         alert("Good Morning2: " + src);
//         loadScript(
//           "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js",
//           function goodmorning(error, src) {
//             alert("Good Morning3: " + src);
//             loadScript(
//               "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js",
//               function goodmorning(error, src) {
//                 alert("Good Morning4: " + src);
//                 loadScript(
//                   "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js",
//                   function goodmorning(error, src) {
//                     alert("Good Morning5: " + src);
//                   },
//                 );
//               },
//             );
//           },
//         );
//       },
//     );
//   },
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
//   setTimeout(function () {
//     console.log("I am a promise and I am resolved");
//     resolve(true);
//     // reject(false);
//   }, 5000);
// });

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     console.log("I am a promise and I am rejected");
//     reject(new Error("I am an error"));
//   }, 7000);
// });

// console.log(p1, p2);

// p1.then(
//   (value) => {
//     console.log(value);
//   },
//   (error) => {
//     console.log("I am an error came from resolved promise");
//   },
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

//Attaching multiple handlers to Promise-------------------------------------------------------------

// let p1 = new Promise((resolve, reject) => {
//   console.log("I am not resolved");
//   setTimeout(() => {
//     resolve(1);
//   }, 3000);
// });

// //attach multiple handler
// p1.then((value) => {
//   console.log("I am promise and I am resolved now");
// });

// p1.then((value) => {
//   console.log("Heyyyyyyyyyyyyyyyyyyyy");
// });

// p1.then((value) => {
//   setTimeout(() => {
//     alert("Hello I am handler3");
//   }, 5000);
// });

//Promise API---------------------------------------------------------------------------------------

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Value 1");
//     // reject(new Error("Error"))
//   }, 6000);
// });
// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Value 2");
//   }, 7000);
// });
// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Value 3");
//     // reject(new Error("Error"))
//   }, 3000);
// });
// let p4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Value 4");
//   }, 4000);
// });

// p1.then((value) => {
//   console.log(value);
// });
// p2.then((value) => {
//   console.log(value);
// });
// p3.then((value) => {
//   console.log(value);
// });
// p4.then((value) => {
//   console.log(value);
// });

// promise API methods-------------------------------------------
// let promise_all = Promise.all([p1, p2, p3])
// let promise_all = Promise.allSettled([p1, p2, p3, p4])
// let promise_all = Promise.race([p1, p2, p3, p4])
// let promise_all = Promise.any([p1, p2, p3, p4])
// let promise_all  = Promise.resolve(6)
// let promise_all = Promise.reject(new Error("New Error"))

// promise_all.then((value)=>{
//     console.log(value)
// })

//async/await-------------------------------------------------------------

// async function mausam() {
//   let mumbaiWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("29 Deg.");
//     }, 5000);
//   });
//   let upWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("33 Deg.");
//     }, 7000);
//   });

// mumbaiWeather.then(alert);
// upWeather.then(alert);

// mumbaiWeather.then((w) => {
//   alert("Mumbai ka weather: " + w);
// });
// upWeather.then((w) => {
//   alert("UP ka weather: " + w);
// });

//   console.log("Fetching weather of Mumbai, Please wait...");
//   let mumbaiW = await mumbaiWeather;
//   console.log("Fetched Mumbai weather. " + mumbaiW);
//   console.log("Fetching weather of UP, Please wait...");
//   let upW = await upWeather;
//   console.log("Fetched UP weather. " + upW);
// }

// let chandan = async () => {
//   console.log(
//     "Hello my name is chandan and I am waiting to fetched weather... ooo wow!!!! weather is now fetched",
//   );
// };

// let weatherR = async () => {
//   let w = await mausam();
//   let c = await chandan();
// };

// weatherR();

//try and catch error handling in js-----------------------------------------------------------------

// setTimeout(() => {
//   console.log("Start hacking....., Please wait....");
// }, 1000);
// // console.log(chandan)

// // try/catch--------------
// try {
//   // setTimeout(() => {
//   //   console.log(chandan);
//   // }, 100);
//   console.log(chandan);
// } catch (error) {
//   console.log(error);
// }

// setTimeout(() => {
//   console.log("Fetching data from server....., Please wait....");
//   // console.log(chandan)
// }, 2000);
// setTimeout(() => {
//   console.log("Data feched from facebook....., Please wait....");
// }, 3000);
// setTimeout(() => {
//   console.log("Hacked Nazeeb username and passwords....., Please wait....");
// }, 4000);

//Error Object and throw Custom error------------------------------------------------------------------------------------

// try {
//   console.log(chandan)
//   // throw new SyntaxError("I am an Syntex erro")
//   // throw new ReferenceError("I am an Reference erro")
// } catch (error) {
//   console.log(error.name)
//   console.log(error.message)
//   console.log(error.stack)
// }

//finally clause------------------------------------------------------------------------------

// try {
//     let a = 10;
//     console.log(chandan)
//     console.log("Program ran successfully.")
// } catch (error) {
//     console.log("Got some error.")
//     console.log(c);

// }
// finally{
//     console.log("I am a good boy.")
// }

/***********************************Chapter 9 Practice***************************************************/
// Q.1

// let loadScript = (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => {
//       resolve("SRC is loaded: " + src);
//     };

//     script.onerror = () => {
//       reject("Error loading Script: " + src);
//     };
//     document.body.appendChild(script);
//   });
// };
// let l = loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js",
// );
// l.then((value) => {
//   alert(value);
// }).catch((error) => {
//   alert(error);
// });
// console.log(l);

//Q.2

// let loadScript = (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => resolve(`SRC is loaded: ${src}`);
//     script.onerror = () => reject(`Error loading script: ${src}`);

//     document.body.appendChild(script);
//   });
// };

// async function main() {
//   try {
//     let result = await loadScript("https://cdnd.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js");
//     alert(result);
//   } catch (err) {
//     alert(err);
//   }
// }

// main();

//Q.3

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(3);
//   }, 3000);
// });

// let r = async () => {
//   try {
//     let a = await p;
//     console.log(a);
//   } catch (error) {
//     console.log("Reject Value: " + error);
//   }
// };

// r();

// Q.4

//Solution 1:

// async function promises() {
//   let p1 = new Promise((resolve) => {
//     setTimeout(() => resolve(10), 2000);
//   });

//   let p2 = new Promise((resolve) => {
//     setTimeout(() => resolve(4), 1000);
//   });

//   let p3 = new Promise((resolve) => {
//     setTimeout(() => resolve(1999), 4000);
//   });

//   console.time("Time");

//   let result = await Promise.all([p1, p2, p3]);

//   console.timeEnd("Time");

//   console.log(result);
// }

// promises();

//soltion 2:-----------------------------------------------------------------------------------------------

// // Function 1 → simulates fetching first 10 products
// const p1 = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("First 10 products");
//     }, 2000); // takes 2 seconds
//   });
// };

// // Function 2 → simulates fetching next 10 products
// const p2 = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Second 10 products");
//     }, 1000); // takes 1 second
//   });
// };

// // Function 3 → simulates fetching another 10 products
// const p3 = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Third 10 products");
//     }, 4000); // takes 4 seconds
//   });
// };

// // Async function to run all promises together
// const run = async () => {
//   console.time("run"); // start timer

//   // Start all promises at the same time (parallel execution)
//   let a1 = p1(); // promise starts immediately
//   let a2 = p2(); // promise starts immediately
//   let a3 = p3(); // promise starts immediately

//   // Wait for ALL promises to complete
//   // Execution will stop here until all are resolved
//   let result = await Promise.all([a1, a2, a3]);

//   // result will be an array of resolved values
//   console.log(result);

//   console.timeEnd("run"); // end timer
// };

// run();
