``
const body = document.querySelector('body')
let selectPage = body.innerHTML;  
// let setPage = localStorage.setItem("selectPage", selectPage); 
let getPage = localStorage.getItem("selectPage");
// console.log(selectPage)

window.addEventListener("load", () => {
    selectPage = getPage
});

setInterval(() => {
    let setPage = localStorage.setItem("selectPage", selectPage); 
    setPage
}, 1000);

