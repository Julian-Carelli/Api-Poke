import * as React from 'react';

import {HeaderStyled} from './style';


export const Header = () => (
    <HeaderStyled data-testid="Header">
        <div className="Header__presentation">
                <h2 className="Header__title">Pokemon Finder</h2>
        </div>
        <div className="Header__info">
            <p className="Header__text">
                El que quiere Pokemons, que los busque.  
            </p>
        </div>
    </HeaderStyled>
)