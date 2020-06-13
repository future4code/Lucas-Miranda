let segundoMaiorsegundoMenor=(arr)=>{
    let menorNumero = Infinity
    let maiorNumero = 0;

    for(let numero of arr){
        if(numero > maiorNumero){
            maiorNumero = numero
        }
    }

    for(numero of arr){
        if(numero < maiorNumero){
            menorNumero = numero
        }
    }
    console.log(maiorNumero)
    console.log(menorNumero)
}
segundoMaiorsegundoMenor([12, 32, 64, 144, 1024, 2064])