/*
Desafios
Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.

Entrada
Você receberá 1 valor inteiro N, onde N > 0.

Saída
Exiba todos os números pares até o valor de entrada, sendo um em cada linha. 


*/ 

let valor = gets()

for (let num =1 ; num <= valor ; num+=1 ) {
  
  if (!(num%2)){
  console.log(num);
  }
}