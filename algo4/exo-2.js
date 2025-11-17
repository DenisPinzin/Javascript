/*
2. Vérification de la validité d'une date
Créer une fonction qui vérifie si une date donnée (au format YYYY-MM-DD) est valide en
utilisant l'objet Date. La fonction doit retourner true si la date est valide et false sinon.
Exemple de sortie :
● Pour "2024-02-29", la fonction retourne true (année bissextile).
● Pour "2023-02-29", la fonction retourne false (non-bissextile).
*/

const firstDate = "15/05/2019";
const secondDate = "05/15/2019";

function dateValid(dateStr) {
  return !isNaN(new Date(dateStr));
}

console.log(dateValid(firstDate))
console.log(dateValid(secondDate))