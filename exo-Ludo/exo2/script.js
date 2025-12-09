const btn = document.querySelector("button")
const body = document.querySelector("body")
const h1 = document.querySelector("h1")

btn.addEventListener('click', () => {
    btn.classList.toggle('btnDarkMod')
    h1.classList.toggle('h1DarkMod')
    body.classList.toggle('bodyDarkMod')
})