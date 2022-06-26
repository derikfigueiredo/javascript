
//Declaração de função (Function hoisiting)

falaOi(); //Posso executar a função antes de declarar ela, porque o motor do JavaScript eleva todas as funções para o topo
function falaOi() {
    console.log('Oie');
}

/********************************************************** */
// First-class objects (Objetos de primeira classe) = podemos tratar uma função como um dado
//Function expression = A variável receber uma função e se tornar uma função
const souUmDado = function () {
console.log('sou um dado')
}
souUmDado();

//************************************************** */
//Essa função recebe outra função e a executa
function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo');
    funcao()
}
executaFuncao(souUmDado)

//Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

//Funcao d entro de um objeto
const obj = {
    falar: function () {
        console.log('Estou falando...');
    }
};
obj.falar();
