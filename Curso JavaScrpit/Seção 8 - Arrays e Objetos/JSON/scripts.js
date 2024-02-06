/*
    JSON = JavaScript Onject Notation
    Utilizado para comunicação entre serviços. ex back end <-> Front end
    É basicamente um tipo de dado padronizado, que lembra ojetos do JS

    Sempre seguindo o padrão
    - Só aspas duplas e sem comentários

    JSON.stringify(): Converte JSON para o formato de string
    JSON.parse(): Converte string para JSON
*/

let estudante = {
    "nome": "Artur",
    "idade": 21,
    "curso": "Engenharia de Software",
    "hobies": ["Jogos", "Leitura", "Correr"]
}

console.log(estudante);

console.log(estudante.nome);
console.log(estudante.idade);

let estudanteTexto = JSON.stringify(estudante); //Converte JSON para o formato de string

console.log(estudanteTexto);
console.log(estudanteTexto.curso); //vai dar undefined pq n tem valores por estar como string agr

let estudanteJSON = JSON.parse(estudanteTexto); //Converte string para JSON

console.log(estudanteJSON);
console.log(estudanteJSON.curso);