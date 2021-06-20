/*Desafio
Crie um programa que leia 6 valores. Você poderá receber valores negativos e/ou positivos como entrada, devendo desconsiderar os valores nulos. Em seguida, apresente a quantidade de valores positivos digitados.

Entrada
Você receberá seis valores, negativos e/ou positivos.

Saída
Exiba uma mensagem dizendo quantos valores positivos foram lidos assim como é exibido abaixo no exemplo de saída. Não esqueça da mensagem "valores positivos" ao final. 
*/


valores= Array(6)


 valores[0] = gets()
 valores[1] = gets()
 valores[2] = gets()
 valores[3] = gets()
 valores[4] = gets()
 valores[5] = gets()

 

positivos = valores.filter(value => value > 0)
  
    console.log(positivos.length + " valores positivos")
