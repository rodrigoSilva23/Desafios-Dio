/*
Desafio
Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre quantos valores informados são pares, quantos valores informados são ímpares, quantos valores informados são positivos e quantos valores informados são negativos.

Entrada
Você receberá 5 valores inteiros.

Saída
Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por linha e não esquecendo o final de linha após cada uma.

*/

let valores = Array(4)
valores[0] = gets()
valores[1] = gets()
valores[2] = gets()
valores[3] = gets()
valores[4] = gets()

pares =  valores.filter(value => value %2 == 0)
impar =  valores.filter(value => value %2 != 0)
positivos = valores.filter(value => value > 0)
negativos = valores.filter(value => value < 0)

  

  
console.log(pares.length + " valor(es) par(es)")  
console.log(impar.length + " valor(es) impar(es)")
console.log(positivos.length + " valor(es) positivo(s)")
console.log(negativos.length + " valor(es) negativo(s)")
