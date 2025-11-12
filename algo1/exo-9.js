/*
9.Condition heure
Demandez l'heure a l'utilisateur et faire un programme qui lui dira en fonction de l'heure donnée si
c'est le matin l'après midi ou le soir.
*/

let now = 0

if (now <= 12 && now >= 0) {
    console.log("c'est le matin") 
} else if (now > 12 && now <= 24) {
    console.log("c'est l'après-midi") 
} else {
    console.log("erreur")
}