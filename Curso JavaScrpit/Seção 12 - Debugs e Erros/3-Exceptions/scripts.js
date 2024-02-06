/*
    Podemos criar erros no programa, caso alguma condição não seja atendida.
    Abortando o programa e mostrando um mensagem de erro.
*/

function saudacao(nome){
    if(typeof nome != 'string'){
        throw new Error("O parametro nome precisa ser uma string");
    }
    else{
        console.log(`Olá ${nome}.`);
    }
}

saudacao("Artur");
saudacao(5);

console.log("teste");