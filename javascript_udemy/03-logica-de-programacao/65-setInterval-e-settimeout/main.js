//The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

//This method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling clearInterval().

//setTimeOut - executar uma vez só um comando depois de uminterva

//The setTimeout() method calls a function after a number of milliseconds.


function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}
//setInterval(function, milliseconds);
const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 3000);

setTimeout(function() {
    console.log('Olá mundo!');
}, 5000);

//OUTPUT:
// 18:49:51
// 18:49:52
// Olá mundo!