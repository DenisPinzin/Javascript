/*
11. Vérifier si un tableau est trié
Écris une fonction isSorted(arr) qui vérifie si les éléments d'un tableau sont triés dans
l'ordre croissant.
*/

const arr = [80, 9, 700, 40, 1, 5, 200];

function isSorted(arr) {
    // Fonction de comparaison numérique
    function compare(a, b) {
        return a - b;
    }

    return arr.sort(compare);
}

console.log(isSorted(arr))