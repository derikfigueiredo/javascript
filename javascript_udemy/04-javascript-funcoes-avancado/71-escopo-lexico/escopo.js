//Lexical scope is the ability for a function scope to access variables from the parent scope. We call the child function to be lexically bound by that of the parent function. The diagram below outlines the supposed hierarchy that the lexical scope maintains in JavaScript.

//we can see that, due to lexical scope, the functions may access all variables from their parent scopes up to the global scope, but no scope may access any variables from the functions defined inside it.
/*
- Scope means area, space, or region.
- Global scope means global space or a public space.
- Local scope means a local region or a restricted region.
*/

const nome = 'Luiz';

function falaNome() {
    const nome = 'Otávio';
    console.log(nome);
}

function usaFalaNome() {
    falaNome()
}
usaFalaNome();