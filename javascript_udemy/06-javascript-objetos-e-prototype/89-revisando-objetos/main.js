//                          89. Revisando Objetos

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
//FORMAS DE ACESSAR OS OBJETOS

// 01.notação de ponto
console.log(pessoa.nome);
console.log(pessoa.sobrenome);

//02.notação de colchetes
console.log(pessoa['nome']);
console.log(pessoa['sobrenome']);


console.log('EXEMPLO DE ALTERAÇÃO DE CHAVE DO OBEJTO');
const chave = 'nome';
console.log(pessoa[chave]);
// é a mesma coisa que 
console.log(pessoa['nome']);

//OUTPUT: 
//Luiz
//Luiz


//CONSTRUINDO OBJETOS COM O CONSTRUTOR AO INVÉS DE SER LITERAL IGUAL O ANTERIOR
console.log('****CONSTRUINDO OBJETO POR MEIO DO CONSTRUTOR***')
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Figueiredo';
pessoa1.idade = 20;

console.log(pessoa1);

//OUTPUT: 
//****CONSTRUINDO OBJETO POR MEIO DO CONSTRUTOR***
//{ nome: 'Luiz', sobrenome: 'Figueiredo' }



//DELETAR UMA CHAVE DO OBJETO
console.log('****Deletando chaves do objeto****')
delete pessoa1.nome;
console.log(pessoa1);
//OUTPUT: ****Deletando chaves do objeto****
// { sobrenome: 'Figueiredo' }




//MÉTODOS SÃO FUNÇÕES DENTRO DO OBJETO
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
console.log('IDADE:'+pessoa1.getDataNascimento());
//OUTPUT: IDADE:2002



//UTILIZANDO FOR IN EM OBJETOS
//ACESSAR CHAVES
for (let chave in pessoa1) {
    console.log(chave);
}
//OUTPUT:
// sobrenome
// idade
// getDataNascimento


//ACESSAR O VALORES DE OBJETOS COM FOR IN
for(let chave in pessoa1) {
    console.log(pessoa1[chave]);
}
//OUTPUT:
// Figueiredo
// 20
// [Function (anonymous)]





//FUNÇÃO CONSTRUTORA
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// {} <- this -> this
const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Maria', 'Miranda');
console.log(p1);
console.log(p2);
//OUTPUT:
// Pessoa { nome: 'Luiz', sobrenome: 'Miranda' }
// Pessoa { nome: 'Maria', sobrenome: 'Miranda' }

//OBJECT.FREEZE()
//O método Object.freeze() congela um objeto: isto é, impede que novas propriedades sejam adicionadas a ele; impede que as propriedades existentes sejam removidas;     
//free
Object.freeze(p1);
p1.nome = 'Outra coisa';
p1.nome = 'carlos';
console.log(p1);
//OUTPUT 
//Pessoa { nome: 'Luiz', sobrenome: 'Miranda' 

function Pessoa2(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    Object.freeze(this);
}
//TODO OBJETO CRIADO POR MEIO DESSA FUNÇÃO CONSTRUTORA NÃO PODERÁ SER ALTERADO

const b1 = new Pessoa2('Luiz', 30);
console.log(b1);
//OUTPUT: Pessoa { nome: 'Luiz', sobrenome: 30 }
delete b1.nome;
console.log(b1)
//OUTPUT: Pessoa2 { nome: 'Luiz', idade: 30 }





