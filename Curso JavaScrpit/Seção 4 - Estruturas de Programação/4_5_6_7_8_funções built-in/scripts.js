/*  Funções Built-in são funções do javascript:

    prompt() = recebe um input do usuário e pode guardar esse valor - É um função pouco utilizada onde aparece um alerta na tela com um input
    alert() = alerta no meio da tela.
    Math.x() = biblioteca de funções matemáticas. EX: Math.pow(base,expoente) exibe a potencia de um número.
    console.log() = famoso print no console.
    */

alert("Teste de alerta");

let idade = prompt("Qual sua idade")
console.log(idade);

let nome = "Artur ";
const sobrenome = "Jackson"; // variavel const significa que o valor é constante (não pode ser alterado).

console.log(`Meu nome é ${nome + sobrenome + ` e tenho ` + idade + ` anos.`}`);