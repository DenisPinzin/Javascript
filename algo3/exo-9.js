/*
9. Créer une fonction : Fusionner deux tableaux
Crée une fonction mergeArrays(arr1, arr2) qui fusionne deux tableaux en un seul,
sans utiliser concat().
*/

let arr = [1, 2, 3, 4, 5, 6]
let fruits = ["apple", "banana", "cherry"];


function mergeArrays(arr1, arr2) {
    let newArr = []
    for (let i of arr1) {
        newArr.push(i)
    }
    for (let i of arr2) {
        newArr.push(i)
    }
    return newArr
}

console.log(mergeArrays(arr, fruits))

