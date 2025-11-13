/*
1.
L'ordinateur génère un nombre compris entre 1 et 100 L'utilisateur doit trouver le nombre
mystère, a chaque essai il devra savoir si le nombre est plus petit ou plus grand que celui
qu'il a essayé
*/

let choice = 3
let number = Math.floor(Math.random() * ( 101 - 1) + 1);

if (number > choice) {
    console.log("Votre nombre est inferieur : " + number)
} else if (number < choice) {
    console.log("Votre nombre est superieur : " + number)
} else if (number === choice) {
    console.log("Bravo vous avez trouvé : " + number)
} else {
    console.log("Tentez un nombre entre 1 est 100")
}
