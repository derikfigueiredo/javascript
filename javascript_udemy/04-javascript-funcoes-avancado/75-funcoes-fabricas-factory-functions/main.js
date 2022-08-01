//Factory function(Função fábrica)
//A Função de fábrica é semelhante às funções de construtor / funções de classe, mas em vez de usar new para criar um objeto, as funções de fábrica simplesmente criam um objeto e o retorna.
//Não requer uso do 'this' para valores internos.

/*
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        fala: function(assunto) {
            return `${this.nome} está ${assunto}.`;
        }, //this refere-se ao objeto criado
        altura: a,
        peso: p,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
console.log(p1.nome);

console.log(p1.fala('falando sobre JS'));
*/
/////////////////////////////////////////////////////////////////////////
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        //getter
        get nomeCompleto() {
            return `${nome} ${sobrenome}`;
            //não precisamos do this ${this.nome}

        },


        fala: function(assunto) {
            return `${this.nome} está ${assunto}.`;
        }, //this refere-se ao objeto criado
        altura: a,
        peso: p,

        //getter //Transformar método em atributo
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
//console.log(p1.fala('falando sobre JS'));

p1.nomeCompleto = 'Luiz Otávio Miranda'
console.log(p1.nomeCompleto); //Acessando método, após definir ele com get, ele "deixa de ser reconhecido como uma função e passa a ser um atributo"
