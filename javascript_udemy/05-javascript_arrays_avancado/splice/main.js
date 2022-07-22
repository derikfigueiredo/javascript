/******************************************* SPLICE*************************************************** */

//O método splice altera o conteúdo de uma lista, adicionando novos elementos enquanto remove os antigos.

// array.splice(índice atual, quantos elementos quero tirar, elem1 para add, elem2 add, elemen...)
//              -5        -4      -3         -2         -1
//               0         1       2          3          4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];


//Sempre retorna um array
const removidos = nomes.splice(4, 1); //(remover do indice 4, um elemento)
console.log(removidos);
//Resultado: [ 'Júlia' ]
console.log(nomes);
//OUTPUT: [ 'Maria', 'João', 'Eduardo', 'Gabriel' ]




//SELECIONANDO MAIS DE UM ELEMENTO
console.log('**********************NOMES 2***********************')
const nomes2 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
const removidos2 = nomes2.splice(2, 2);
console.log(removidos2);
//OUTPUT: [ 'Eduardo', 'Gabriel' ]
console.log(nomes2);
//OUTPUT: [ 'Maria', 'João', 'Júlia' ]



console.log('*********************** MAX VALUE *************************');
//MAX VALUE serve para ser utilizado como um número infinito
//                                                    -1
let nomes3 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
const removidos3 = nomes3.splice(-3, Number.MAX_VALUE);
console.log(nomes3, removidos3); 
//OUTPUT: [ 'Maria', 'João' ] [ 'Eduardo', 'Gabriel', 'Júlia' ]


console.log('*******ADICIONANDO ELEMENTOS***********');
const nomes4 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
nomes4.splice(2, 0, 'Derik');
console.log(nomes4);
//OUTPUT: [ 'Maria', 'João', 'Derik', 'Eduardo', 'Gabriel', 'Júlia' ]


console.log('***********SUBSTITUIR ELEMENTOS******************');
const nomes5 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
const removidos5 = nomes5.splice(3, 1, 'Matt');
console.log(nomes5);
//OUTPUT: [ 'Maria', 'João', 'Eduardo', 'Matt', 'Júlia' ]
nomes5.splice(3, 1, 'Derik', 'Scott');
console.log(nomes5);
//OUTPUT: [ 'Maria', 'João', 'Eduardo', 'Derik', 'Scott', 'Júlia' ]
nomes5.splice(2, 2, 'Shirle', 'Marcos');
console.log(nomes5);
//[ 'Maria', 'João', 'Shirle', 'Marcos', 'Scott', 'Júlia' ]



//Remover o último elemento
//nomes.splice(-1, 1);
