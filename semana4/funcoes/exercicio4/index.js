function idadeCachorro(idade){
    const idadeCachorro = 7;

    return idadeCachorro * idade;
}
console.log(`A idade do cachorro ${idadeCachorro(10)} anos`)
//b


let nome = prompt("Qual seu nome: ");
let idade = Number(promp("Qual sua idade :"));
let endereco = prompt('Qual o seu endereço: ');
let resposta = prompt('Você estudante? (S/N)')

let fc = (nome, idade, endereco, resp) =>{
    if(resp ==="S"){
        resp ="Sou estudante";
    }else{
        resp = "Não sou estudante";
    }
    let msg= (`Eu sou ${nome} tenho ${idade}  anos, moro em  ${endereco} e  ${resp}`);
    return msg;
}
console.log(fc(nome, idade, endereco, resp));