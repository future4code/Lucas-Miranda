//Exerciocio1 
const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

//Não passou no teste.
//Passou no teste.
//typeof(numero)
//"number"


//Exercicio2
let fruta = prompt("Escolha uma fruta")
let preco


switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5 //SEM O BREAK
  default:
    preco = 5
    break;
}

console.log("O preço da fruta ", fruta, " é ", "R$ ", preco);

//a. O código switch case serve para que o usuário escolha uma fruta pelo comando de entrada prompt e verifica seu preço dentro da case. Mostrando no final pelo comando de saída o preço concatenado. 
//b. O preço da fruta  Maçã  é  R$  2.25
//c. O preço total das frutas R$: 14.55
//d. O preço da fruta  Pêra  é  R$  5


//Exercício3
const numero1 = prompt("Digite o primeiro número.");
const numero2 = prompt("Digite o próximo número?");

if(numero1 > 0 && numero2 > 0) {

  if(numero1 > numero2) {
    let mensagem;
    mensagem = "Número 1 é maior que o 2!";
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!";
  }
}

console.log(mensagem);
//Uncaught ReferenceError: mensagem is not defined
// Erro de Referência, a mensagem não está definida
// A mensagem vai ser executada se eu criar a variável dentro do escopo local do if filho. Se eu colocar dentro let mensagem do if filho ele executa. Número 1 é menor ou igual ao 2!

//Exercício 4
//a
number1 = prompt("Informe o primeiro número: ");
number2 = prompt("Informe o segundo número: ");

if (number2 > number1){
    console.log(number2);
}
if (number1 < number2){
    console.log(number1);
}else
    if(number1 === number2){
        console.log(number1);
        console.log(number2);
        console.log('são iguais!')
} 
//8 7
//8 8
//index.js:80 são iguais!

//b
number1 = prompt("Informe o primeiro número: ");
number2 = prompt("Informe o segundo  número: ");
number3 = prompt("Informe o terceiro  número: ");

let aux = number1;

if(number2 > number1){
    aux = number2;
    number2 = number1;
    number1 = aux;
}
if(number3 > number1){
    aux = number3;
    number3 = number1;
    number1 = aux;
}
if(number3 > number2){
    aux = number3;
    number3 = number2;
    number2 = aux;
}
else if( number1 === number2 && number3 === number1){
    console.log(number1+"-"+number2+"-"+number3);
    console.log("São iguais!!!");
}
console.log(number1+"-"+number2+"-"+number3);

//9-8-7
//7-7-7
//index.js:111 São iguais!!!

//c
number1 = prompt("Informe o primeiro número: ");
number2 = prompt("Informe o segundo  número: ");
number3 = prompt("Informe o terceiro  número: ");

let aux = number1;

if(number2 > number1){
    aux = number2;
    number2 = number1;
    number1 = aux;
}
if(number3 > number1){
    aux = number3;
    number3 = number1;
    number1 = aux;
}
if(number3 > number2){
    aux = number3;
    number3 = number2;
    number2 = aux;
}
else if((number1 === number2) && (number3 === number1 )){
    console.log("Porfavor, digite algum número diferente!!!");
}
console.log(number1+"-"+number2+"-"+number3);
//Porfavor, digite algum número diferente!!!
//index.js:143 8-8-8
//8-8-7

//4.
//a
https://drive.google.com/file/d/1x2DUz7RR70UXxYO-XHdRfjUIx9mVUryn/view?usp=sharing

//b

let animal = prompt("Informe um animal vertebrado ou Invertebrado: ");
let mamifero = prompt("Informe a espécie: ");
let esqueleto;

esqueleto = prompt("possuem esqueleto? ");

if(esqueleto === "S"){
    console.log("Vertebrado!");
}
if(esqueleto === "N"){
    console.log("Invertebrado");
}
console.log("Mamífero: " + mamifero + " - "  + "Animal: " + animal + " - " + "Esqueleto: " +esqueleto );

//Vertebrado!
//index.js:168 Mamífero: águia - Animal: Ave - Esqueleto: S

  