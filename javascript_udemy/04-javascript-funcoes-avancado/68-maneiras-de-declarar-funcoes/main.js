//In JavaScript, a function allows you to define a block of code, give it a name and then execute it as many times as you want.

//Function hoisiting
//Hoisting is a JavaScript technique which moves variables and function declarations to the top of their scope before code execution begins. Within a scope no matter where functions or variables are declared, they're moved to the top of their scope
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
//OUTPUT: Vou executar sua função abaixo
//Sou um dado

//Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

//Funcao dentro de um objeto
const obj = {
    falar: function () {
        console.log('Estou falando...');
    }
};
obj.falar();
//OUTPUT: Estou falando...
