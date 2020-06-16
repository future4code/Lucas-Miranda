import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import SmallCard from './components/CardPequeno/SmallCard';


function App() {
  return (
    < div className="App">
      <div className="page-section-container section-perfil">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://scontent.fmcz3-1.fna.fbcdn.net/v/t1.0-9/94659628_2830478813733417_1514789176652857344_o.jpg?_nc_cat=101&_nc_sid=84a396&_nc_ohc=OG_Pbhv9yUkAX-z_S5c&_nc_ht=scontent.fmcz3-1.fna&oh=5e212828674be76f42c9cdc0331696d8&oe=5F0EA55A" 
          nome="Lucas Alencar Miranda" 
          descricao="Oi, meu nome é Lucas e sou estudante Labenu e também Universitário. Minha experiência profissional foi como suporte técnico em uma empresa que tem um sistema ERP e  entregava computadores fazendo as montagens implantando o sistema nas lojas, formatando-os para entrega." 
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="small-container">
          <SmallCard 
            imagem ="https://image.flaticon.com/icons/svg/2991/2991144.svg"
            email = "lucaslabenu@gmail.com"
            endereco ="Avenida xxxx n° 333 / Ao lado da coca-cola"
            imagem2 = ""
          />
      </div>
      
  
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
          
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />

       <div className="page-section-container section-email" >
       <CardPequeno 
          imagem = "https://image.flaticon.com/icons/svg/2991/2991144.svg"
          email = "lucaslabenu@gmail.com"
          endereco = "Avenida xxxx n° 333 / Ao lado da coca-cola"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>

      </div>
    </div>
  );
}

export default App;
