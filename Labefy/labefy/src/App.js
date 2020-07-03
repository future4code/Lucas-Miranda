import React from 'react';
import './App.css';
import axios from 'axios';


class App extends React.Component{ 
 state ={
     playlists : [] ,
     playlistValue: ""
 }


createPlaylist = () =>{
  const body = {
    name: this.state.playlistValue
  };

  axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",body,{
    headers:{
      Authorization: 'Lucas-Alencar-Turing'
    }
  })
  .then(response => {
    this.getAllPlaylist();
    this.setState({playlistValue: ""})
  })
  .catch(error => {
    console.log(error.data);
  })

}

 componentDidMount = () =>{
   this.getAllPlaylist();
 }

getAllPlaylist = () =>{
  axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
    headers: {
      Authorization: "Lucas-Alencar-Turing"
    }
  })
  .then(response => {
    this.setState({playlists: response.data.result.list});

  }).catch(error => {
    window.alert("Impossível Buscar a música, Tente novamente!");
    console.log(error.message);
  })
}

onChangePlaylist = (event) =>{
this.setState({playlistValue: event.target.value});
}

deletarPlaylist = () =>{
  axios.delete("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId", {
    headers: {
      Authorization: "Lucas-Alencar-Turing"
    }
  })
  .then(response =>{
    this.setState({playlistMusic: response.data.result.list })
  })
  .catch(err => {
    console.log(err.data);
  })
}


render(){
  return(
    <div className="App">
      <h3>Busque sua playlist Favorita</h3>
          <div>
            <input 
            value={this.state.playlistvalue}
            onChange = {this.onChangePlaylist}
            placeholder = "Nome da Playlist Favorita "
            />
            
            <button onClick={this.createPlaylist}>
                Enviar
            </button>
          </div>

          <div>
            {this.state.playlists.map(playlistMusic => {
              return <p>{playlistMusic.name}</p>;
            })}
          </div>
      </div>  
      
      )
 }
} 
export default App;
