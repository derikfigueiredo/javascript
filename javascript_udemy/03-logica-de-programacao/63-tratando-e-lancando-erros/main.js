//The throw statement throws a user-defined exception. Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.

function soma(x, y) {
    if (
        typeof x !== 'number' ||
        typeof y !== 'number'
    ) {
        //throw('x e y precisam ser números.');
        //ou throw new =>( It captures several properties of the place where the error happened)
        throw new TypeError('x e y precisam ser números')
    }

    return x + y; //essa linha só vai ser executada se o throw não for executado
}

// console.log(soma(1,2));
// console.log(soma('1', 2));
// OUTPUT:
/*
3

c:\Users\Derik\Desktop\JavaScript\javascript_udemy\03-logica-de-programacao\63-tratando-e-lancando-erros\main.js:8
throw('x e y precisam ser números.');
*/

try {
    console.log(soma(1,2));
console.log(soma('1', 2));
} catch(error) {
    console.log(error)
}

//OUTPUT COM THROW: 
//3
//x e y precisam ser números.

//OUTPUT COM THROW NEW:
/*
3
TypeError: x e y precisam ser números
    at soma (c:\Users\Derik\Desktop\JavaScript\javascript_udemy\03-logica-de-programacao\63-tratando-e-lancando-erros\main.js:10:15)
    at Object.<anonymous> (c:\Users\Derik\Desktop\JavaScript\javascript_udemy\03-logica-de-programacao\63-tratando-e-lancando-erros\main.js:28:13)    at Module._compile (node:internal/modules/cjs/loader:1105:14)        
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)   
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47
*/

