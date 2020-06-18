import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={"https://picsum.photos/400/400?a=1"}
        />

        <Post
          nomeUsuario = {'Lucas'}
          fotoUsuario = {'https://picsum.photos/50/40'}
          fotoPost = {"https://picsum.photos/400/400?a=2"}
        />

        <Post 
          nomeUsuario = {'FlorentinaDeJesus'}
          fotoUsuario = {'https://picsum.photos/50/60'}
          fotoPost = {"https://picsum.photos/400/400?a=3"}
        />
      </div>

      
    );
  }
}

export default App;
