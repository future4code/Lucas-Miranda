//1.
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)
//Não detectado SyntaxError: o identificador 'resultado' já foi declarado
// Uncaught SyntaxError: the identifier 'result' has already been declared

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)
//true || false = true
//true && false = false
// output: b. false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
//true || true = true
//output: c. true

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)
//(true && (false || false)) && true
//output: d. false

console.log("e. ", typeof resultado)
//output: e. boolean

/*=============================================================================== */

let array
console.log('I. ', array)
//output: I. undefined (Não definido nenhum valor para variável array)

array = null
console.log('II. ', array)
//output: II. null (Há falta de um valor para variável declarada array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)
//output: III. 11 (tamanho de elementos dentro do array )

let i = 0
console.log('IV. ', array[i], " e ", array[i+1])
///output: IV. 3 e 4 (pega o primeiro valor do indice que é 3 e soma +  1  )

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)
//output: V. 19 e 9 (pega o primeiro valor do índice que vai ser 19, depois pega o segundo valor somado  dentro do índice que é 9 )

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])
//output: VI.  3 (faz o cálculo dentro dos índices do array que vai ser a posição 0 e mostra o valor do array que é 3 ) 

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC)
//Uncaught SyntaxError: Identifier 'resultadoC' has already been declared
//Não detectado SyntaxError: o identificador 'resultado' já foi declarado
/*=====================================================================================*/

//a. O que é `array` e como se declara em `JS`?
// R: Array em javascript são conjuntos de informações que são acessados através de um índice

//b. Qual o index inicial de um `array`?
       // R: 0

//c. Como se determinar o tamanho do `array`?
    //   R: através da propriedade length

//d. Indique todas as mensagens impressas no console.
   //R: //a.  false
        //b.  false
        //c.  true
        //d.  false
        //e.  boolean
        //I.  undefined
        //II.  null
        //III.  11
        //IV.  3  e  4
        //V.  19  e  9
        //VI.  3
        //VII.  1         
  

//2

//a
let kelvin;
let GRAUS_FAHRENHEIT = prompt('Qual a temperatura em Fahrenheit: ');
kelvin = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15;
console.log("A temperatura de Fahrenheit para Kelvin é ", kelvin, " °K")

//A temperatura de Fahrenheit para Kelvin é  298.15  °K

//b.
let GRAUS_CELSIUS = prompt('Qual a temperatura  em graus celsius: ');
let GRAUS_FAHRENHEIT;

GRAUS_FAHRENHEIT = (GRAUS_CELSIUS*9/5) + 32;
console.log("A temperatura de Celsius para Fahrenheit é ", GRAUS_FAHRENHEIT, "°F")

//A temperatura de Celsius para Fahrenheit é  176 °F */


//c.
let GRAUS_CELSIUS = prompt('Qual o valor em graus celsius: ');
let GRAUS_FAHRENHEIT = (GRAUS_CELSIUS - 32)*5/9 + 273.15;
let GRAUS_KELVIN = (GRAUS_CELSIUS*9/5) + 32;
console.log("A temperatura em Graus celsius para Farenheit: ", GRAUS_FAHRENHEIT, " °F ")
console.log("A temperatura em Graus celsius para kelvin : ", GRAUS_KELVIN, " °K ")

//A temperatura em Graus celsius para Farenheit:  272.0388888888889  °F 
//A temperatura em Graus celsius para Kelvin:  86  °K 



//d.
let converterGraus = prompt("Informe o valor em graus celsius: ")
let valConvert = Number(converterGraus);

let GRAUS_KELVIN = (valConvert - 32) * 5/ 9 + 273.15;
let GRAUS_FAHRENHEIT = (valConvert) * 9 /5  + 32;

console.log("O valor convertido em Graus Celsius para Fahrenheit " + GRAUS_FAHRENHEIT + " e o valor convertido em kelvin " + GRAUS_KELVIN);

//O valor convertido em Graus Celsius para Fahrenheit 86 e o valor convertido em kelvin 272.0388888888889


let nome = prompt("Qual seu nome? ");
console.log(nome);
let sobrenome = prompt("Qual seu sobrenome? ");
console.log(sobrenome);
let idade = prompt("Qual sua idade? ");
console.log(idade);
let cor_favorita = prompt("Qual sua cor favorita? ")
console.log(cor_favorita);
let endereço = prompt("Aonde você mora? ")
console.log(endereço);

/*Lucas
index.js:136 Alencar 
index.js:138 27
index.js:140 verde
index.js:142 Avenida Antônio Lisboa de Amorim 327 Benedito Bentes
*/


//3
let Quilowatt_hora = 0.05;

Quilowatt_hora = prompt("Qual o valor da quilowatt hora? ")
let consumo = prompt("Qual a quantidade de consumo? ")


let totalConsumo = consumo * Quilowatt_hora;
let descontoEnergia = (totalConsumo * 15) /100;

console.log("O total de Consumo em R$: ", totalConsumo);
console.log("O total de consumo com desconto em R$: ", descontoEnergia);

//O total de Consumo em R$:  14
//O total de consumo com desconto em R$:  2.1
