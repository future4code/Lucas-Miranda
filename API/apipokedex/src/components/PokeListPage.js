import React from  'react';
import axios from 'axios';
import styled from 'styled-components';

const ContainerPai = styled.div`
   display: flex;
   margin-top: 20px;
   margin-left: 20px;
`


class PokeListPage extends React.Component{
    state ={
        pokeList : [],
        pokeImage: ""
    }

    componentDidMount =() =>{
        this.pegaPokemons();
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


    pegaPokemons = async () => {
        try{
            const res = await axios.get(
                "https://pokeapi.co/api/v2/pokemon/?limit=151"
                
            );
            this.setState({pokeList: res.data.results});

        }catch(err){
            window.alert("Pokemon não encontrado!")
            console.log(err.message);
        }
    }

    render(){
        return(
            <ContainerPai>
                <select onChange={this.onChangePokeName}>
                    <option value={""} />
                    {this.state.pokeList.map(pokemon => {
                        return(
                            <option key={pokemon.name} value={pokemon.name}>
                                {""}
                                {pokemon.name}
                            </option>
                        )
                    })}
                </select>
                <div>
                    {this.state.pokeImage && (
                    <img src={this.state.pokeImage} alt="Pokemon" />
                    )}
                </div>
            </ContainerPai>   
        )
    }
}
export default PokeListPage;