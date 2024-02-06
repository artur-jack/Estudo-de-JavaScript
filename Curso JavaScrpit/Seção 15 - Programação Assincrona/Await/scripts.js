/*
    Nas async funtions, podemos determinar uma instrução await.
    Que vai esperar uma promise ser resolvida para mostrar os resultados.
*/

function somaComDelay(a,b){
    return new Promise(resolve => {
        setTimeout(function(){
            resolve(a+b);
        }, 4000);
    })
}

async function resSoma(a,b,c){

    let x = somaComDelay(a,b);
    let y = c;

    return await x + y;
}

console.log(resSoma(1,2,3).then(value => console.log(value)));