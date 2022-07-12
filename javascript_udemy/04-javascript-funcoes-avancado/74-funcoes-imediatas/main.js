
//IFF --> Immediately Invoked function expression

//IIFE (Immediately Invoked Function Expression) é uma função em JavaScript que é executada assim que definida.
//IIFE é uma função invocada imediatamente depois de ser declarada

//IIFE COM NOME
(function helloWorld(){
    console.log('Hello, world!');
  }
)();    
//RESULTADO: 
//'Hello, world!'


//IIFE ANÔNIMO
(function(idade, peso, altura) {

    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' '+ sobrenome;
    }
    //console.log(nome); ==> gera erro, pois a variável nome ainda nao foi definida.
    function falaNome() {
        console.log(criaNome('Luiz'));
    };
    
    falaNome();
    console.log(idade, peso, altura)    
    
})(30, 80, 1.80);
//RESULTADO: 
//Luiz Miranda
//30 80 1.8
