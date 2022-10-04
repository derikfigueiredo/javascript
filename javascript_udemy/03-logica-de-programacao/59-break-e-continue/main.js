const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let numero of numeros) {
    
    if(numero === 2) {
        console.log("Pulei o número 2");
        //A palavra chave continue termina a atual iteração do laço em que ele se encontra ou de um laço rotulado, e continua a execução deste laço com a próxima iteração.
        //Usamos continue para pular interação
        continue;
    }
    
    console.log(numero);

    if(numero === 7) {
        console.log('7 encontrado, saindo...');
        //O comando break encerra o loop atual ao invés de apenas encerrar a atual interação do loop.
        break;

    }
}
//OUTPUT: 
// 1
// Pulei o número 2
// 3
// 4
// 5
// 6
// 7
// 7 encontrado, saindo...


//O comando break inclui um label opcional que permite ao programa encerrar a execução da estrutura que possui o nome informado na label. O comando break deve estar dentro dessa estrutura informada no label. 


bloco_externo:{

    bloco_interno:{
      console.log ('1');
      break bloco_externo;      // encerra bloco_interno e bloco_externok
      console.log (':-(');    // não é executado
    }
  
    console.log ('2');        // não é executado
  }


//O código a seguir também utiliza o comando break com blocos nomeados mas gera um erro de sintaxe pois o comando break está dentro do bloco_1 mas faz uma referência ao bloco_2.

bloco_1:{
    console.log ('1');
    break bloco_2;            // SyntaxError: label not found
  }
  
  bloco_2:{
    console.log ('2');
  }