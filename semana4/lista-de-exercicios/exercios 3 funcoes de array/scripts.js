//a
const arrayMontanhaRussa = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

let permitidoEntrar = arrayMontanhaRussa.filter((pessoas, index, array)=>{
    return (pessoas.idade > 14) && (pessoas.idade < 60 ) && (pessoas.altura >= 1.50)
});

console.log(permitidoEntrar);

//output: 
//0: {nome: "Pedro", idade: 15, altura: 1.9}
//1: {nome: "Luciano", idade: 22, altura: 1.8}
//length: 2

//b
let  naoPermitidoEntrar = arrayMontanhaRussa.filter((pessoas, index, array)=>{
    return (pessoas.idade < 14) || (pessoas.idade > 60) || (pessoas.idade < 1.50)
});

console.log(naoPermitidoEntrar);
//ouput:
//0: {nome: "Paula", idade: 12, altura: 1.8}
//1: {nome: "Artur", idade: 10, altura: 1.2}
//2: {nome: "Soter", idade: 70, altura: 1.9}
//length: 3