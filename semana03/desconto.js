var produtos = [ {valor: 20, desconto: 0.1}, {valor: 40, desconto: 0.2}, {valor: 60, desconto: 0.3}]

for (var i=0; i< produtos.length; i++){
    let precoFinal =  calcularDesconto( produtos[i].valor, produtos[i].desconto)
    console.log(precoFinal)
 }

var precos = [20, 40, 60]
var descontos = [ 0.1, 0.2, 0.3]

//console.log(produtos[1].valor)

function calcularDesconto(preco, desconto){
    return preco*(1- desconto);
}

console.log(calcularDesconto(10, 0.5))

for (var i=0; i< precos.length; i++){
   let precoFinal =  calcularDesconto(precos[i], descontos[i])
   console.log(precoFinal)
}

let valor = 60
let desconto = 0.25
let resultado = calcularDesconto(valor, desconto)
console.log (`Preço: ${resultado}`)