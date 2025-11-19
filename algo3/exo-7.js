/*
7. Inverser les mots dans une phrase
Écris une fonction reverseWords(sentence) qui prend une chaîne de caractères, la
divise en mots, et retourne la phrase avec les mots dans l'ordre inverse.
*/

// function reverseWords(sentance) {
//     let string = sentance.split(" ")
//     string = string.reverse()
//     sentance = string.join(' ')

//     return sentance
//  }

// let sentance = "I love programming"

// console.log(reverseWords(sentance))

//SOLUTION

function reverseWords(sentence) {
    const result = []
    sentence.split(' ').forEach(word => result.unshift(word))
    return result.join(' ')
}

let sentence = "I love programming";
console.log(reverseWords(sentence));

// // avec la méthode reverse()
// function reverseWords2(sentence) {
//     return sentence.split(' ').reverse().join(' ')
// }

// let sentence2 = "I love Javascript";
// console.log(reverseWords2(sentence));