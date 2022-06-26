function funcao() {
    //JavaScript a função recebe argumentos mesmo sem ter declarado parametros. Os argumentos recebidos são sustentados pela variável arguments
    //Isso não se aplica para arrow function, apenas para funções criadas pela palavra function
    console.log(arguments);
    console.log(arguments[2]); //arguments[posição-do-argumento] 
} 

funcao(1, 2, 3, 4, 5, 6);

///////////////////////////////////////////////////////////////
function funcao2(a, b, c, d, e, f) {
    console.log(a,b,c,d,e,f);
}

funcao2(1, 2, 3);
//se criar paramentos na função e eles não receberem valores, o valor da variável será undefined
//1 2 3 undefined undefined undefined


//Essa função tem valores padroes definidos
function funcao3(a, b = 2, c = 4) {
    console.log(a + b + c);
}
//funcao3(2, null, 20);//null ele assume valor de zero
//Resultado da soma: 22 

//se colocar uma string no meio da soma dos numeros acontece uma contatenização

//Para o valor padrao ser assumido, usa undefined 
funcao3(2, undefined, 20)


//Podemos fazer uma desestruturação de objeto
function funcao4({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}

let obj = {
    nome: 'Dérik',
    sobrenome: 'Figueiredo',
    idade: 20
}
funcao4(obj);


//utilizamos a sintaxe ...nome-da-variavel, chamado de rest operator ou parametro rest no último parmentro para receber o resto dos argumentos que não teve parament
//rest operador deve ser colocado como último paramentro
const conta = function(operador, acumulador, ...numeros) {
    console.log(arguments); //A variável arguments tem todos os argumentos recebidos dentro da função
    console.log(numeros); //A variável numero é um array com os argumentos que não tiveram paramentro, que restaram.
};
conta('+', 1, 20, 30, 40, 50);
