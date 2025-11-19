/*
13.Truncate
Tronque une chaîne (premier argument) si elle est plus longue que la longueur maximale de
chaîne donnée (deuxième argument). Renvoie la chaîne tronquée avec une terminaison ....
*/

function truncateString(str, num) {
    if(str.length <= num)
        return str;

    const subString = str.split('').splice(0, num).join('')
    return `${subString}...`
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))


// Solution avec ternaire
function truncateStringWithTernary(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
}

console.log(truncateStringWithTernary("A-tisket a-tasket A green and yellow basket", 8))