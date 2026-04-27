/****************************************(Login using Cookies)******************************/
// function login() {
//   const username = document.getElementById("username").value;

//   if (username) {
//     // Store cookie (valid for 1 day)
//     document.cookie = `user=${username}; max-age=86400; path=/`;

//     alert("Login successful!");
//     window.location.href = "home.html";
//   } else {
//     alert("Enter username");
//   }
// }

/****************************************Get Cookie (Check Login)******************************/

// function getCookie(name) {
//   let cookies = document.cookie.split("; ");

//   for (let c of cookies) {
//     let [key, value] = c.split("=");
//     if (key === name) return value;
//   }
//   return null;
// }

// // Check login
// window.onload = function () {
//   const user = getCookie("user");

//   if (!user) {
//     alert("Please login first!");
//     window.location.href = "index.html";
//   } else {
//     document.getElementById("user").innerText = "Hello " + user;
//   }
//   const temp = sessionStorage.getItem("tempItem");
//   if (temp) {
//     document.getElementById("item").value = temp;
//   }
//   loadCart();
// };

/****************************************Cart System (LocalStorage)******************************/

// function addToCart() {
//   const item = document.getElementById("item").value;

//   if (!item.trim()) return;

//   saveTempData(item);

//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   cart.push(item);

//   localStorage.setItem("cart", JSON.stringify(cart));

//   document.getElementById("item").value = "";

//   loadCart();
// }

// function loadCart() {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   let list = document.getElementById("cart");

//   list.innerHTML = "";

//   cart.forEach((item, index) => {
//     let li = document.createElement("li");

//     let text = document.createElement("span");
//     text.innerText = item;

//     let btn = document.createElement("button");
//     btn.innerText = "x";
//     btn.classList.add("delete-btn");

//     li.appendChild(text);
//     li.appendChild(btn);

//     list.appendChild(li);

//     // ✅ ADD THIS (important)
//     btn.addEventListener("click", function () {
//       removeItem(index);
//     });

//   });
// }
// /****************************************SessionStorage (Temporary Data Example)******************************/

// function saveTempData(item) {
//   // const item = document.getElementById("item").value;
//   sessionStorage.setItem("tempItem", item);
// }

// // Load temporary data
// // window.onload = function () {
// //   const temp = sessionStorage.getItem("tempItem");
// //   if (temp) {
// //     document.getElementById("item").value = temp;
// //   }
// // };

//********************************************************Remove item from car***************************** */
// function removeItem(index) {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   cart.splice(index, 1);

//   localStorage.setItem("cart", JSON.stringify(cart));

//   loadCart();
// }
