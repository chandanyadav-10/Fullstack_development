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

let div1 = document.getElementsByTagName("div")[0];
// div1.innerHTML = div1.innerHTML + "<h1>Hello World!</h1>";

let div2 = document.createElement("div");
div2.className = "hey";
div2.innerHTML = "<h1>Hello World</h>";
// div1.append(div2); // In the end of div box (inner)
// div1.prepend(div2); // In the start of div box (inner)
// div1.before(div2); // before the begining of div box (outer)
// div1.after(div2); // after the end of div box (outer)
div1.replaceWith(div2); // replace whole div box with another div element

