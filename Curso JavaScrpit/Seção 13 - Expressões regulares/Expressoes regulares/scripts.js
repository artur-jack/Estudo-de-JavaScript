/*
    Expressões regulares são um tipo de objeto no JS. Ajuda a verificar padrões.
    Podemos instancia-la com new RegExp()

    \d : aceita qualquer digito
    + : aceita qualquer comprimento
    (|) : aceita as opções dentro dos parenteses separados pela barra reta
*/

let reg1 = new RegExp('teste');

//Exercícios

console.log("Exercício 1:"); //Aceita só letras maiúsculas

const validarMaiuscula = /[A-Z]/;

console.log(validarMaiuscula.test("testando"));
console.log(validarMaiuscula.test("123"));
console.log(validarMaiuscula.test("TESTE"));

console.log("Exercício 2:"); //Aceita strings terminadas com ID

const validarId = /\d+ID\b/;

console.log(validarId.test("345267ID"));
console.log(validarId.test("34526789"));
console.log(validarId.test("ID"));

console.log("Exercício 3:"); //Aceita somente variação de 4 marcas (utiliza o choice pattern)

const validaMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validaMarca.test("Marca: Nike"));
console.log(validaMarca.test("Marca: Umbro"));
console.log(validaMarca.test("Marca: Puma"));
console.log(validaMarca.test("Marca: "));
console.log(validaMarca.test("Nike"));