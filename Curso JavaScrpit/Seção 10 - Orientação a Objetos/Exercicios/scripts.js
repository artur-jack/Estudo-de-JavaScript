// EXERCÍCIO 1

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

// EXERCÍCIO 2

class Livro {
    constructor(titulo, autor) {
      this.titulo = titulo;
      this.autor = autor;
      this.disponivel = true;
    }
  
    emprestar() {
      if (this.disponivel) {
        this.disponivel = false;
        console.log(`Livro "${this.titulo}" emprestado com sucesso.`);
      } else {
        console.log(`O livro "${this.titulo}" não está disponível para empréstimo.`);
      }
    }
  
    devolver() {
      if (!this.disponivel) {
        this.disponivel = true;
        console.log(`Livro "${this.titulo}" devolvido com sucesso.`);
      } else {
        console.log(`O livro "${this.titulo}" já está disponível.`);
      }
    }
  
    consultarDisponibilidade() {
      return this.disponivel ? "Disponível" : "Indisponível";
    }
  }
  
  // Exemplo de uso:
  const meuLivro = new Livro('Dom Quixote', 'Miguel de Cervantes');
  
  console.log(`Disponibilidade inicial: ${meuLivro.consultarDisponibilidade()}`);
  meuLivro.emprestar();
  console.log(`Disponibilidade após empréstimo: ${meuLivro.consultarDisponibilidade()}`);
  meuLivro.devolver();
  console.log(`Disponibilidade após devolução: ${meuLivro.consultarDisponibilidade()}`);
  