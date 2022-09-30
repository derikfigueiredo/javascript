//Função Date é um função construtora
//Toda função construtora tem a palavra new e o nome começa com letra maiúscula

// const data = new Date(0); // 01/01/1970
// console.log(data.toString()) //Convertendo data
 
const data = new Date();
console.log(data);
//OUTPUT: 2022-09-29T22:46:17.604Z
console.log(data.toString()) //Convertendo para uma string gringa
//OUTPUT: Thu Sep 29 2022 19:46:17 GMT-0300 (Horário Padrão de Brasília)

//OUTPUT NO NAVEGADOR:
//Thu Sep 29 2022 19:47:02 GMT-0300 (Horário Padrão de Brasília)
//Thu Sep 29 2022 19:47:02 GMT-0300 (Horário Padrão de Brasília)



//60s * 60s = 1 hora
//1 segundo tem 1000 milisegundos
//multiciplicar por 3 para serem 3 horas convertidas em milisegundos
//const date1 = new Date(0);
//const tresHoras = 60 * 60 * 3 * 1000;
//console.log(date1);




//CRIANDO DATA
const data2 = new Date(2019, 3, 20, 15, 14, 60, 999); //a, m, d, h, M, s, ms 
console.log(data2.toString());
//OUTPUT: Sat Apr 20 2019 15:15:00 GMT-0300 (Horário Padrão de Brasília)


const data3 = new Date('2019-04-20 20:20:59.200 ');
console.log(data3.toString());
//OUTPUT: Sat Apr 20 2019 20:20:59 GMT-0300 (Horário Padrão de Brasília)



console.log('Dia', data3.getDate());
console.log('Mês', data3.getMonth() + 1);
console.log('Ano', data3.getFullYear());
console.log('Hora', data3.getHours());
console.log('Min', data3.getMinutes());
console.log('Seg', data3.getSeconds());
console.log('ms', data3.getMilliseconds());
console.log('Dia semana', data3.getDay());



function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data4) {
    const dia = zeroAEsquerda(data4.getDate());
    const mes = zeroAEsquerda(data4.getMonth() + 1);
    const ano = zeroAEsquerda(data4.getFullYear());
    const hora = zeroAEsquerda(data4.getHours());
    const min = zeroAEsquerda(data4.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data4 = new Date();
const dataBrasil = formataData(data4);
console.log(dataBrasil);
