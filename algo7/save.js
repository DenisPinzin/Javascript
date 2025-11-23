let selectPage = inProgress.innerHTML;  
// let setPage = localStorage.setItem("selectPage", selectPage); 
let getPage = localStorage.getItem("selectPage");
// console.log(selectPage)

window.addEventListener("load", () => {
    selectPage = getPage
});

setInterval(() => {
    let setPage = localStorage.setItem("selectPage", selectPage); 
    setPage
    // console.log(setPage)
}, 1000);

