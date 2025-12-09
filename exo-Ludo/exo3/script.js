const img = document.querySelector('img')
let bottom = 0;
let left = 0.

document.addEventListener('keydown', (event) => { 
    if (event.key === 'z') {
        bottom += 10; 
        img.style.bottom = bottom + 'px';
    } 

    if (event.key === 's') { 
        bottom -= 10; 
        img.style.bottom = bottom + 'px';
    } 

    if (event.key === 'd') { 
        left += 10; 
        img.style.left = left + 'px';
    } 

    if (event.key === 'q') { 
        left -= 10; 
        img.style.left = left + 'px';
    } 

    //SORTIE DE FENETRE
    const imglarg = img.offsetWidth;
    const imghaut = img.offsetHeight;

    if (bottom < 0) bottom = 0;
    if (left < 0) left = 0;
    if (bottom > window.innerHeight - imghaut) bottom = window.innerHeight - imghaut;
    if (left > window.innerWidth - imglarg) left = window.innerWidth - imglarg;

    img.style.left = left + 'px';
    img.style.bottom = bottom + 'px';
});
