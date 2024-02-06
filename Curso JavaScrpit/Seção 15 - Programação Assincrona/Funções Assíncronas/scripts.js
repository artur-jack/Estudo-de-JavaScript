/*
    Podemos criar funções assíncronas com a palavra reservada async.
    Onde elas retornam uma promise. Onde se retornas alog a promessa é resolvida, se não, a promessa é rejeitada.
*/

async function somar(a,b){
    return a + b;
}

console.log(somar(2,4));

somar(2,4).then(value => console.log(value));