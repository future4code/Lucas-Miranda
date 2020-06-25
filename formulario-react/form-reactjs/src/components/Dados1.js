import React from 'react';
import styled from 'styled-components';


const FormInputs = styled.form`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
`;
const MinhaLabel = styled.label`
    margin: 16px;
    align-items: center;
`;

export default props => {
    return(
    <FormInputs>
        <MinhaLabel>
            <h3>DADOS GERAIS</h3> 
            <p>1. Name:</p>
            <input type="text"  />
        </MinhaLabel>
            <MinhaLabel>
                <p>2.  Qual sua idade?</p>
                <input type ="text" />
            </MinhaLabel>
            <MinhaLabel>
            <p> 3.  Qual seu email?</p>
                <input type ="email" />
            </MinhaLabel>
            <MinhaLabel>
                <p>4.Qual sua escolaridade?</p>
                <select>
                <option value="Ensino Médio Completo">Ensino Médio Completo</option>
                <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
                <option selected value="Ensino Superior Completo">Ensino Superior Completo</option>
                <option value="Ensino Superior Incompleto">Ensino SUperior Incompleto</option>
                </select>
            </MinhaLabel>

    </FormInputs>

  );

}


      
