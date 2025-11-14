/*
12.Title Case
Renvoie la chaîne fournie avec la première lettre de chaque mot en majuscule.
Assurez-vous que le reste du mot est en minuscules.
*/


let phrase = "bonjour tout le monde";
let newPhrase = []


function transformeUpperCase(phrase) {
    let array = phrase.split(' ')
    
    for (let i of array) {
        newPhrase += i.charAt(0).toUpperCase() + i.slice(1) + " ";
}
return newPhrase
}


console.log(transformeUpperCase(phrase))




