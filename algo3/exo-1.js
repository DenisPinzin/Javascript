/*
1. Modifier tous les éléments d'un tableau
Créer un nouveau tableau où chaque élément est multiplié par 2.
*/

//let arrayNumbers = [3, 14, 4]
// let newTable = []

// for (let number of arrayNumbers) {
//     let newValor = (number * 2)
//     newTable.push(newValor)
    
// }

// console.log(newTable)

//SOLUTION2

let arrayNumbers = [3, 14, 4]
let newTable = []

function multiply(array) {
    for (let i of array) {
        newTable.push(i * 2)
    }

}

multiply(arrayNumbers)
console.log(newTable)