/*
Exercice 2 : Le compte à rebours
Énoncé : Crée un compte à rebours avant le début d'une activité.
1. Dans ton HTML, ajoute un élément <div id="countdown"></div>.
2. Utilise setInterval pour afficher un compte à rebours de 5 secondes dans ce
<div>.
3. Affiche chaque seconde le nombre de secondes restantes.
4. Quand le compte à rebours atteint 0, affiche "Go !" et arrête le compte à rebours.
*/

const countdown = document.getElementById('countdown')
const one = 1
const two = 2
const three = 3
const four = 4
const five = 5
// setTimeout(function () {
//     countdown.textContent = "5"
//     setTimeout(function () {
//         countdown.textContent = "4"
//         setTimeout(function () {
//             countdown.textContent = "3"
//             setTimeout(function () {
//                 countdown.textContent = "2"
//                 setTimeout(function () {
//                     countdown.textContent = "1"
//                     setTimeout(function () {
//                     countdown.textContent = "go"
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


function letsGo() {
    let count = 6

    const decompte = setInterval(function() {
        count = count - 1
        countdown.textContent = count
    }, 1000);
    
    setTimeout(function() {
        if (count == 0) {
            countdown.textContent = 'go'
        }
        clearInterval(decompte)
    }, 6000);
}

letsGo()

