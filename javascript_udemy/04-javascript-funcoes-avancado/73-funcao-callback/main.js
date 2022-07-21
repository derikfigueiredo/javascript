//                73 - FUNÇÃO CALLBACK

//Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

//Note, no entanto, que callbacks são normalmente utilizados para continuar a execução do código após uma operação asynchronous ser terminada — essas são chamadas asynchronous callbacks.


function rand(min = 1000, max = 3000) {
    let num = Math.random() * (max - min) + min;
    return Math.floor(num);
};

function f1(callback) {
    setTimeout(()=> {
    console.log('F1')
    if(callback) callback();
    }, rand())
};

function f2(callback) {
    setTimeout(()=> {
    console.log('F2')
    if(callback) callback();
    }, rand())
};

function f3(callback) {
    setTimeout(()=> {
    console.log('F3')
    if(callback) callback(); //errado: if(callback) return callback; 
   }, rand())
};

function ola(callback) {
    console.log('Olá, mundo');
    if(callback) callback();
};
/*
ola(()=>{
    f1(()=>{
        f2(()=>{
            f3();
        })
    });
})*/
//OUTPUT: 
// Olá, mundo
// F1
// F2
// F3


//UM CÓDIGO MAIS LIMPO
f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3();
}
