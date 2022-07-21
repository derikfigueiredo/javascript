function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    setTimeout(()=>{
        console.log(msg)
    }, tempo)
}

esperaAi('Frase 1', rand())
