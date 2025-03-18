//Alguns exemplos de funções básicas em JavaScript:

// 1. Função para Somar Dois Números:
// Uma função que aceita dois números como argumentos e retorna a soma deles


function somaNumeros(num1, num2){
    return num1 + num2;
}

  // Uso da função
somaNumeros(1,2)
let soma = somaNumeros(3,5)
  

  // 2. Função para Verificar se um Número é Par:
  // Uma função que verifica se um número é par ou não e retorna verdadeiro ou falso.

function verificarPar(numero){
    let resultado = false;
    if (numero%2 == 0){
        resultado = true;
    }
    return resultado;
}

function verificarPar2(numero){
    if (numero%2 == 0){
        return true;
    }
    return false;
}
  
  // Uso da função
verificarPar(4);
verificarPar(5);
  
  
  // 3. Função para Calcular a Média de uma Lista de Números:
  // Uma função que calcula a média de uma lista de números.
  
  function calculaMedia(arrayNum){
        let soma = 0;
        for (let i; i< arrayNum.length ; i++){
            soma = soma + arrayNum[i];
        }

        let media = soma/arrayNum.length;
        return media;
  }

  // Uso da função
calculaMedia([1,2,3,4,5])
  
  
  // 4. Função para Converter Graus Celsius para Fahrenheit:
  // Uma função que converte uma temperatura de graus Celsius para Fahrenheit.
  

  
  // Uso da função

  
  // 5. Função para Verificar se uma Palavra é Palíndromo:
  // Uma função que verifica se uma palavra é um palíndromo.
  

  
  // Uso da função

  
  //6. Função que imprime números de 1 até um valor escolhido

  // Uso da função
  
  
  // 7. Função que calcula o quadrado de um número (Arrow Function)

 // Uso da função

  
  //8. Remover o último elemento de um array

 // Uso da função
 
  
  // 9. Obter o primeiro elemento de um array


  // Uso da função

  
  