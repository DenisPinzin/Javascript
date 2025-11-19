/*
5. Compter les occurrences d'un élément dans un tableau
Crée une fonction countOccurrences(arr, value) qui retourne le nombre de fois que
value apparaît dans le tableau.
*/

// let fruits = ["apple", "banana", "cherry", "apple", "apple", "cherry"]

// //let value = "apple"
// //let countOccurrences = fruits.filter(x => x === value);
// //let result = countOccurrences.length

// let choice = "cherry"
// let number = 0

// function countOccurrences(arr, value) {
    
//     for (value of arr) {
//             if (value === choice) {
//               number = number + 1  
//             }
//     }
//     return number
// }

// countOccurrences(fruits)
// console.log(number)

//SOLUTION

let fruits = ["apple", "banana", "cherry", "banana", "banana", "cherry"]

const countOccurrences = (arr, value) => {
    let count = 0
    arr.forEach(item => {
        if (item === value)
            count++
    })
    return count
}

console.log(countOccurrences(fruits, "cherry"))

const countOccurrencesForOf = (arr, value) => {
    let count = 0
    for(let item of arr) {
        if (item === value)
            count++
    }
    return count
}

console.log(countOccurrencesForOf(fruits, "cherry"))