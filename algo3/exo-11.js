/*
11. Vérifier si un tableau est trié
Écris une fonction isSorted(arr) qui vérifie si les éléments d'un tableau sont triés dans
l'ordre croissant.
*/

// const arr = [80, 9, 700, 40, 1, 5, 200];

// function isSorted(arr) {
    
//     function compare(a, b) {
//         return a - b;
//     }

//     return arr.sort(compare);
// }

// console.log(isSorted(arr))

//VRAI SOLUTION

function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }

let numbers = [1, 2, 3, 4, 5];
console.log(isSorted(numbers));