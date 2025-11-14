/*
1. Modifier tous les éléments d'un tableau
Créer un nouveau tableau où chaque élément est multiplié par 2.
*/

let arrayNumbers = [3, 14, 4]
let newTable = []

for (let number of arrayNumbers) {
    let newValor = (number * 2)
    newTable.push(newValor)
    
}

console.log(newTable)