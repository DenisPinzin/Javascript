const h1 = document.querySelector('h1')
const rgb = document.querySelector('.rgb')
const rgbRange = document.querySelector('#rgbRange')

rgbRange.addEventListener('input', () => {
    h1.style.backgroundColor = "rgb(" + rgb2.value +" , "+ rgb1.value +" , " + rgb.value + ")"
})

const rgb1 = document.querySelector('.rgb1')
const rgbRange1 = document.querySelector('#rgbRange1')

rgbRange1.addEventListener('input', () => {
    h1.style.backgroundColor = "rgb(" + rgb2.value +" , "+ rgb1.value +" , " + rgb.value + ")"
})

const rgb2 = document.querySelector('.rgb2')
const rgbRange2 = document.querySelector('#rgbRange2')

rgbRange2.addEventListener('input', () => {
    h1.style.backgroundColor = "rgb(" + rgb2.value +" , "+ rgb1.value +" , " + rgb.value + ")"
})

const pad = document.querySelector('.pad')
const padRange = document.querySelector('#padRange')

padRange.addEventListener('input', () => {
    h1.style.padding = pad.value + "px"
})

const heig = document.querySelector('.heig')
const heightRange = document.querySelector('#heightRange')

heightRange.addEventListener('input', () => {
    h1.style.height = heig.value + "px"
})

const widt = document.querySelector('.widt')
const widthRange = document.querySelector('#widthRange')

widthRange.addEventListener('input', () => {
    h1.style.width = widt.value + "px"
})

const arron = document.querySelector('.arron')
const arrondiRange = document.querySelector('#arrondiRange')

arrondiRange.addEventListener('input', () => {
    h1.style.borderRadius = arron.value + "px"
})

const rotat = document.querySelector('.rotat')
const rotationRange = document.querySelector('#rotationRange')

rotationRange.addEventListener('input', () => {
    h1.style.rotate = rotat.value + "deg"
})
