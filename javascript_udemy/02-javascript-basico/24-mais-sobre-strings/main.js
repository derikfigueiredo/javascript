//                            24 - STRINGS


let umaString = 'Um "texto"';
console.log(umaString);
//OUTPUT: Um "texto"



let umaString2 = 'Um \'texto\'';
console.log(umaString2);
//OUTPUT: Um 'texto'



let umaString3 = 'Um \string';
console.log(umaString3);
//OUTPUT: Um string 
umaString3 = 'Um \\String';
console.log(umaString3);
//OUTPUT: Um \String


//SE DIGITAR UMA POSIÇÃO QUE SAI DO ÍNDICE, É RETORNADO NADA
console.log(umaString3.charAt(10));
//OUTPUT: 


console.log(umaString.concat(' ', 'em', ' ', 'um'));
console.log(umaString + 'em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);
//OUTPUT: 
// Um "texto" em um
// Um "texto"em um lindo dia.
// Um "texto" em um lindo dia.

///                    INDEXOF
// indexOf serve para procurar o indice de um elemento que procuramos
//se a letra for maiúscula, ele irá procurar ela maiúscula
// Se achar o elemento, o seu indice é retornada. caso ao contrário, -1 é retornado.

console.log(umaString.indexOf('t'));
//OUTPUT: 4
console.log(umaString.indexOf('T'));
//OUTPUT: -1

// U existe no indice 0?
console.log(umaString.indexOf('U', 0));
console.log(umaString.indexOf('U', 3));
//OUTPUT: 0
// -1


//            LASTINDEXOF

//  Começa de trás pra frente, ao contrário de indexOF
console.log(umaString.lastIndexOf('m', 1))




console.log(umaString.match(/[a-z]/g));
//[ 'm', 't', 'e', 'x', 't', 'o' ]

console.log(umaString.match(/[a-z]/));
//[ 'm', index: 1, input: 'Um "texto"', groups: undefined ]


//              REPLACE
//The replace() method searches a string for a value or a regular expression.
//The replace() method returns a new string with the value(s) replaced.
//The replace() method does not change the original string.

console.log(umaString.replace('Um', 'Outra'));
//console.log(umaString.replace(/Um/, 'Outra'))
//Outra "texto"



let umaString4 = "O rato roeu a roupa do rei de roma";


// length retorna o tamanho da string
console.log(umaString4.length);
//OUTPUT: 34

console.log(umaString4.slice(2, 6));
//OUTPUT: rato


console.log(umaString4.split(' '));
//OUTPUT: [
//     'O',     'rato',
//     'roeu',  'a',
//     'roupa', 'do',
//     'rei',   'de',
//     'roma'
//   ]