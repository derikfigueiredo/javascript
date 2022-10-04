function retornaHora(data) {
  if(data && !(data instanceof Date)) {
    throw new TypeError('Esperando instância de Date')
  }

  if(!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute:'2-digit',
    second: '2-digit',
    hour12: false
  });
}

try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora();
    const hora2 = retornaHora(data)
    const hora3 = retornaHora(11)
    console.log(hora);
    console.log(hora2);
    console.log(hora3)
} catch(e) {
    //Tratar erro
} finally {
    //finally é a parte que sempre será executada
    console.log('Tenha um bom dia');
}

//OUTPUT CASO NÃO HAJA ERRO 
/*20:57:20
12:58:12
Tenha um bom dia
*/

//OUTPUT AO COLOCAR retornaHora(11), o qual o valor não é uma instancia de Date
//Tenha um bom dia


//Caso haja um erro, apenas o que está no finally será mostrado na tela