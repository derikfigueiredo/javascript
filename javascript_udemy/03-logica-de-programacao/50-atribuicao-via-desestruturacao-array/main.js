//A sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos e armazena-los em variáveis distintas.

//const  ATRIBUIÇAO VIA DESESTRUTURAÇÃO/REATRIBUINDO VALORES = ARRAY
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero);
console.log(resto);
//OUTPUT:1000 2000
// [
//     3000, 4000,
//     5000, 6000,
//     7000, 8000,
//     9000
//   ]


//PULAR VALORES
const [um, , dois, , tres, ...resto2] = numeros;
console.log(um, dois, tres, resto2);
//OUTPUT: 1000 3000 5000 [ 6000, 7000, 8000, 9000 ]


//
const numeros2 = [[1,2,3], [4,5,6], [7,8,9]];
const [,[,,seis]] = numeros2;
console.log(seis);
//OUTPUT: 6

//
const [ar1, ar2, ar3] = numeros2; 
console.log(ar2[2]);
//OUTPUT: 6


