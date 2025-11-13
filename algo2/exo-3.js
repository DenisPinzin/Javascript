/*
3.Carré
Reproduire un carré vide comme sur l'image suivante sa taille dépendra d'une entrée utilisateur
*/

let noir = "◼️"
let blanc = "◻️"


for (let i = 0; i < 10; i++) {
    let ligne = "";
    for (let j = 0; j < 10; j++) {
        if (i === 0 || i === 10-1 || j === 0 || j === 10-1) {
            ligne += " " + noir;
        } else {
            ligne += " " + blanc;
        }
    }
    console.log(ligne);
}

