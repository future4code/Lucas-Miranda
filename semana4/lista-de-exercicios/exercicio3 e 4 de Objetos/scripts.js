let filmeFavorito = () => {
    const filme ={
        titulo: 'Avangers',
        Ano: '2012',
        Diretor:'Joss Whedon',
        Atores:['Robert Downey Jr', 'Chris Evans', 'Chris Hemsworth', 'Mark Ruffalo', 'Samuel L.Jackson'],
        Atrizes: ['Scarllet Johansson', 'Fernanda Toker', 'Cobie Smulders']
    }
    console.log(`Venha Assstir ao filme ${filme.titulo}, de ano ${filme.Ano}, dirigido por ${filme.Diretor}, estrelado por Atores ${filme.Atores} e Atrizes ${filme.Atrizes}`)
}
filmeFavorito()

//output : Venha Assstir ao filme Avangers, de ano 2012, dirigido por Joss Whedon, estrelado por Atores Robert Downey Jr,Chris Evans,Chris Hemsworth,Mark Ruffalo,Samuel L.Jackson e Atrizes Scarllet Johansson,Fernanda Toker,Cobie Smulders


const fulandoDeTal={
    nome: 'Josefa da Conceição Bento XVI',
    idade: '109',
    email: 'josefaBentoXVI@conceicao.com.br',
    endereco:'Rua Florenço xxxx'
}
anonimizarPessoa = (anonynmous) =>{
    anonynmous = {
        ...fulandoDeTal,
        nome: 'Anonimato',
    }

    return anonynmous
}
let  anonimoPessoa = anonimizarPessoa()
console.log(anonimoPessoa)
//ouput:
//{nome: "Anonimato", idade: "109", email: "josefaBentoXVI@conceicao.com.br", endereco: "Rua Florenço xxxx"}
//email: "josefaBentoXVI@conceicao.com.br"
//endereco: "Rua Florenço xxxx"
//idade: "109"
//nome: "Anonimato"