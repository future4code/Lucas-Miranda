
let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
}
console.log(sum)
//Cria uma variável chamada sum que quer dizer soma iniciando com 0, depois um laço for que faz a contagem de 0 a 14.
//Despois faz o cálculo da soma com a contador i totalizando 105.*/

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 4
for(const item of lista) {
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)
//2
//a. O comando push serve para adicionar mais um novo item  no array de lista.
//b. (4) [10, 15, 25, 30]
//0: 10
//1: 15
//2: 25
//3: 30
//length: 4
//__proto__: Array(0)
//c. Seria impresso items no array que são múltiplos de 4 e de 3.
//(6) [12, 15, 18, 21, 27, 30]
//[12]

//3
//a

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
//let maiorNumero = array[0];
//let menorNumero = array[0] ;

for(let numero of array){

    if(numero >= maiorNumero ){
        maiorNumero = numero;
        
    }else if(numero <= menorNumero){
        menorNumero = numero;
        
    }
}
console.log("O maior é " +maiorNumero);
console.log("O menor é " +menorNumero);


//b

let novoArray = [];

for(let lista of array){
    novoArray.push(lista / 10)
}
console.log(novoArray);

//c


for(let item of array ){
    if (item%2===0){
        console.log(`${item} é par`);
    }
}
/*
80 é par
30 é par
130 é par
40 é par
60 é par
70 é par
120 é par
90 é par
110 é par
*/

//d

for(let i = 0; i<=array.length-1; i++){
    console.log(`O elemento do index ${i}" e " ${array[i]}`)
}
/*
O elemento do index 1" e " 30
index.js:85 O elemento do index 2" e " 130
index.js:85 O elemento do index 3" e " 40
index.js:85 O elemento do index 4" e " 60
index.js:85 O elemento do index 5" e " 21
index.js:85 O elemento do index 6" e " 70
index.js:85 O elemento do index 7" e " 120
index.js:85 O elemento do index 8" e " 90
index.js:85 O elemento do index 9" e " 103
index.js:85 O elemento do index 10" e " 110
index.js:85 O elemento do index 11" e " 55
*/