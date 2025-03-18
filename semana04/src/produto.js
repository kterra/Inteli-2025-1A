class Produto{
    constructor(id1, nome1){
        this.id = id1;
        this.nome = nome1;
    }

    verModelo(){
        console.log(this.nome);
    }
}

var sacoDeArroz = new Produto(100, "Arroz Tio João");
sacoDeArroz.verModelo()
console.log(sacoDeArroz.id)