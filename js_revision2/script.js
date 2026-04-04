/*********************************************Searching the DOM*************************************/

// let home =  document.body.querySelector(".active")
// home.style.color = "red"

// let allNavElements = document.getElementsByClassName("nav-link");
// allNavElements[0].style.color = "green"
// allNavElements[3].style.color = "red"

// Array.from(document.getElementsByTagName("li")).forEach((element)=>{
//     element.style.backgroundColor = "red"
// })

/********************************************Events and Other DOM Properties****************************/

// let span =  document.getElementsByTagName("span")[0];
// console.log(span);

// console.dir(span);

// console.log(document.body.firstChild.nodeName);
// console.log(document.body.firstElementChild.tagName);

// console.log(document.body.firstChild.nodeValue);
// console.log(document.body.firstChild.data);

// console.log(document.body.firstElementChild.textContent);
// console.log(document.body.textContent)

// let first = document.getElementById("first");
// first.hidden = true

// let h1 = document.getElementById("h1");
// console.log(h1.getAttribute('class'));

// console.log(h1.hasAttribute("class"));
// console.log(h1.hasAttribute("style"));

// h1.setAttribute("hidden", true);
// h1.setAttribute("class", "true Sach hello");
// h1.removeAttribute("hidden");
// // h1.removeAttribute("class");

// console.log(h1.attributes)

// console.log(h1.dataset)
// console.log(h1.dataset.name)
// console.log(h1.dataset.age);

//insertion methods--------------------------------------------------------------------------------------------

// let div1 = document.getElementsByTagName("div")[0];
// // div1.innerHTML = div1.innerHTML + "<h1>Hello World!</h1>";

// let div2 = document.createElement("div");
// div2.className = "hey";
// div2.innerHTML = "<h1>Hello World</h>";
// div1.append(div2); // In the end of div box (inner)
// div1.prepend(div2); // In the start of div box (inner)
// div1.before(div2); // before the begining of div box (outer)
// div1.after(div2); // after the end of div box (outer)
// div1.replaceWith(div2); // replace whole div box with another div element

//insertAdjacentHTML/Text/Element-------------------------------------------------------------------------

// let firstDiv = document.getElementById("first-div");
// firstDiv.insertAdjacentHTML("beforebegin", "<p>Hello, How are you?</p>");
// firstDiv.insertAdjacentHTML("afterbegin", "<p>Hii, I am fine.</p>");
// firstDiv.insertAdjacentHTML("beforeend", "<p>What are you doing nowdays?</p>");
// firstDiv.insertAdjacentHTML("afterend", "<p>I am working as a SDE2 @ Google</p>");

//classList and className---------------------------------------------------------------------------------------------------

// let firstDiv = document.getElementById("first-div");

// firstDiv.className = "red"
// firstDiv.classList.remove("red")
// firstDiv.classList.add("box")
// console.log(firstDiv.classList)

// firstDiv.classList.toggle("red")

//setTImeout and SetInterval----------------------------------------------------------------------------------------------------------

// setTimeout(function(){
//     alert("Hey I am setTimeout")
// }, 3000);

// setTimeout(()=>alert("I am setTimeout"), 2000)

// let timerId = setTimeout(()=>{
//     console.log("Hello How are you?")
// }, 3000)

// console.log(timerId);

// let sum = (a, b, c)=>{
//     console.log("setTimeout running properly " + (a + b + c));
// }

// let a = setTimeout(sum, 1000, 5, 9, 4);

// let user = prompt("Do you want to run setTimeout? ")

// if("n" === user){
//     clearTimeout(a)
// }

// setInterval(function(){
//     alert("I am setInterval")
// }, 4000);

// let sum = (a, b) =>{
//    alert("setInterval is running properly " + (a + b))
// }

// let a = setInterval(sum,  5000, 10, 59);

// console.log(a)

// clearInterval(a)

// Browser Events-----------------------------------------------------------------------------------------------------------------

// let container = document.getElementsByTagName("div")[0];
// container.onclick = function () {
//   let container = document.getElementsByTagName("div")[0];
//   container.innerHTML = "<h1>Hello World!</h1>";
// };

//addEventListener and removeEventListener-------------------------------------------------------------------------------------

// let btn =  document.getElementById("btn");

// btn.addEventListener('click', function(){
//     alert("Hello World1!")
// })

// btn.addEventListener('click', function(){
//     alert("Hello World2!")
// })

// let i = prompt("Enter Number:")

// if(i == "2"){
//     btn.removeEventListener('click', function(){
//         alert("Hello Word1!")
//     }) // it is a different function object so it will not remove
// }

// let x =  function(e){
//     // alert("Hello World1!")
//     // console.log(e);
//     console.log(e.target);
//     console.log(e.type, e.clientX, e.clientY)
// console.log(e.currentTarget)
// }

// let y = function(e){
//     alert("Hello World2!")
// }

// btn.addEventListener('click', x);

// btn.addEventListener('click', y)

// let i = prompt("Enter Number:")

// if(i == "2"){
//     btn.removeEventListener('click', x)
// }

//pactice set 8-----------------------------------------------------------------------------------------

//Q.3

// let btn = document.getElementsByTagName("button");
// console.log(btn);

// btn[0].addEventListener("click", function () {
//   window.open("https://ww.google.com", "-blank");
// });
// btn[1].addEventListener("click", function () {
//   window.open("https://www.linkedin.com/feed/", "-blank");
// });
// btn[2].addEventListener("click", function () {
//   window.open("https://github.com/dashboard", "-blank");
// });
// btn[3].addEventListener("click", function () {
//   window.open("https://www.instagram.com/", "-blank");
// });

//Q.5

let box = document.getElementsByTagName("div")[0];
setInterval(function () {
  box.classList.toggle("blue");
}, 300);
