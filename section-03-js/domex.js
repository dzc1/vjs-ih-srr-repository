console.log("hello");

let body = document.body;
let pTag = document.createElement("div");
//pTag.innerText = "I love js!";
pTag.innerHTML = "I love js!";

body.appendChild(pTag);
