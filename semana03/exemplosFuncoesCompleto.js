//Alguns exemplos de funções básicas em JavaScript:

// 1. Função para Somar Dois Números:
// Uma função que aceita dois números como argumentos e retorna a soma deles

function somar(a, b) {
  return a + b;
}

// Uso da função
let resultado = somar(5, 3);
console.log(resultado); // Saída: 8


// 2. Função para Verificar se um Número é Par:
// Uma função que verifica se um número é par ou não e retorna verdadeiro ou falso.

function verificarPar(numero) {
  return numero % 2 === 0;
}

// Uso da função
let ehPar = verificarPar(4);
console.log(ehPar); // Saída: true

ehPar = verificarPar(7);
console.log(ehPar); // Saída: false



// 3. Função para Calcular a Média de uma Lista de Números:
// Uma função que calcula a média de uma lista de números.

function calcularMedia(numeros) {
  let soma = 0;
  for (let numero of numeros) {
    soma += numero;
  }
  return soma / numeros.length;
}

// Uso da função
let listaDeNumeros = [10, 20, 30, 40, 50];
let media = calcularMedia(listaDeNumeros);
console.log(media); // Saída: 30




// 4. Função para Converter Graus Celsius para Fahrenheit:
// Uma função que converte uma temperatura de graus Celsius para Fahrenheit.

function celsiusParaFahrenheit(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

// Uso da função
let temperaturaCelsius = 30;
let temperaturaFahrenheit = celsiusParaFahrenheit(temperaturaCelsius);
console.log(temperaturaFahrenheit); // Saída: 86




// 5. Função para Verificar se uma Palavra é Palíndromo:
// Uma função que verifica se uma palavra é um palíndromo.

function verificarPalindromo(palavra) {
  let reverse = palavra.split('').reverse().join('');
  return palavra === reverse;
}

// Uso da função
let palavra1 = "arara";
console.log(verificarPalindromo(palavra1)); // Saída: true

let palavra2 = "javascript";
console.log(verificarPalindromo(palavra2)); // Saída: false
ole.log(verificarPalindromo(palavra2)); // Saída: false

//6. Função que imprime números de 1 até um valor escolhido

function contarAte(numero) {
    for (let i = 1; i <= numero; i++) {
        console.log(i);
    }
}
//Uso da função
contarAte(5); 


// 7. Função que calcula o quadrado de um número (Arrow Function)

const quadrado = (num) => num * num;

console.log(quadrado(4)); // Saída: 16

//8. Remover o último elemento

function removerUltimo(lista) {
    lista.pop();
}

removerUltimo(lista);
console.log(lista); // [1, 2, 3]


// 9. Obter o primeiro elemento

function primeiroElemento(lista) {
    return lista[0];
}

console.log(primeiroElemento(lista)); // 1



