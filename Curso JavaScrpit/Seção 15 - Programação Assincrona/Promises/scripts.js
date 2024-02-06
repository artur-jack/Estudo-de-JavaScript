/*
    Promises podem produzi um valor em algum momento no código.

    Promise é o objeto das promises, .resolve é o método que resolve uma promise
    e o then é o que faz ela poder ser executada.
*/

let p = Promise.resolve(5);

console.log("Outros códigos");

console.log(p);

p.then((value) => {console.log(`O valor é ${value}`)});