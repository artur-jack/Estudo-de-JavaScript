/*
    Devemos atrelar o evento a um elemento
    Depois inserir um listener e o tipo de evento como argumento
*/

let btn = document.querySelector("button");

btn.addEventListener("click", () =>{
    console.log("Clicou em mim!");
    document.querySelector("h1").style.color = 'red'
});