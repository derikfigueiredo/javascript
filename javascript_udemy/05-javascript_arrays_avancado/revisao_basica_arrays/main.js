let nomes = ['Eduardo', 'Maria', 'Joana'];

 //Apagar elemento e deixar um espaço vazio no lugar dele
delete nomes[2];
console.log(nomes);

//Alterar elemento
nomes[2] = 'Luiz';
console.log(nomes);

//Valor por referência
const novos = nomes; //o que eu mudar em novos, irá mudar em nomes também e vice versa

//Para não ocorre referência entre duas variáveis
let novos2 = [...nomes];
novos2[3] = "diogo";
console.log(novos2);

//Pop, retornar o elemento removido, trabalha no final do array
const removido = nomes.pop();
console.log(removido);

//shift, funciona como a pop, shilt
 const removido2 = nomes.shift()
    console.log(nomes, removido2);

//
nomes.push('João')