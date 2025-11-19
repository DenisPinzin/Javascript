/*
8. Filtrer les éléments pairs
Écris une fonction filterEven(arr) qui retourne un tableau contenant uniquement les
nombres pairs d'un tableau donné.
*/

// let arr = [1, 2, 3, 4, 5, 6]

// function filterEven(arr) {
//     let secondArr = []
//     for (let value of arr) {
//         if (value % 2 === 0) {
//             secondArr.push(value)
//         }
//     }
//     return secondArr
// }

// console.log(filterEven(arr))

//SOLUTION

function filterEven(arr) {
    return arr.filter(item => item % 2 === 0)
}

let numbers = [1, 2, 3, 4, 5, 6];
console.log(filterEven(numbers));