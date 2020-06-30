import React from 'react'
import styled from 'styled-components'

const ListaUser = styled.li`
ustify-content: space-between;
border-bottom: 1px solid black;
padding: 10px 0;
`

export class ListaUser extends React.Component{

    render(){
        return (
        <ListaUser>
            <ul>
                <h3>Usuários Cadastrados</h3>
                <li>
                    <p><span>{this.props.name} X</span></p>
                    <p><span>{this.props.email}</span></p>
                </li>
            </ul>
        </ListaUser>
      );
    }       
}
export default ListaUser