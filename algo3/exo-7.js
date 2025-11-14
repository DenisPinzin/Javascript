/*
7. Inverser les mots dans une phrase
Écris une fonction reverseWords(sentence) qui prend une chaîne de caractères, la
divise en mots, et retourne la phrase avec les mots dans l'ordre inverse.
*/

function reverseWords(sentance) {
    let string = sentance.split(" ")
    string = string.reverse()
    return sentance = string.join(' ')

 }

let sentance = "I love programming"

console.log(reverseWords(sentance))