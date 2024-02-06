let y = 10;

function imprimir(){
    let y = 150;
    console.log(y);
}

imprimir();

console.log(y);

let x = 15;

if(x>5){
    let x = 20;
    x++;
    console.log(x);
}

console.log(x);

/* pode se ter vários escopos. Onde se vc declara uma variavel no arquivo e declara de novo 
   a mesma variavel em uma função ou em um if eles ficam em escopos diferentes */