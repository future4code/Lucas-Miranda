//a 
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function arrayTamanho(array){
    return array.length
}
console.log(arrayTamanho(array));


//b

//Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
function ImparPar (number)  { 
    if (number %2 ===0) {     
        return true 
    } else {     
        return false 
    } 
}
    console.log(ImparPar(401))

//c
//Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele
let numero = (array) =>{
    let qtdPar = 0;
    let qtdImpar = 0;
    for (let i = 0; i<array.length; i++){
        if(array[i]%2 === 0){
           qtdPar += 1;
        }else{
            qtdImpar +=1;
        }
        
    }

    return "A quantidade de par é " +qtdPar + " e a quantidade de Ímpar " +qtdImpar;
}
console.log(numero(array));

//d
//Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o número é par
function numerosPar(array){
    let qtdPar = 0;
    let qtdImpar = 0;
     for(let x of array)
        if(ImparPar(x)){
           qtdPar += 1;
        }else{
            qtdImpar +=1;
        }
        

    return "A quantidade de par é " +qtdPar + " e a quantidade de Ímpar " +qtdImpar;
}

console.log(numerosPar(array));
