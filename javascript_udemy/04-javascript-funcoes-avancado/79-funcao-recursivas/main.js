//A recursive function is a function that calls itself until it doesn't.
//This technique is called recursion
//Recursividade tem limites, funções recursivas tem um limite para serem executadas
//Muita recursivdade leva a um erro no código
function recursiva(max) {
    if(max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(-10);

//A recursive function always has a condition to stop calling itself. Otherwise, it will call itself indefinitely. So a recursive function typically looks like the following:
function recurse() {
    if(condition) {
        // stop calling itself
        //...
    } else {
        recurse();
    }
}


//https://www.javascripttutorial.net/javascript-recursive-function/

