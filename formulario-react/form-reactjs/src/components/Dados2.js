import React from 'react';
import styled from 'styled-components';

const FormInputs = styled.form`
display: flex;
flex-flow: column wrap;
align-items: center;
justify-content: center;

`;
const MinhaLabel = styled.label`
margin: 8px;
align-items: center;

`;
   



export default props =>{

    return(
        <FormInputs>
            <h3>Dados 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
            <MinhaLabel>5. Qual curso?</MinhaLabel>
            <input type="text" name="nome"/>
            <MinhaLabel>6. Qual a unidade de ensino?</MinhaLabel>
            <input type="text" name="nome"/>
        </FormInputs>
    );
} 
