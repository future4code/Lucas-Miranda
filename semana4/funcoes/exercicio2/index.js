
let arrayDeNum = [1, 2, 3, 4, 5];

const funcao = (lista, arrayDeNomes) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === arrayDeNomes) {
      return lista[i];
    }
  }
};

console.log(funcao(arrayDeNum, 1));
console.log(funcao(arrayDeNums, 5));
console.log(funcao(arrayDeNum, 2));

//a. output: 0 2 undefined 
//   output: Darvas João undefined

//e o nome fosse um número, ao se chamar a função?

//b. Sim, funcionaria 

