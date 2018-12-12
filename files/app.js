// exercise 1: behandeling van klassen

let bodyref = document.querySelector("body.bg-aqua");
console.log(bodyref);
bodyref.classList.remove("bg-aqua");
console.log(bodyref);
bodyref.classList.add("bg-olive");

let firstP = document.getElementById("first-paragraph")
console.log(firstP);
for (let i = 0; i < firstP.length; i++) {
    firstP.classList.remove("bg-lime");
    firstP.classList.remove("gray");
    firstP.classList.add("aqua");
}

let silver = document.getElementsByClassName("bg-silver");
console.log(silver);
for (let i = 0; i < silver.length; i++) {
    silver[i].classList.add("bg-teal");
    silver[i].classList.remove("bg-silver");
}

let myblockquote = document.getElementsByTagName("blockquote");
console.log(myblockquote);
for (let i = 0; i < myblockquote.length; i++) {
    myblockquote[i].classList.add("bg-white");
}

// exercise 2: CSS-selectoren
let querytable = document.querySelector("#my-table");
console.log(querytable);
querytable.classList.add("bg-purple");

let all = document.querySelectorAll("p");
console.log(all);
for (let i=0; i<all.length; i++){
    all[i].classList.add("shadow");
}

// exercise 3
let pre = document.getElementsByTagName("pre");
console.log(pre);
for (let i = 0; i < pre.length; i++) {
    pre[i].style.color = "red";
    pre[i].style.backgroundcolor = "blue";
    pre[i].style.borderTop = "3px solid red";
    pre[i].style.borderBottom = "3 px solid red";
}

let headingthree = document.getElementsByTagName("h3")[0];
console.log(headingthree);
for (let i = 0; i < headingthree.length; i++){
    headingthree.innerHTML = "<em>Italic title ! yeah !</em>";
}
console.log(headingthree);
let headingtwo = document.getElementsByTagName("h2")[0];
console.log(headingtwo);
for (let i = 0; i < headingtwo.length; i++){
    headingtwo.innerHTML = "<strong>HTML doesn't work!</strong>";
}
console.log(headingtwo);

// exercise 4 Elementen aanmaken
let firstul = document.getElementsByTagName("ul")[0];
console.log(firstul);
let li = document.createElement("li");
li.innerHTML=("My best friend is <a href='http://www.google.com/'>Google</a>");
firstul.appendChild(li);
let link = document.querySelectorAll("li a")[0];
link.style.color = "blue";
console.log(link);

// exercise 5 Meerdere elementen maken en verwijderen
let firstol = document.getElementsByTagName("ol")[0];
console.log(firstol);
let kinderen = firstol.children;
let lengte = kinderen.length;
for (let i = 0; i < lengte; i++){
    firstol.removeChild(kinderen[0]);
}

let games = ["Silent Teacher", "Code Monkey", "CodeCombat"];