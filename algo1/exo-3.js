/*
3.intervertion
Faire un algorithme permetant d'intervertir 2 contenus de 2 variables
*/

let number1 = 7
let number2 =2

while (number1 !== 2 || number2 !== 7) {
        number1--
        number2++
}


console.log("number1=" +number1)
console.log("number2=" +number2)

//----------------------------------- SOLUTION 2


let number3 = 7
let number4 =2


let numberTempo1 = number3
let numberTempo2 = number4

number3 = numberTempo2
number4 = numberTempo1

console.log("number3 " + number3)
console.log("number4 " + number4)