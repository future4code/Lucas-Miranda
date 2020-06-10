/**
 * @Author Lucas Alencar Miranda
 * Data: 10/06/2020
 * SEMANA4-AULA15
 * 
 */

let ArrayDeFilmes=[]

function capturarFilme(){
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let description = document.getElementById('description'); 
    const textoDigitadoNatela = document.getElementById('container-post');

    if(title.value !== ""  && author.value !=="" && description.value !==""){
        textoDigitadoNatela.innerHTML += `<p>${title}</p><p> ${author}</p><p>${description}</p>`;
        
        title.value=""
        author.value=""
        description.value=""
    }

        let Filmes ={

        title:'title',
        author: 'author',
        description: 'description'
            
    }   

    ArrayDeFilmes.push(Filmes);
    
  
}
console.log(ArrayDeFilmes)

