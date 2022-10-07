//UTILIZAMOS MAIS O LAÇO WHILE QUANDO NÃO SABEMOS QUANDO ELA VAI TERMINAR

let i = 0;

const nome = 'Luiz';

while (i < nome.length) {  
    console.log(nome[i]);
    i++;
}

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let min = 1;
let max = 50;
let rand = random(min, max);

while(rand !== 10) {
    rand = random(min, max)
    console.log(rand)
}


//DO WHILE EXECUTA A FUNÇÃO PRIMEIRO DEPOIS CHECA ELA
console.log('DIFERELNA ENTRE DO WHILE E WHILE');
console.log('WHILE');
rand = 10;
while(rand !== 10) {
    rand = random(min, max)
    console.log(rand)
};

console.log('DO WHILE')
do {
    rand = random(min, max);
    console.log(rand)
} while (rand !== 10)

//WHILE NÃO É EXECUTADO, POIS ELE VERIFICA A CONDIÇÃO PRIMEIRO, JÁ O DO WHILE EXECUTA O BLOCO DE CODIGO PRIMEIRO E DEPOIS VERIFICA A CONDIÇÃO
/*
DIFERELNA ENTRE DO WHILE E WHILE
WHILE
DO WHILE
27
19
46
39
15
7
37
1
49
2
22
35
2
20
14
12
48
28
30
36
13
19
5
20
45
48
25
32
31
35
37
16
39
1
11
30
48
28
10
*/
//CUIDADO: SEMPRE ATUALIZE A VARIÁVEL DE CONTROLE NO FINAL, POIS SE ESQUECER PODE CAUSAR UM LAÇO INFINITO