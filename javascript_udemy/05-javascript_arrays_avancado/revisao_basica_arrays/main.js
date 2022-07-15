let nomes = ['Eduardo', 'Maria', 'Joana'];

 //Apagar elemento e deixar um espaço vazio no lugar dele
delete nomes[2];
console.log(nomes);
//OUTPUT: [ 'Eduardo', 'Maria', <1 empty item> ]

//                     ARRAY LITERAL
const arrayLiteral = new Array('FFF', 'GGG');



//                   VALOR POR REFERÊNCIA
//Valores por referência = tudo que eu fizer em um, efeta outro
const novo = nomes;
//o que eu mudar em na variável novo, altera a variável nomes e vice-versa.

novo.pop();
console.log(nomes);
//OUTPUT: [ 'Eduardo', 'Maria' ]



//             COMO CONSERTAR ESSA QUESTÃO DE REFERÊNCIA?
let nomes2 = ['Eduardo', 'Maria', 'Joana'];
const novo2 = [...nomes2];

let exNomes = nomes2.pop();
console.log(nomes2, exNomes);
//OUTPUT: [ 'Eduardo', 'Maria' ] Joana
console.log(novo2);
//OUTPUT: [ 'Eduardo', 'Maria', 'Joana' ]




//                 LENGTH
console.log(nomes2.length);
//length não é um método e sim um atributo


//              SHIFT
//SHIFT remove do começo
const removidoShift = nomes2.shift();
console.log(nomes2, removidoShift);
//OUTPUT: [ 'Maria' ] Eduardo


//           PUSH 




//https://www.freecodecamp.org/news/manipulating-arrays-in-javascript/