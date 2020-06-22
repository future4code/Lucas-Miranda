import React from 'react';
import styled from 'styled-components';

const FormFinal = styled.div`
display: block;
margin: 0 auto;
align-items: center;
justify-content: space-evenly;
`;


export default props =>{

    return(
        <FormFinal>
            <h3>O Formulário Acabou</h3>
            <p>Muito Obrigado por participar! Entraremos em Contanto em Breve</p>
        </FormFinal>
    );
} 
