function checarNumero(num){

    let number = Number(num); // transforma em um objeto number. Ex se for um string converte para number

    if(Number.isNaN(number)){   //isNaN é um método do objeto Number para verificar se é um número

        console.log("Por favor, passe só números para o programa"); 
    }
    else{
        return number;
    }
}

checarNumero(9);
checarNumero("aviao");