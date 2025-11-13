/*
1.Pyramide
Réproduire une pyramide avec une taille qui dépendra d'une entrée utilisateur
*/

let number = 10

for(let i = 1; i <= number; i++) {
    let ligne = "";
    for (let j = 1; j <= i; j++) {
        ligne += "◼️ ";
    } 
    console.log(ligne)
}
