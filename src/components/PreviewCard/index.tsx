import * as React from 'react';

import {PreviewCardStyled} from './style';
import {IProps} from './IProps'

export const PreviewCard = (props:IProps) => (

    <PreviewCardStyled data-testid="PreviewCard" key={props.pokemonId}>
        <div className="PreviewCard__presentation">
            <h2 className="PreviewCard__title">{props.pokemonName}</h2>
        </div>
        <div className="PreviewCard__information">
            <div className="PreviewCard__background">
                <img className="PreviewCard__img" src={props.pokemonSprite} alt={props.pokemonName}></img>
            </div>
        </div>
        <div className="PreviewCard__moreInformation">
            <div className="PreviewCard__modal">
                <button className="btn btn-primary" id={props.pokemonId} onClick={(e) => props.handleModal(e)} data-testid="btn">Ver mas</button>
            </div>
        </div>
    </PreviewCardStyled>
    
);
