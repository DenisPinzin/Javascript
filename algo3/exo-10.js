/*
10. Créer une fonction : Supprimer les doublons
Écris une fonction removeDuplicates(arr) qui retourne un tableau sans les doublons.
*/

function removeDuplicates(arr) {
    let newArr = [];

    for (let i of arr) {
        if (!newArr.includes(i)) {
            newArr.push(i);
        }
    }

    return newArr;
}

let fruits = ["apple", "banana", "cherry", "apple", "apple"];

console.log(removeDuplicates(fruits));

