function limparCadastro(){
    const valorMax = document.getElementById("maximo");
    const valorMin = document.getElementById("minimo");
    let valor =  document.getElementById("valor"); 
    let description = document.getElementById("description");
    valor.value=""
    description.value=""
    valorMax.value =""
    valorMin.value=""
    
}

function validarCadastro(){
    let valor =  document.getElementById("valor"); 
    let description = document.getElementById("description");
    let tipo = document.getElementById("options");
    if((valor.value === "") || (description.value === "") || (tipo.value ==="")){
    
        alert("Preencha o campo, porfavor!!!")

        const despesa={
            valor: valor.value,
            description: description.value,
            tipo : tipo.value

        }
        arrayDespesa.push(despesa)
        console.log(arrayDespesa);
             
    }else{
      mostrarDespesas()
    }
}

let arrayDespesa = [
    
]

function mostrarDespesas(){
    let valor =  document.getElementById("valor"); 
    let description = document.getElementById("description");
    let tipo = document.getElementById("options");
    let listaDespesa = document.getElementById("listaDespesa"); 

    listaDespesa.innerHTML += `
    <div><p>valor: ${valor.value}</p>
    <p>Descrição:${description.value}<p>
    <p>Tipo:${tipo.value}</p>
    </div>
    `
}

function filtrar(){
    let filterDespesas =  arrayDespesa.filter((despesa, idx, arr ) =>{
        return despesa.tipo === tipo.value
        
    })
    filterDespesas =  arrayDespesa.filter((despesa, idx, arr ) =>{
        return despesa.description === description.value
        
    })
    filterDespesas =  arrayDespesa.filter((despesa, idx, arr ) =>{
        return despesa.valor === valor.value
        
    })

   let teste = document.getElementById("listaFiltrar") 
    
    
    teste.innerHTML += `<div><p>valor: ${valor.value}</p>  <p>Descrição:${description.value}<p><p>Tipo:${tipo.value}</p></div>`
           
}