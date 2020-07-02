import React from "react";
import axios from "axios";
import styled from 'styled-components';
import image from '../image/pokemonGo.jpg'

const ContainerImage = styled.div`
    text-align: center;
    background-color: yellow;
    padding-top: 10px;
    margin-top: 200px;
    
`;
const ContainerInput = styled.div`
    text-align: center;
    
`;
const Footer = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: red;
    color: white;
    text-align: center;
`;



class CurrentPage extends React.Component{
    state = {
        pokeImage: "",
    }


    onChangePokeName = event =>{
        const pokeName = event.target.value;

        axios
         .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
         .then(res =>{
             this.setState({pokeImage: res.data.sprites.front_default});
         })
         .catch(err =>{
             console.log(err.message);
         })
    }

    render(){
        return (
            <div>
                <ContainerInput>
                <input 
                    value = {""}
                    type = "name"
                    onChange = {this.onChangePokeName}     
                />
                
                </ContainerInput>
                <hr />
                <ContainerImage>
                
                    <img src={image} />
                    <h3>Bem vindo ao jogo Pokemon</h3>

                </ContainerImage>

                <Footer>
                    By Lucas Miranda 
                </Footer>

            </div>
        )
    }
}
export default CurrentPage;