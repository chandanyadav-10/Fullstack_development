/*************************************Network Request and Storing Data***********************************/

//Fetch API--------------------------------------------------------------

// let wp = fetch("https://goweather.xyz/weather/India");
// wp.then((response) => {
//   console.log(response.status);
//   console.log(response.ok);
//   console.log(response.headers)
//   return response.text();
// }).then((response) => {
//   console.log(response);
// });

// console.log(wp)

//Post Request with fetch API----------------------------------------------------------------------

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// my practice //

// let option = {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "Chandan",
//     body: "Yadav",
//     userId: 10,
//   }),
// };
// fetch("https://jsonplaceholder.typicode.com/posts", option)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//using async/await---------------------------------------------------------------------------------
// let createTodo = async (todo) => {
//   let option = {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(todo),
//   };
//   let p = await fetch("https://jsonplaceholder.typicode.com/posts", option);
//   let response = await p.json();
//   return response;
// };

// let getTodo = async (id) => {
//   let r = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
//   let response = await r.json();
//   return response;
// };

// let mainFunc = async () => {
//   let todo = {
//     title: "Chandan",
//     body: "Bhai",
//     userId: 10,
//   };
//   let Todor1 = await createTodo(todo);
//   console.log(Todor1);
//   let Todor2 = await getTodo(10);
//   console.log(Todor2)
// };

// mainFunc();

//JS Cookies----------------------------------------------------------------------------
// console.log(document.cookie);
// document.cookie = "name = chandan"
// document.cookie = "name2 = Nazeeb104205670003"
// document.cookie = "name= chandan1041999000"
// console.log(document.cookie) //when we write on document.cookie it does not overwrite or replace whole cookies, it add to the cookies

//encodeURIComponent---------------------------------------------------------------------

// let key = prompt("Enter Keys")
// let value = prompt("Set your value")

// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// console.log(document.cookie);

//localStorage-------------------------------------------------------------------------------

// let key = prompt("Enter key that you want set");
// let value = prompt("Enter value that you want to get");

// localStorage.setItem(key, value);

// console.log(`Value at ${key} is ${localStorage.getItem(key)}`);

// console.log(localStorage.length)

// if(key == "red" || key == "color"){
//     localStorage.removeItem(key)
// }

// if(key == 0){
//     localStorage.clear()
// }

// localStorage.key(0)
// 'class'
// localStorage.key(1)
// 'name'
// localStorage.key(2)
// 'c'
// localStorage.key(3)
// 'b'
// localStorage.key(4)
// null

// localStorage.two = 2
// alert(localStorage.two)
// delete localStorage.two

// sessionStorage------------------------------------------------------------------------------------

// sessionStorage.setItem("name", "chandan")
// undefined
// sessionStorage.getItem("name")
// 'chandan'
// sessionStorage.getItem("name")
// 'chandan'
// sessionStorage.removeItem("name")
// undefined
// sessionStorage.clear()
// undefined

// storage Event----------------------------------------------------------------------------------------

// window.onstorage = (e) => {
//   alert("changed");
//   console.log(e);
// };

/***********************************Chapter 10 Practice**********************************************/
// Q.1 using .then and .catch----------------------------

// let fetchDogImg = () => {
//     let div = document.getElementById("container");

//     div.innerHTML = ""; // 🔥 clear previous image

//     let dogImage = document.createElement("img");

//     fetch("https://dog.ceo/api/breeds/image/random")
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             dogImage.src = data.message;  // ✅ correct URL
//             dogImage.style.width = "300px"; // optional styling
//             div.appendChild(dogImage);   // ✅ append image

//         })
//         .catch((error) => {
//             console.log("Error fetching image:", error);
//         });
// };
// // fetchDogImg();

// let fetchBtn = document.getElementById("fetchDog");
// fetchBtn.addEventListener('click', fetchDogImg)

// Q.1 using async and await-----------------------------------------------------------------

// function fetchBtn() {

//     let fetchDogImg = async () => {
//         let div = document.getElementById("container");

//         div.innerHTML = ""; // clear previous image

//         let dogImage = document.createElement("img");

//         try {
//             let imageAPI = await fetch("https://dog.ceo/api/breeds/image/random");



//             // 🔥 check if response is OK (very important)
//             if (!imageAPI.ok) {
//                 throw new Error("Network response was not ok");
//             }

//             console.log(imageAPI.status)
//             console.log(imageAPI.ok)

//             let imageResponse = await imageAPI.json();

//             dogImage.src = imageResponse.message;
//             dogImage.style.width = "300px";
//             div.appendChild(dogImage);

//         } catch (error) {
//             console.log("Error:", error);

//             // show error to user (better UX)
//             div.innerHTML = "<p>❌ Failed to load dog image. Try again!</p>";
//         }
//     };

//     fetchDogImg();

// };

// Better Approach------------------------------------------------------------------------------
// Why better?----
// Separation of HTML & JS-----

// let fetchDogImg = async () => {
//     let div = document.getElementById("container");

//     div.innerHTML = ""; // clear previous image

//     let dogImage = document.createElement("img");

//     try {
//         let imageAPI = await fetch("https://dog.ceo/api/breeds/image/random");



//         // 🔥 check if response is OK (very important)
//         if (!imageAPI.ok) {
//             throw new Error("Network response was not ok");
//         }

//         console.log(imageAPI.status)
//         console.log(imageAPI.ok)

//         let imageResponse = await imageAPI.json();

//         dogImage.src = imageResponse.message;
//         dogImage.style.width = "300px";
//         div.appendChild(dogImage);

//     } catch (error) {
//         console.log("Error:", error);

//         // show error to user (better UX)
//         div.innerHTML = "<p>❌ Failed to load dog image. Try again!</p>";
//     }
// };


// document.getElementById("fetchDog").addEventListener("click", fetchDogImg);



// Q.2------------------------

// // 🔥 Fetch notes automatically when page loads
// window.onload = function () {
//   displayNotes();
// };

// // Q.2 Add note
// function addNote() {
//   let input = document.getElementById("noteInput");
//   let note = input.value;

//   if (note === "") {
//     alert("Write something!");
//     return;
//   }

//   let notes = JSON.parse(localStorage.getItem("notes")) || [];

//   notes.push(note);

//   localStorage.setItem("notes", JSON.stringify(notes));

//   input.value = "";

//   displayNotes();
// }

// // Q.3 Display (fetch) notes
// function displayNotes() {
//   let notesList = document.getElementById("notesList");
//   notesList.innerHTML = "";

//   let notes = JSON.parse(localStorage.getItem("notes")) || [];

//   notes.forEach((note, index) => {
//     let li = document.createElement("li");

//     li.innerHTML = `
//       ${note}
//       <button onclick="deleteNote(${index})">❌</button>
//     `;

//     notesList.appendChild(li);
//   });
// }

// // Q.4 Delete note
// function deleteNote(index) {
//   let notes = JSON.parse(localStorage.getItem("notes")) || [];

//   notes.splice(index, 1);

//   localStorage.setItem("notes", JSON.stringify(notes));

//   displayNotes();
// }


