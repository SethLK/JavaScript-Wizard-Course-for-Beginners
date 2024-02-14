// selecting.js

// document.addEventListener("DOMContentLoaded", function() {
//     // id selector
//     const demo = document.querySelector("#demo")
//     demo.innerHTML = "Testing with querySelctor"

// });


// onclick event

// elements ေတွကို add တဲ့ funtion‌ေ လေးပေါ့

// const childTag = document.createElement("p")
// childTag.innerText = "THis is child"

// const parent = document.querySelector("div#parent")
// const btn = document.querySelector(".button")


// btn.addEventListener("click", function(){
//     parent.append(childTag)
// })

// btn.addEventListener("mouseover", function(){
//     btn.style.color = "red";
// })

const btn_1 = document.querySelector("#btn1")
const btn_2 = document.querySelector("#btn2")
const container = document.querySelector(".container")

btn_1.addEventListener("click", function(){
    container.classList.add("red")
})

btn_2.addEventListener("click", function(){
    container.classList.remove("red")
})
