//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO

 const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
         rua: 'Av Brasil',
         numero: 320
     }
};

//como não existe nome2, adicionamos um valor padrão (nome2 = '') para a variável não ficar com valor undefined
const { nome, nome2 = '', sobrenome } = pessoa;
console.log(nome, nome2, sobrenome);
//OUTPUT:Luiz  Miranda

//Extrair dados específicos de endereco
const { endereco: {rua: r = 'Rua' , numero, s = 123} } = pessoa; //s = 123; (criamos uma variável r com um valor padrão)
console.log(r, numero, s);
//OUTPUT: Av Brasil 320 123

//Extrair enderenço completo e ainda colocar um novo na chave
const { endereco: moradia } = pessoa;
console.log(moradia);
//OUTPUT: { rua: 'Av Brasil', numero: 320 }

