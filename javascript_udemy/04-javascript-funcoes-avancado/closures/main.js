//72 - Closures:
// 

function retornaFuncao() {
    const nome = 'Dérik';
    return function() {
        return nome;
        //Essa função tem acesso ao scopo dela, da mãe dela e do escopo global
        //Closure é a habilidade da função acessar seu escopo léxico
    }
}
let funcao = retornaFuncao();
console.log(funcao);
//Resultado: ƒ () {return nome;}



//IFF --> Immediately Invoked function expression

//IIFE (Immediately Invoked Function Expression) é uma função em JavaScript que é executada assim que definida.
/*(function(idade, peso, altura) {

    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' '+sobrenome;
    }
    console.log(nome);
    function falaNome() {
        console.log(criaNome('Luiz'));
    }
    falaNome(30, 80, 1.80);
    console.log(30, 80, 1.888)
    
    const nome = 'Qualquer coisa';
    
    
})();*/
//Para executar uma função sem triscar no escopo global criamos uma função anonima. Ela é declarada dentro de parentes para a proteger e executada imediatamente com () ao lado dela.



// function retornaFuncao() {
//     const nome = "Luiz";
//     return function () {
//         return nome;
//     }
// }

// const funcao = retornaFuncao()