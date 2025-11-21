/*
1. Afficher un message selon la valeur saisie 
●  Énoncé : Crée un champ de saisie <input id="userInput" 
placeholder="Tapez quelque chose...">, un élément <p 
id="message"></p> pour afficher un message et un bouton. Lorsque 
l'utilisateur tape un mot précis "Bonjour" et clique sur le bouton, affiche 
le message "Bonne journée !" Dans ces cas-là, la couleur du message 
doit être vert. S'il tape "Au revoir", affiche "À la prochaine !". Pour toute 
autre saisie, affiche "Je ne comprends pas" en rouge.
*/

let p = document.getElementById('message')
let button = document.getElementById('button')
let input = document.getElementById('userInput')


button.addEventListener('click', function(){
    if (input.value == "Bonjour") {
        p.textContent= 'Bonne journée !'
        p.classList.add('text-green')
    } else if (input.value == "Au revoir") {
        p.textContent= 'À la prochaine !'
        p.classList.add('text-green')
    } else {
        p.textContent= 'Je ne comprends pas'
        p.classList.add('text-red')
    }
})


