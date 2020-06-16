import React from 'react';

export function SmallCard(props) {
    return (
        <div className="small-container">
            <div className="box">
                <img className="imgEmail" src={props.imagem} />
                <p className="email">{props.email}</p>
            </div>
            <div className="box">
                <img src="imgLocalizacao" src={props.imagem2}></img>
                <p className="endereco">{props.endereco}</p>
            </div>
        </div>
    )
}
export default SmallCard;