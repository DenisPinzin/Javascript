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
});
