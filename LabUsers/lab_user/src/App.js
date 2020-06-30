import React from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import {CadUser} from './components/CadUser';
import {ListaUser} from './components/ListaUser';


class App extends React.Component{

  state = {
    userlistValue: [
      {
        name: "",
        email: ""
      }
    ]
  }

 componentDidMount =()=>{
   this.getAllUsers();
 };

 criarNovoUser = () =>{
  const body = {
  name: this.state.userlistValue
  };
 }

 getAllUsers = () =>{
   axios
    .get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
     {
        headers: {
          Authorization: "Lucas-Alencar-Turing"
        }
     }
    )
   .then(response =>{
     this.setState({userlistValue: response.data.result.name})
     this.setState({userlistValue: response.data.result.email})
   })
   .catch(error => {
     console.log(error.data);
   });
 };

 DeleteAllUser = () =>{
 
    axios
     .del(
       "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id", body,
      {
         headers: {
           Authorization: "Lucas-Alencar-Turing"
         }
      }
     )
    .then(response =>{
      this.setState({userlistValue: response.data.result.name})
      this.setState({userlistValue: response.data.result.email})
    })
    .catch(error => {
      console.log(error.data);
    });
  };
 

 render(){
     <CadUser criarNovoUser/>
   return(
     <ListaUser criarNovoUser />
   )
 }

}

export default App;
