/*
5. Formatage personnalisé d'une date
Écris une fonction qui prend une date en entrée et la formate sous la forme "Jour de la
semaine mois jour année". Utilise toLocaleDateString() pour obtenir le format
correct.
*/

const currentDate = new Date()

function formatCustomDate(date) {
    date = date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    weekday:'long',
    month: 'long',
    day: 'numeric'
})
return date
}

console.log(formatCustomDate(currentDate))
