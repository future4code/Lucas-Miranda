//1 Resposta
// Array são um conjunto de tipos seja String, number ou os dois  juntos e objetos são elementos do array que podem ser iteráveis,
//o que quer dizer que posso fazer loops com arrays de objetos do tipo String ou Number.

//2 Resposta

let criaretangulo = (lado1, lado2) => {
    let retangulo = {
            'largura': lado1,
            'altura': lado2,
            'perimmetro': 2* (lado1 + lado2),
            'area': (lado1 *lado2)
    }

    return retangulo
}
/*output:
 let retangulo = criaretangulo(2 , 8)
 console.log(retangulo)
 {largura: 2, altura: 8, perimmetro: 20, area: 16}
altura: 8
area: 16
largura: 2
perimmetro: 20
*/