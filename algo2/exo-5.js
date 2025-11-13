

let noir = "◼️"
let blanc = "◻️"


for (let i = 0; i < 10; i++) {
    let ligne = "";
    for (let j = 0; j < 10; j++) {
        if (i === 0 && j <= 8 || j === 0 || j === 8 && i <= 8 || i === 8 && j <= 8 && j >= 2 || j === 2 && i <= 8 && i >= 2 || i === 2 && j >=2 && j<= 6 || j === 6 && i <= 6 && i>= 2 || i === 6 && j >=4 && j <=5 || j === 4 && i >= 4 && i<= 6) {
            ligne += " " + noir;
        } else {
            ligne += " " + blanc;
        }
    }
    console.log(ligne);
}
