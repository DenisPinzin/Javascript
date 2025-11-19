/*
6.Trouver l'élément le plus fréquent dans un tableau
Écris une fonction mostFrequent(arr) qui retourne l'élément le plus fréquent dans un
tableau.
*/

// let fruits = ["apple", "banana", "cherry", "banana", "banana"];

// function mostFrequent(arr) {
//     let frequent = 0;
//     let thefruit = "";

//     for (let i of arr) {
//         let count = 0;
        
//         for (let j of arr) {
//             if (i === j) {
//                 count++;
//             }
//         }
//         if (count > frequent) {
//             frequent = count;
//             thefruit = i;
//         }
//     }
//     return thefruit;
// }

// console.log(mostFrequent(fruits));

//SOLUTION

let fruits = ["apple", "banana", "cherry", "banana", "apple", "cherry"]

const countOccurrences = (arr, value) => {
    let count = 0
    arr.forEach(item => {
        if (item === value)
            count++
    })
    return count
}

function  mostFrequent(arr) {
    let maxOccurrence = 0
    let result = ''
    arr.forEach(fruit => {
        const count = countOccurrences(arr, fruit)
        if(count > maxOccurrence) {
            result = fruit
            maxOccurrence = count
        }
    })
    return result
}

console.log(mostFrequent(fruits))