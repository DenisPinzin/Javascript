/*
_Nous allons vous fournir un tableau de deux nombres. 
_Renvoie la somme de ces deux nombres plus la somme de tous les nombres compris entre eux. 
_Le plus petit nombre ne sera pas toujours le premier. Par exemple, sumAll([4,1]) doit renvoyer 10, car la somme de tous les nombres compris entre 1 et 4 (inclus) est égale à 10.
Cas de test:   
● sumAll([1, 4]) doit retourner un nombre 
● sumAll([1, 4]) doit retourner 10 
● sumAll([4, 1]) doit retourner 10 
● sumAll([5, 10]) doit retourner 45 
● sumAll([10, 5]) doit retourner 45
*/

const arr1 = [1, 4]
const arr2 = [4, 1]
const arr3 = [5, 10]
const arr4 = [10, 5]

function sumAll(arr) {
let concat = 0

    if(arr[0] < arr[1]) {
        for (let i = arr[0]; i<= arr[1]; i++) {
        concat += i
    }
    return concat
    } else if (arr[1] < arr[0]) {
        for (let i = arr[1]; i<= arr[0]; i++) {
        concat += i
    }
    return concat
}
}

console.log(sumAll(arr1))
console.log(sumAll(arr2))
console.log(sumAll(arr3))
console.log(sumAll(arr4))



