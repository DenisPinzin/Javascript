/*
4.Carré avec pattern
En utilisant l'exercice précédent, permettre a l'utilisateur de choisir un des deux pattern suivant, il 
gardera la taille précédemment choisie
*/

let noir = "◼️"
let blanc = "◻️"
let dix = 10

for (let i = 0; i < 10; i++) {
    let ligne = "";
    for (let j = 0; j < 10; j++) {
        if (i === 0 || i === 10-1 || j === 0 || j === 10-1 || i > 1 && i < 8 && j > 1 && j < 8   ) {
            ligne += " " + noir;
        } else {
            ligne += " " + blanc;
        }
    }
    console.log(ligne);
}

console.log("          ")

for (let i = 0; i < 10; i++) {
    let ligne = "";
    for (let j = 0; j < 10; j++) {
        if (i === 0 || i === 10-1 || j === 0 || j === 10-1 || j === i || j === 9 - i ) {
            ligne += " " + noir;
        } else {
            ligne += " " + blanc;
        }
    }
    console.log(ligne);
}





