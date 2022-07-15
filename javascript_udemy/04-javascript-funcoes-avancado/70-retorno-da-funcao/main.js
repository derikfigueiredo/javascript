/*function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo')
console.log(resto);
*/


//                   ESCOPO LÉXICO
function init() {
    var name = "Mozilla";
    function displayName() {
      alert(name);
    }
    displayName();
  }
  init();

// A função init() cria uma variável local chamada name, e depois define uma função chamada displayName(). displayName() é uma função aninhada (um closure) — ela é definida dentro da função init(), e está disponivel apenas dentro do corpo daquela função. Diferente de init(), displayName() não tem variáveis locais próprias, e ao invés disso reusa a variável name declarada na função pai.

//Este é um exemplo de escopo léxico: em JavaScript, o escopo de uma variável é definido por sua localização dentro do código fonte (isto é aparentemente léxico) e funções aninhadas têm acesso às variáveis declaradas em seu escopo externo.



//                        CLOSURE

//Closure é a forma de fazer com que as variáveis dentro de uma função sejam privadas e persistentes.

function makeFunc() {
    var name = "Mozilla";
    function displayName() {
      alert(name);
    }
    return displayName;
  }
  
  var myFunc = makeFunc();
  myFunc();

//A solução para tal problema é que a função myFunc tornou-se uma closure. Uma closure (fechamento) trata-se de um tipo especial de objeto que combina duas coisas: a função e o ambiente onde a função foi criada. Este ambiente consiste de quaisquer variáveis que estavam no escopo naquele momento em que a função foi criada. Neste caso, myFunc é a closure que incorpora tanto a função displayName quanto a palavra Mozilla que existia quando a closure foi criada.