//Função construtora: utilizada para servir de molde para a criação de objetos.
//O nome da função construtora deve começar com letra maiúscula
//Para construir objetos  objetos, funções constutoras precisam ser instanciadas pelo operador new. 
//O this dentro delas referencia-se aos objetos 
//A palavra new cria um objeto vazio, faz o this apontar para esse objeto e retorna esse objeto.
//Na função construtora não utiliza vírgula e sim ; 

function Pessoa(nome, sobrenome) {
    const ID = 123456;

    //atributos ou métodos seus privados
    const metodoInterno = function() {

    };

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ": sou um método");
    };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');
p2.metodo();
