import React from 'react';
import styled from 'styled-components';

const FormInputs = styled.form`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
`;
const MinhaLabel = styled.label`
    margin: 16px;
    align-self: center;
`;

export default props =>{

   return(
    <formInputs>
            <MinhaLabel>
                <h3> 5. Porque você não terminou nenhum curso de Graduação?</h3>
                <textarea></textarea>
            </MinhaLabel>

            <MinhaLabel>
                <h3>6.  Você fez Algum curso complementar? </h3>
                <select>
                    <option>Nenhum</option>
                    <option>Curso de Informática Básica</option>
                    <opiton>Curso de Inglês</opiton>
                    <option>Profissionalizante</option>
                </select>
            </MinhaLabel>
        </formInputs>
    );
}
