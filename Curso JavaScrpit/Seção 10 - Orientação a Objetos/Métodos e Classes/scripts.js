let cachorroo = {
    raca: 'SRF',
    patas: 4,
    latir: function(){
        console.log("Au Auu");
    },
    rosnar: function(){
        console.log("grrrr");
    },
    setRaca: function(raca){
        this.raca = raca;
    }
}

console.log(cachorroo.raca);

let pastorAlemao = Object.create(cachorroo);

pastorAlemao.raca = "Pastor Alemão";
pastorAlemao.latir();
console.log(cachorroo.raca);
console.log(pastorAlemao.raca);


// Instanciando classes por meio de função

function criaCachorro(raca, patas, cor){
    let cachorro = Object.create({}); //cria um objeto vazio e em baixo seta os dados
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    return cachorro;
}

let doberman = criaCachorro('Doberman', 4, 'preta');
console.log(doberman);

// Instanciando classes com New

function Cachorro(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

let husky = new Cachorro('Husky', 4, 'cinza');

console.log(husky);

Cachorro.prototype.uivar = function (){ //atrela o método ao prototype(pai) dele, deixando mais organizado (separado das propriedades)
    console.log("Auuuuuuuuuuu");
}

class Conta {
    constructor(saldo){
        this.saldo = saldo;
    }

    deposito(valor){
        this.saldo += valor;
    }

    saque(valor){
        this.saldo -= valor;
    }
}

let conta = new Conta(1000);

conta.deposito(1000);

console.log(conta.saldo);

conta.saque(500);

console.log(conta.saldo);

// EXERCÍCIO

class ContaBancaria{
    constructor(numeroConta,saldo){
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }
    
    depositar(valor){
        this.saldo += valor;
    }

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            
        }
        else{
            console.log('saldo é insuficiente');
        }
    }
    
    consultarSaldo(){
        return(this.saldo);
    }
}