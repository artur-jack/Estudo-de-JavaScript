/*
    Métodos para alterar os elementos do HTML:

    insertBefore
    appendChild
    replaceChild
    
*/

//insertBefore

let novoElemento = document.createElement("p");
let texto = document.createTextNode("Texto criado com o insertBefore");

let elementoAlvo = document.querySelector("#titulo-principal");
let elementoPai = document.querySelector("#container");

novoElemento.appendChild(texto);

elementoPai.insertBefore(novoElemento, elementoAlvo); //com isso vai aparecer um paragrafo p antes do h1 'titulo-principal'

//appendChild



//replaceChild

//elementoPai.replaceChild(elementoAlvo, novoElemento);
