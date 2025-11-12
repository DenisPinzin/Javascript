/*
11.Table des multiplications
faire le tableau des multiplications de 0 a 9
*/
let number = 0

for (let i = 0; i <=10; i++) {
    for (let j = 0; j <=10; j++) {
        number+= " " + i*j
        
    }
    console.log(number  )
    number= 0
}