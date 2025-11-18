/*
2. Calculatrice simple 
●  Énoncé : Crée deux champs de saisie <input type="number" id="number1"> 
et <input type="number" id="number2">, ainsi qu'un bouton <button 
id="calculate">Calculer</button>. Ajoute un élément <p 
id="result">Résultat : </p> pour afficher le résultat. Lors du clic sur 
"Calculer", affiche la somme des deux nombres dans l'élément result.
*/

const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')
const calculate = document.getElementById('calculate')
const result = document.getElementById('result')

calculate.addEventListener('click', function(){
    result.textContent = parseInt(number1.value) + parseInt(number2.value)
})