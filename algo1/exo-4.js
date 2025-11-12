let number = 25

for(let i = 1; i <= number; i++) {
    let ligne = "";
    for (let j = 1; j <= i; j++) {
        ligne += " " + j;
    } 
    console.log(ligne)
}