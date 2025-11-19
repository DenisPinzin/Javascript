/*
4. Créer une fonction : Inverser un tableau
Créer une fonction reverseArray(arr) qui retourne le tableau inversé.
*/

// let fruits = ["apple", "banana", "cherry"]

// function reverseArray(arr) {
//      return arr.reverse()
// }

// reverseArray(fruits)
// console.log(fruits)


//SOLUTION

let fruits = ["apple", "banana", "cherry"]
const reverseArray = (array) => {
    const newArray = []
    array.forEach((item, index) => newArray.unshift(array[index]))
    return newArray
}

console.log(reverseArray(fruits))