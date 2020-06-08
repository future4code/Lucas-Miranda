

function metodo(array) {
    let resultadoA = 0;
    let resultadoB = 1;
    let arrayFinal = [];
  
    for (let x of array) {
      resultadoA += x;
      console.log(resultadoA);
      resultadoB *= x;
      console.log(resultadoB);
    }
     
    arrayFinal.push(resultadoA);
    arrayFinal.push(resultadoB);
  
    return arrayFinal;
  }

  const arrayNum= [2, 2, 5, 5];
  console.log(metodo(arrayNum));

 //Na iteração o array x soma todos os elementos e joga no resultado A e depois meultiplica todos os elementos do array e joga no resultaB e depois adiciona todos os elementos  no Array final com o resultadoA e resultadoB.
 //