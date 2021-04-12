import * as React from 'react'

import {SearchStyled} from './style';
import {IProps} from './IProps';

export const Search = (props:IProps) => (

    <SearchStyled >
        <div className="Search__row row">
            <div className="Search__find">
                <input data-testid="Search__input" className="Search__input form-control" onChange={props.handleOnChange} value={props.pokemonName} type="text" placeholder="Ingresa el nombre a buscar"></input>
            </div>
        </div>
    </SearchStyled >
);