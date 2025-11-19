/*
9. Créer une fonction : Fusionner deux tableaux
Crée une fonction mergeArrays(arr1, arr2) qui fusionne deux tableaux en un seul,
sans utiliser concat().
*/

// let numbers = [1, 2, 3, 4, 5, 6]
// let fruits = ["apple", "banana", "cherry"];


// function mergeArrays(arr1, arr2) {
//     let newArr = []
//     for (let i of arr1) {
//         newArr.push(i)
//     }
//     for (let i of arr2) {
//         newArr.push(i)
//     }
//     return newArr
// }

// console.log(mergeArrays(numbers, fruits))

//SOLUTION

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2]
}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(mergeArrays(arr1, arr2));