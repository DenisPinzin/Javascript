/*
1. Calcul de l'âge
Écris une fonction qui prend en entrée une date de naissance (au format YYYY-MM-DD) et
retourne l'âge de la personne en années.
*/


function calculateAge(birthdate) {
    let today = new Date();
    let birthDate = new Date(birthdate)
    let age = today.getFullYear() - birthDate.getFullYear();

    if(
        today.getMonth() < birthDate.getMonth() || today.getMonth() === birthDate.getMonth() && today.getDate () < birthDate.getDate()) {
            age--;
        }
        return age;
}

let myAge = '1989-07-26'

console.log(calculateAge(myAge))