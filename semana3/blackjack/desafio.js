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

let user = 0;
let computer = 0;

user = (carta1.valor) + (carta2.valor) > (carta3.valor) + (carta4.valor); // Variaveis que verifica a soma o das cartas são maiores ou menores
computer = (carta1.valor) + (carta2.valor) < (carta3.valor) + (carta4.valor);

if((user > computer) || (user === 21)){
   confirm("Deseja comprar mais uma carta?");
   console.log("Suas cartas são " , carta1.texto, carta2.texto, ". ", "A carta revelada do Usuário é ", carta1.texto); 
}
else if ((user < computer) || (computer === 21)){
   confirm("Deseja comprar mais uma carta? ");
   console.log("Suas cartas são ",carta3.texto, carta4.texto, ".", "A carta revelada do Usuário é ", carta2.texto);
   
}else{
   confirm("Deseja comprar mais uma carta? ");
   console.log("Empate");
}
