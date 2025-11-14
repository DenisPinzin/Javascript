/*
6.Trouver l'élément le plus fréquent dans un tableau
Écris une fonction mostFrequent(arr) qui retourne l'élément le plus fréquent dans un
tableau.
*/

let fruits = ["apple", "banana", "cherry", "apple", "apple"];

function mostFrequent(arr) {
    let frequent = 0;
    let thefruit = "";

    for (let i of arr) {
        let count = 0;

        for (let j of arr) {
            if (i === j) {
                count++;
            }
        }

        if (count > frequent) {
            frequent = count;
            thefruit = i;
        }
    }

    return thefruit;
}

console.log(mostFrequent(fruits));
