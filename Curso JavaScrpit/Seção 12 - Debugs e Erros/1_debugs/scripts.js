/*
    Bug: é um problema que ocorre no código.
    Debug: ato de corrigir bugs ou a forma que é feita a visualização de valores de variaveis ou fluxo do código.

    Colocar "use strict" no ínicio do arquivo ou em funções ajuda a fazer o código de forma correta 
    sem limitar nada no software ou programa.

    Ex: se vc declarar a variável opa sem o let/const/var não vai aparecer no console. Já se vc tiver colocado "use strict" no começo
    vai aparecer um erro no console indicando q está faltando.

    Outra forma de debug é utilizar a palavra reservada debugger;
    Que para o código ao atingir a linha debbuger.
*/

"use strict"

let opa = 'teste'

let a = 1;
let b = 5;

console.log(b);

if(a == 1){
    a = b + 2;
}

debugger;

for (let i = 0; i < b; i++) {
    a = a + 2;
}

console.log('Chegou no debug');

debugger;

console.log('saiu no debug');

if(a > 10){
    a == 25;
}

console.log(a);
debugger;