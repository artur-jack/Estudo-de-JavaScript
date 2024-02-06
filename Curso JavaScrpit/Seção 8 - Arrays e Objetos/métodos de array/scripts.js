/*
    Métodos:

    pop(): remove o ultimo elemento do array
    push(): adiciona um elemnto no final do array
    shift(): remove o primeiro elemento do array
    unshift(): adiciona um ou mais elementos no inicio do array
    indexOf(): encontra o índice de um determinado elemento
    lastIndexOf(): encontra o ultimo indice de um elemento
    slice(): retorna um array a partir de outro array. Ex: x= [2,6,7,8]; x.slice(2,3) vai retornar o 7, pois ele começa do indice 2 e para no 3.
    forEach(): Itera cada elemento do array
    includes(): Verifica se o array tem determinado elemento
    reverse(): inverte um array
    Math.max.apply(null, meuArray): acha o maior valor dentro de uma array

*/

let pessoas = ['Artur', 'Luna', 'José'];

let pessoaRemovida = pessoas.pop();

console.log(pessoaRemovida);
console.log(pessoas);

pessoas.push('Bruna');
pessoas.unshift('Noele', 'Vitor');

console.log(pessoas);

pessoas.shift();

console.log(pessoas);

let numeros = [7,3,4,2,9,12,2];

console.log(numeros.indexOf(2));
console.log(numeros.lastIndexOf(2));

console.log(numeros.slice(3,7));
console.log(numeros.slice(3,numeros.length));
console.log(numeros.slice(3,4));
console.log(numeros.slice(2));

let nomes = ['Bernardo', 'Cleito', 'Maira', 'Artur', 'Luna', 'José'];

nomes.forEach(nome => {      // passo a unidade dos nomes que seria nome (o js já interpreta sozinho)
    console.log('O nome é ' + nome);   
});

console.log(nomes.includes('Sofia'));
console.log(nomes.includes('Luna'));
console.log(nomes.includes("Artur"));

let carros = ["BMW", 'VW', 'Fiat', 'Hyundai'];

console.log(carros);
console.log(carros.reverse());
