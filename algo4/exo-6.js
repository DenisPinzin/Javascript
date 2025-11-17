// Renvoie vrai si la chaîne donnée est un palindrome. Sinon, retournez false.
// Un palindrome est un mot ou une phrase orthographié de la même manière vers l’avant et vers l’arrière, en ignorant la ponctuation, la casse et l’espacement.
// Remarque : Vous devrez supprimer tous les caractères non alphanumériques (ponctuation, espaces et symboles) et tout mettre dans la même casse (minuscules ou majuscules) afin de vérifier les palindromes.
// Nous passerons des chaînes avec différents formats, tels que racecar, RaceCar et race CAR, entre autres.
// Nous transmettrons également des chaînes avec des symboles spéciaux, tels que 2A33a2, 2A3 3a2 et 2_A33#A2.

// 1. palindrome("eye") doit retourner un boolean.
// 2. palindrome("eye") doit retourner true.
// 3. palindrome("_eye") doit retourner true.
// 4. palindrome("race car") doit retourner true.
// 5. palindrome("not a palindrome") doit retourner false.
// 6. palindrome("A man, a plan, a canal. Panama") doit retourner true.
// 7. palindrome("never odd or even") doit retourner true.
// 8. palindrome("nope") doit retourner false.
// 9. palindrome("almostomla") doit retourner false.
// 10. palindrome("My age is 0, 0 si ega ym.") doit retourner true.
// 11. palindrome("1 eye for of 1 eye.") doit retourner false.
// 12. palindrome("00 (: /-\ 🙂 0-0") doit retourner true.
// 13. palindrome("five|/|four") doit retourner false.

let word = "00 (: /-\ 🙂 0-0"
function removeNonAlphabetic(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return str
}

function transform(word) {
    word = removeNonAlphabetic(word)
    console.log(word)
    return word
}


console.log(transform(word))