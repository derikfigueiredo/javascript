let num1 = 9.54578;
let num2 = Math.floor(num1); //arrendodar valor para baixo
console.log(num2);
//OUTPUT: 9


let num3 = Math.ceil(num1); //arrendodar valor para cima
console.log(num3);
//OUTPUT: 10


let num4 = Math.round(num1); //Arrendodar para o mais proximo
console.log(num4);
//OUTPUT: 10


//MENOR NUMERO
console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));
//OUTPUT:-50

//MAIOR NUMERO
console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6))
//OUTPUT: 1500


console.log(Math.random() * (10 - 5) + 5); //Exibir numero aleatorio entre 10 e 5 (maximo - minuno)