/*
    Métodos:

    trim(): remove tudo que não é string
    padStart(): insere caracteres antes da string (no inicio)
    padEnd(): insere caracteres no final da string
    split(): Divide uma string por um separador e retorna um array
    join(): Junta elementos de um array em uma frase por meio de um separador
    repeat(): Repete uma string de acordo com um parametro number

*/

let meuNome = '          Artur Jackson';
console.log(meuNome);

let nomeCorrigido = meuNome.trim();

console.log(nomeCorrigido);

let milAoContrario = '1';

console.log(milAoContrario.padStart(4, '0'));

let frase = 'O rato roeu a roupa do rei de roma';
console.log(frase);

let palavras = frase.split(' '); //separando pelos espaços
console.log(palavras);

let produtos = "Banana;Maçã;Abacaxi;Bola;Escova";
console.log(produtos);
console.log(produtos.split(";"));

let fraseEmArray = frase.split(' ');
console.log(fraseEmArray);

console.log(fraseEmArray.join(' '));
console.log(fraseEmArray.join('->'));

let word = 'Repetir';
console.log(word.repeat(10));