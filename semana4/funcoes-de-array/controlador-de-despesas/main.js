let valor =  document.getElementById("valor"); 
let description = document.getElementById("description");
let tipo = document.getElementById("options");
let listaDespesa = document.getElementById("listaDespesa"); 
let valorMax = document.getElementById("maximo");
let valorMin = document.getElementById("minimo");
let tipo2 = document.getElementById("option2");
let arrayDespesa = []
let despesa;
let listaFiltrada = document.getElementById("listaFiltrar")

function limparCadastro(){
    valor.value=""
    valorMax.value =""
    valorMin.value=""
    description.value=""
    
}

function validarCadastro(){
    let valor =  document.getElementById("valor"); 
    let description = document.getElementById("description");
    let tipo = document.getElementById("options");
    if((valor.value === "") || (description.value === "") || (tipo.value ==="")){
    
        alert("Preencha o campo, porfavor!!!")

        arrayDespesa.push(despesa)
        console.log(arrayDespesa);
             
    }else{
       despesa={
        valor: valor.value,
        description: description.value,
        tipo : tipo.value

    }
    arrayDespesa.push(despesa)
    mostrarDespesas()
    console.log(arrayDespesa);
    }

}


function mostrarDespesas(){

        
    listaDespesa.innerHTML += `
    <p>valor: ${valor.value}</p>
    <p>Descrição:${description.value}<p>
    <p>Tipo:${tipo.value}</p>
    `
}
function listaFiltrar(){
    let filterDespesas =  arrayDespesa.filter((despesa, idx, arr ) =>{
       return (despesa.tipo === tipo2.value) && (Number(despesa.valor) >= Number(valorMin.value)) && (Number(despesa.valor) <= Number(valorMax.value))
        
    })
    console.log(despesa.valor)
    console.log(valorMin.value)
    console.log(filterDespesas)
    console.log(arrayDespesa)

    filterDespesas.forEach((despesa, idx, arr) =>{
        listaFiltrada.innerHTML += `
        <p>valor: ${despesa.tipo}</p>
        <p>Tipo:${despesa.description}<p>
        <p>Descrição:${despesa.valor}</p>
         `
    }) 

}    