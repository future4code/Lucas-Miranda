/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
// Verifica se user e o computer atingiram a pontuação 21. Senão atigiu, o jogo da empate.
if(user > computer || user === 21){
   console.log("Suas cartas são " , carta1.texto, carta2.texto, ". ", "A carta revelada do Usuário é ", carta1.texto,
   "Deseja comprar mais uma carta?");
}
else if(user < computer || computer === 21){
   console.log("Suas cartas são ", carta3.texto, carta4.texto, ".", "A carta revelada do Usuário é ", carta2.texto,
   "Deseja comprar mais uma carta?")
}
else{
   console.log("Empate");
}
