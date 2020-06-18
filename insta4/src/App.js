import React from 'react';
import Post from './components/Post/Post';
import styled from 'styled-components';

const AppContainer = styled.div `
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;

const DivInput = styled.div`
  background-color: blue;
  display: flex;
  width: 300px;
  height: 200px;
  justify-content: center;
  flex-direction: column;
`;

class App extends React.Component {
 state ={
  pessoas: [
   {
    nomeUsuario:'paulinha',
    fotoUsuario: 'https://picsum.photos/50/50',
    fotoPost: 'https://picsum.photos/400/400?a=1'
   },
  
   {   
    nomeUsuario : 'Lucas',
    fotoUsuario : 'https://picsum.photos/50/40',
    fotoPost : "https://picsum.photos/400/400?a=2"
   },

   {    
    nomeUsuario : 'FlorentinaDeJesus',
    fotoUsuario : 'https://picsum.photos/50/60',
    fotoPost:  'https://picsum.photos/400/400?a=3'
   }

 ],

    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""

};

adicionarPosts = () =>{
  const PostagemNova = {
    nomeUsuario: this.state.valorInputNomeUsuario,
    fotoUsuario:  this.state.valorInputFotoUsuario, 
    fotoPost: this.state.valorInputFotoPost,
  }

  const PostagemNovas = [...this.state.pessoas, PostagemNova]
  this.setState({pessoas: PostagemNovas});

};
onChangeInputNomeUsuario = (event) => {
  this.setState({ valorInputNomeUsuario: event.target.value });
};
onChangeInputFotoUsuario = (event) => {
  this.setState({ valorInputFotoUsuario: event.target.value });
};
onChangeInputFotoPost = (event) =>{
  this.setState({valorInputFotoPost:  event.target.value});
}

  render() {
    const listaDePosts = this.state.pessoas.map(post => {
      return (
        <Post 
        nomeUsuario={post.nomeUsuario} 
        fotoUsuario={post.fotoUsuario} 
        fotoPost={post.fotoPost}
        />   
      
    );
  });

    return(
      <AppContainer>
          <DivInput>
          <input 
              value={this.state.valorInputNomeUsuario}
              onChange={this.onChangeInputNomeUsuario}
              placeholder={"Name"}
          />

            <input
              value={this.state.valorInputFotoUsuario}
              onChange={this.onChangeInputFotoUsuario}
              placeholder={"photo user"}
            />

          <input
              value={this.state.valorInputFotoPost}
              onChange={this.onChangeInputFotoPost}
              placeholder={"photo post"}
            />

          <button onClick={this.adicionarPosts}>Adicionar</button>
        </DivInput>

       <div>{listaDePosts}</div>

        
      </AppContainer>
    );
  }
}

export default App;
