const btn1 = document.querySelector(".btn-1")
const btn2 = document.querySelector(".btn-2")
const btn3 = document.querySelector(".btn-3")

const square1 = document.querySelector(".square1")
const square2 = document.querySelector(".square2")
const square3 = document.querySelector(".square3")

btn1.addEventListener('click', () => {
 square1.style.backgroundColor = "red";
})

btn2.addEventListener('mouseenter', () => {
 square2.style.width = "50px";
 square2.style.height = "50px";
})

btn3.addEventListener('mouseleave', () => {
 square3.style.marginLeft = "200px"
})