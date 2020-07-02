import React from 'react';
import axios from "axios";
import styled from "styled-components";


const ContainerDiv = styled.div`
    display:flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    height: 20%;
    width: 20%;
    border: 1px solid black;
    margin: 0 auto;

`;


const axiosConfig = {
    headers: {
      Authorization: "Lucas-Alencar-Turing"
    }
  };
  

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

class SignUpPage extends React.Component{

    state = {
        name: "",
        email: ""
    }

    onChangeName = event => {
        this.setState({ name: event.target.value });
      };
    
      onChangeEmail = event => {
        this.setState({ email: event.target.value });
      };


    createUser = () => {
        const body = {
            name: this.state.name,
            email: this.state.email
        }

        axios
            .post(baseUrl, body, axiosConfig)
            .then(() => {
            alert("Usuário criado com sucesso")
            this.setState({ name:"", email: "" })
            })
            .catch( error => {
            console.log(error.message)
            })

    }
   
    render(){
        return (
            <ContainerDiv>
                <input 
                    type="text"
                    placeholder="Nome do Usuário"
                    value={this.state.name}
                    onChange={this.onChangeName}
                />

                <input 
                    type="email"
                    placeholder="Email do Usuário"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                />

                <button onClick={this.createUser}>Salvar</button>
            </ContainerDiv>
        );
    }   
}
export default SignUpPage;