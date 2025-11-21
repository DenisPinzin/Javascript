/*
Exercice 4 : L'horloge en temps réel (DOM) 
Énoncé : Affiche une horloge en temps réel qui met à jour l'heure chaque seconde. 
1.  Dans ton HTML, ajoute un élément <div id="clock"></div>. 
2.  Utilise setInterval pour afficher l’heure actuelle (heures:minutes ) dans ce <div> et mettre à jour chaque seconde. 
*/

const clock = document.getElementById('clock')



setInterval(() => {
    let currentDate = new Date()
    let hour = currentDate.getHours()
    let minut = currentDate.getMinutes()
    let second = currentDate.getSeconds()
    clock.textContent = hour + ":"+ minut+ ":" +second
}, 1000);

