/*********************************************** SPLICE ************************************************************** */

// array.splice(índice atual, quantos elementos quero tirar, elem1 para add, elem2 add, elemen...)

const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

//Sempre retorna um array
const removidos = nomes.splice(4, 1);
console.log(removidos);

//Selecionando mais de um elemento
const removidos2 = nomes.splice(2, 2);
console.log(removidos2);


//Adicionar um elemento
console.log(nomes)
//[ 'Maria', 'João']
nomes.splice(1, 0, 'Dudu');
console.log(nomes);
//[ 'Maria', 'João', 'Dudu' ]

//Remover um elemento
nomes.splice(1, 2);
console.log(nomes);

//Remover elementos e adicionar elementos
nomes.splice(0, 2, 'Gabriel', 'Júlia');
console.log(nomes);

//Remover o último elemento
//nomes.splice(-1, 1);
