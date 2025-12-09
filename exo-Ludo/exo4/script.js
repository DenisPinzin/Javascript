const h1 = document.querySelector('h1')
const rgb = document.querySelector('.rgb')
const rgbRange = document.querySelector('#rgbRange')

rgbRange.addEventListener('mouseup', () => {
    h1.style.backgroundColor = "rgb(140 140 "+rgb.innerHTML+")"
})

const pad =document.querySelector('.pad')
const padRange = document.querySelector('#padRange')

padRange.addEventListener('mouseup', () => {
    h1.style.padding = pad.innerHTML + "px"
})

const heig =document.querySelector('.heig')
const heightRange =document.querySelector('#heightRange')

heightRange.addEventListener('mouseup', () => {
    h1.style.height = heig.innerHTML + "px"
    console.log(heig.innerHTML )
})

const widt = document.querySelector('.widt')
const widthRange = document.querySelector('#widthRange')

widthRange.addEventListener('mouseup', () => {
    h1.style.width = widt.innerHTML + "px"
    console.log(widt.innerHTML )
})

const arron =document.querySelector('.arron')
const arrondiRange =document.querySelector('#arrondiRange')

arrondiRange.addEventListener('mouseup', () => {
    h1.style.borderRadius = arron.innerHTML + "px"
    console.log(arron.innerHTML )
})

const rotat =document.querySelector('.rotat')
const rotationRange =document.querySelector('#rotationRange')

rotationRange.addEventListener('mouseup', () => {
    h1.style.rotate = rotat.innerHTML + "deg"
    console.log(rotat.innerHTML )
})