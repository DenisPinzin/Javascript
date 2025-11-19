/*
4. Filtrer une liste d'éléments 
●  Énoncé : Crée une liste de pays dans un <ul id="countryList"> (par exemple 
: France, Allemagne, Espagne) et un champ de saisie <input 
id="filterInput" placeholder="Filtrer les pays...">. Lorsqu'un 
utilisateur tape quelque chose dans le champ, affiche uniquement les pays qui 
contiennent le texte saisi. 
●  Objectif : Manipuler le DOM pour filtrer dynamiquement des éléments en fonction de 
l'entrée utilisateur.
*/

const input = document.getElementById('filterInput')
const countryList = document.getElementById('countryList')
const countries = countryList.querySelectorAll('li')

input.addEventListener('input', function() {
    const userText = input.value
    for (let i = 0; i < countries.length ; i++) {
        const countriesNames = countries[i].textContent

            if(countriesNames.includes(userText)) {
                countries[i].style.display = ""
            }else{
                countries[i].style.display = "none"
            }
    }
})


