import React from 'react'
import styled from 'styled-components'


const CadUser = styled.div`
  display: flex;flex-direction: column;
  border: 1px solid black;
  width: 20%;
  margin: 0 auto;
  padding: 30px;
`;

const CadUser = styled.button`
  border-radius: 30px;
  border: none;
  color: white;
  background-color: #2D3058;
  padding: 0.5em 1em;
  margin: 0 auto;

`;

export class CadUser extends React.Component{
        
    render(){
        return (
        <CadUser>
            <div>
                <label>Name: </label>
                <input type="text" onChange={this.onChangeName}  value={this.state.name} /><br/>
            </div>
            <div>
                <label>E-mail: </label>
                <input type="email"  onChange={this.onChangeEmail} value={this.state.email} /><br/>
            </div>
            <button onClick={this.criarNovoUser}>Salvar</button>
        </CadUser>

            
        );  
    }   
}
export default CadUser