/*
2.Damier
Reproduire un damier avec des intervalles de X et d'espace comme sur l'image suivante, sa taille 
dépendra d'une entrée utilisateur
*/

let noir = "◼️"
let blanc = "◻️"

for (let i = 0; i < 10; i++) {
    let ligne = "";
    for (let j = 0; j < 10; j++) {
        if ((i + j) % 2 === 0) {
            ligne += noir + " ";
        } else {
            ligne += blanc + " ";
        }
    }
    console.log(ligne);
}