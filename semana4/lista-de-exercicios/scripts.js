//Leitura de Código
//1 
//R: Tenho uma função com o nome conversor de moedas que passa pro parâmetro o valor em Dolar, criei uma variável constante para que  o usuário entre com um valor do tipo Number e retorna a Multiplicação desses valores inputados  em R$. Criei uma variável constante meuDinheiro que converte a moeda que está com o valor 100 e imprime o valor 100 convertido em R$;

//2
//R: Tenho uma função investeDinheiro que psssa o parâmetro o tipo de investimento e o valor, depois criei uma variável local chamada valorAposInvestimento e fiz um swith case(escolha caso ) . Para que o usuário ao escolher uma das opções possa retornar para ele o valorAposInvestimento e tenho um default para que caso o usuário não escolha uma das opçoes ele tem o tipo de investemento incorreto.
//Depois criei duas novoMontante e segundoMontante para pegar a chave e o valor da minha função investeDinheiro e imprime com o console.log(novoMontante) e o segundo Montante.

//3
//R: Tenho um array de Números que faz contagem desse array por índices e criei duas variáveis array1 e array2 vazias 
//Crei um for of para percorrer o elemento do meu array numeros que armeza na variável numero. Criei uma condicional para fazer dizer se o número divisível por 2 for igual 0, se true  entra no array1 e adiciona com comando push o numero, caso contrário vai adicionar noa array2. E imprime na com o console.log a quantidade de numeros do meu array1 e do meu array2 e o total.

//4
//R: Tenho um array numeros e duas variaveis Numero1 e Numero2 a Numero1 recebe Infinity e numero2 recebe 0. Criei for of para percorrer  os numeros e guardar dentro da variável numero, depois criei um if para dizer se o numero é menor numero1 que é o Infinity, se true, o numero entra  no numero1, segundo if verifica se o numero é maior que numero2, se true ele entra numero entra no numero2 e daí imprimo com console.log o numero1 e o numero2. (OBS: infinity é uma propriedade global que representa um valor infinito).


/*1
let lista =[1, 3, 5, 10, 12, 144, 1024]

for(let num of lista){
    console.log(num);
}

const booleano1 = true 
const booleano2 = false
const booleano3 = !booleano2
const booleano4 = !booleano3 
//a)booleano1 && booleano2 && !booleano4 / true && false && false = false
//b) (booleano1 && booleano2) || !booleano3 / false || true = true
//c) (booleano2 || booleano3) && (booleano4 || booleano1) / true && true = true
//d) !(booleano2 && booleano3) || !(booleano1 && booleano3) / true || false = true
//e) e) !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3) / false || false = false
*/
//3

const quantidadeDeNumerosPares = 5;
let i = 0
while(i < quantidadeDeNumerosPares) {
  console.log(i*2)
  i++
}
//Não estava funcionando porque a variável constante quantidadeDeNumerosPar estava sem valor(undefined) e enquanto i for menor que a quantidade de números pares ele iria contar e imprimir no console sempre os múltiplos de 2 que é par 5 vezes .

/*
const triangulo = (a, b, c)=>{
  if ((a ===b ) && (a===c)){
      console.log("Equilatero")
  }else if((a === b) || (b === c) || (a===c)) {
      console.log("isósceles")
  }else{
      console.log("Escaleno")
  }
}
triangulo(3,5,2)


/*
let num1 = prompt("Informe o número 1: ")
let num2 = prompt ("Informe o número 2: ")
if(num1 > num2){
  console.log(num1 + "é maior que " + num2)
}else{
    console.log(num1 +" é menor que " +num2)
}
if ( num1 % num2 === 0 ){
    console(num1 + " é divisível por " +num2)
}else{
    console.log(num1 + "não é divísível por" +num2)
}
if (num2 % num1 === 0){
    console.log(num2 + " é divisível por ", num1)
}else{
    console.log(num2 + " não é divisível por" , num1)
}

if(num1 < num2){
    let num3 = num2 - num1
    console.log(`A difença entre eles é  ${num3}`)
}else if(num1 > num2){
    let num3 = num1 - num2
    console.log(`A difença entre eles é  ${num3}`)
}
*/