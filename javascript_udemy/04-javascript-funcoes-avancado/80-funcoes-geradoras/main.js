//Funções geradoras

//REGULAR FUNCTION
//In JavaScript, a regular function is executed based on the run-to-completion model. It cannot pause midway and then continues from where it paused. For example:
console.log("************************ FUNÇÃO REGULAR **************************** ")
function foo() {
    console.log('I');
    console.log('cannot');
    console.log('pause');
}

foo();

console.log("*********************** FUNÇÃO GERADORA ************************")
//FUNCTION GENERATOR
//A generator can pause midway and then continues from where it paused. For example:
function* geradora1() {
    //Código qualquer
    yield 'Valor 1';

    yield 'Valor 2';

    yield 'Valor 3';
}

const g1 = geradora1();

//console.log(g1);
//OUTPUT: Object [Generator] {} //Ou seja, não é uma função normal. é um gerador

//The following calls the next() method on the Generator object:
console.log(g1.next());
//OUTPUT: { value: 'Valor 1', done: false } //Aqui tenho o valor e a chave done informa se o gerador terminou, para executar o segundo yield devemos executar a função novamente.
console.log(g1.next().value); //valor 2
console.log(g1.next().done); //false
console.log(g1.next()); //{ value: undefined, done: true }



console.log("****************** GERADOR COM FOR *************************")
//GENERATOR COM FOR
let g2 = geradora1();;
for(let valor of g2) {
    console.log(valor);
}



console.log("************FUNÇÃO GERADORA INFINITA***********")
//Posso executar uma função várias vezes que seu done sempre será true até gerar um erro
function* geradora3() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}
const g3 = geradora3();
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
/* OUTPUT: 
0
1
2
3
*/



console.log("************FUNÇÃO GERADORA QUE DELEGA TAREFA PARA OUTRO GERADOR***********")
function* geradora4() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora5() {
    yield* geradora4(); 
    yield 3;
    yield 4;
    yield 5;
}

const g5 = geradora5();
for(let valor of g5) {
    console.log(valor);
}
//OUTPUT: 
//0
// 1
// 2
// 3
// 4
// 5

