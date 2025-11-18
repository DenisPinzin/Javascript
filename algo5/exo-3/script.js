/*
3. Galerie d'images interactive 
●  Énoncé : Crée une série de petites images côte à côte (par exemple, trois ou quatre 
<img> avec la classe thumbnail). Ajoute une grande zone d'affichage d'image en 
haut de la page, avec un <img id="mainImage" src=""> qui est vide au début. 
Lorsque l'utilisateur clique sur une des miniatures, la source de mainImage est mise 
à jour pour afficher l'image cliquée en grand dans la zone d'affichage.
*/

const thumbnail = document.getElementsByClassName('thumbnail')
const mainImage = document.getElementById('mainImage')

thumbnail[0].addEventListener('click', function () {
    mainImage.setAttribute('src', '/exo-3/img/lion.jpg')
})

thumbnail[1].addEventListener('click', function () {
    mainImage.setAttribute('src', '/exo-3/img/zebra.jpg')
})

thumbnail[2].addEventListener('click', function () {
    mainImage.setAttribute('src', '/exo-3/img/giraf.jpg')
})