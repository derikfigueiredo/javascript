//                   86 - REDUCE


//É possível substituir filter e map com reduce, mas não é aconselhável.

// const numeros = [5, 80, 1, 2, 3, 5, 8];
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     console.log(acumulador, valor);
// });
//OUTPUT: 5 80
// undefined 1
// undefined 2
// undefined 3
// undefined 5
// undefined 8







// const numeros = [5, 80, 1, 2, 3, 5, 8];
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     console.log(acumulador, valor);
//     return acumulador;
//}, 0);
/* OUTPUT:
0 5
0 80
0 1
0 2
0 3
0 5*/






// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     if(valor % 2 === 0) acumulador.push(valor);
//      return acumulador;
// }, []);
// console.log(total)
//OUTPUT:
//[ 50, 80, 2, 8, 22 ]



//A função reduce do JavaScript serve para iterar sobre um array e utilizar o valor de cada item para criar um objeto final com base em alguma regra. Como o próprio nome da função sugere, ela “reduz” os itens de um vetor a um valor único. Por exemplo, podemos utilizá-la para obter a soma ou produto dos itens de um vetor numérico.

//            SOME TODOS OS NÚMEROS (reduce)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    if(valor % 2 == 0) {
        acumulador += valor;
    }

     return acumulador;
}, 0);
console.log(total);
//OUTPUT: 162



//          RETORNE A PESSOA MAIS VELHA
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 105 },
    { nome: 'Letícia', idade: 10 },
    { nome: 'Rosona', idade: 64 },
    { nome: 'Wallace', idade: 10 }
];
const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
}, );
console.log(maisVelha);
//OUTPUT: { nome: 'Eduardo', idade: 105 }


