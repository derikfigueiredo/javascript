let num1 = 1;
let num2 = 2.5;

console.log(num1 + num2);
//OUTPUT: 3.5

//CASO EU QUERO CONTANENAR
console.log(num1.toString() + num2);
//toString retorna uma string temporariamente, sem alterar o objeto 

console.log(typeof num1);
//Podemos ver que toString não alterou o tipo 

console.log(num1.toFixed(2)); //quantas casas decimais eu quero
console.log(num1.toFixed(4));
//OUTPUT: 1.00
//OUTPUT: 1.0000

console.log(Number.isInteger(num1));
//OUTPUT:  true

let temp = num1 + '5';
console.log(Number.isNaN(temp))
//OUTPUT: false


