/*
    Uma das vertentes da prog. Assíncrona é fazer ações q aconteçam depois de um tempo
    por meio de callbacks.

    Callback é uma função q faz uma ação após algum acontecimento no código.
    Podemos realizar um callback com a função setTimeout.
*/

console.log("Olá");

setTimeout(function(){
    console.log('mundo!');
}, 2000); //2000 é o tempo em mili segundo = 2 segundos

console.log("1");
console.log('2');
console.log("3");