//4
const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

let consultarEmail = []

consultas.forEach((pessoas, index, array) =>{

        if(pessoas.genero === "feminino"){
            nome = "Sra ." ;
            nomeLembrar = "Lembrá-la" ;
        }else{
            nome = "Sr ."
            nomeLembrar = "Lembrá- lo";
        }

        if(consultas.cancelada){
            consultarEmail.push(`Olá, ${nome} ${pessoas.nome}. Infelizmente sua consulta marcada
            para o dia ${consultas.dataDaConsulta } foi cancelada. Se quiser, pode entrar em 
            contato conosco para remarcá-la`);
        }else{
            consultarEmail.push(`Olá, ${nome } ${ pessoas.nome}. Estamos enviando esta mensagem para
                ${pessoas.nomeLembrar} da sua consulta no dia ${ pessoas.dataDaConsulta}. Por favor, acuse
                o recebimento deste e-mail.`);
        }
});
 console.log(consultarEmail)
