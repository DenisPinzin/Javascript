/*
Faire un programme qui permet de trouver l'hypothénuse d'un triangle rectange.
L'utilisateur devra rentrer les longueurs b et c
Pour rappel le théorème de Pythagore qui permet de calculer l'hypothénuse est :
a²=b²+c²
*/

function Hypo(a, b) {
  return Math.sqrt(a * a + b * b);
}

console.log(Hypo(3, 4));

console.log(Hypo(5, 12));