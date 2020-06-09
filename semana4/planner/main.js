function criarTarefa()
{
    const diasDaSemana = document.getElementById("diaDaSemana");
   
    const dias = document.getElementById(diasDaSemana.value);

    const meuInput = document.getElementById("nova_task");
    let item = meuInput.value

    const listaSemanas = document.getElementById(diasDaSemana.value);
    listaSemanas.innerHTML += `<li> ${item} </li>`;
   
    

    if(item === ""){
        alert("Task em branco");
    }


}

function limpar(){

    document.getElementById("segunda").innerHTML="";
    document.getElementById("terca").innerHTML="";
    document.getElementById("quarta").innerHTML="";
    document.getElementById("quinta").innerHTML="";
    document.getElementById("sexta").innerHTML="";
    document.getElementById("sabado").innerHTML="";
    document.getElementById("domingo").innerHTML="";
}

function riscado() {
    let D1 = document.getElementById("segunda"); 
    D1.style.setProperty("text-decoration", "line-through");
    let D2 = document.getElementById("terca");
    D2.style.setProperty("text-decoration", "line-through");
    let D3 = document.getElementById("quarta");
    D3.style.setProperty("text-decoration", "line-through")
    let D4 = document.getElementById("quinta");
    D4.style.setProperty("text-decoration", "line-through")
    let D5 = document.getElementById("sexta");
    D5.style.setProperty("text-decoration", "line-through")
    let D6 = document.getElementById("sabado");
    D6.style.setProperty("text-decoration", "line-through")
    let D7 = document.getElementById("domingo");
    D7.style.setProperty("text-decoration", "line-through")
}



