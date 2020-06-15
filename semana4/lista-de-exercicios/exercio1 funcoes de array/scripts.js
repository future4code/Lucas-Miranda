//a)
let novoArray = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

let arrayPessoa = novoArray.filter((pessoa, index, array) =>{

    return pessoa.idade >= 20
})

console.log(arrayPessoa)
//output: 
//0: {nome: "Pedro", idade: 20}
//1: {nome: "Artur", idade: 89}
//length: 2


//b)

let menorPessoa = novoArray.filter((pessoa, index, array) =>{
    return pessoa.idade < 20
}) 
console.log(menorPessoa)

//output: 
//0: {nome: "João", idade: 10}
//1: {nome: "Paula", idade: 12}
//length: 2*/