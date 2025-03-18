
function calcularDesconto(preco, desconto){
    return preco*(1- desconto);
}

let preco1 = 340;
let desconto1 = 0.1;
console.log(preco1, desconto1, calcularDesconto(preco1, desconto1));

let preco2 = 340;
let desconto2 = 0.1;
console.log(preco2, desconto2, calcularDesconto(preco2, desconto2));

let preco3 = 340;
let desconto3 = 0.5;
calcularDesconto(preco3, desconto3);

let preco4 = 34;
let desconto4 = 0.4;
calcularDesconto(preco4, desconto4);



let precos = [10,44,66,77];
let descontos = [0.1, 0.5, 0.4, 0.6]
let nomes = ["boneca", "arvore", "carrinho", "casa"];

let i =0;
while(i < precos.length){
    
    console.log(`Produto: ${nomes[i]}`) ;
    console.log("Produto:", nomes[i]) ;

    console.log(`Preco Original: ${precos[i]}`) ;

    let precoFinal = calcularDesconto(precos[i], descontos[i])
    console.log(`Preco Final: ${precoFinal}`) ;
    i++;
}



let produtos = [["boneca",100, 0.1],["arvore",200, 0.3],["carrinho",400, 0.1],["casa",500, 0.9]]

let produtos2 = [{nome: "boneca",valor: 100, desconto: 0.1},{nome: "arvore", valor: 200, desconto: 0.3} ]

for (let i=0; i< produtos2.length; i++){
   console.log(produtos[i][0])
   console.log(produtos2[i].nome)
 }

let teste = {
    produto1: {
        nome: "boneca",
        valor: 100,
        desconto:0.5
    }
    }
console.log(teste.produto1.nome)

let numero = 10
console.log ("Numero:" +  numero + 1 )
console.log ("NumeroV2:", numero + 1 )
console.log (`NumeroV3: ${numero + 1}` )
