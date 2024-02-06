/*
    Devemos atrelar o evento a um elemento
    Depois inserir um listener e o tipo de evento como argumento
*/

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

function alteraCor(){
    console.log("Clicou em mim!");
    document.querySelector("h1").style.color = 'red';
}

btn1.addEventListener("click", alteraCor);

btn2.addEventListener("click", () =>{
    document.querySelector("h1").style.color = 'black'
    btn1.removeEventListener("click", alteraCor);
});