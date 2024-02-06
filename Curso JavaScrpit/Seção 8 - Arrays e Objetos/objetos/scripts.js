let cachorro = {
    patas: 4,
    nome: 'Shark'
};

console.log(cachorro.patas);
console.log(cachorro.nome);

let pessoa = {
    nome: 'Artur',
    idade: 21,
    curso: 'Engenharia'
};

console.log(pessoa);

console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);

pessoa.casado = false;

console.log(pessoa.casado);

console.log(pessoa);

let carro = {
    portas: 4,
    portamalas: "200 L",
    motor:'2.0'
};

console.log(carro);

let adicionais = {
    tetosolar: true,
    arcondicionado: true
};

Object.assign(carro, adicionais); //carro copia as propriedades do objeto adicionais

console.log(carro);

console.log(Object.keys(carro));