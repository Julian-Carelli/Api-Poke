import * as React from 'react'

import {SearchStyled} from './style';
import {IProps} from './IProps';

export const Search = (props:IProps) => (

    <SearchStyled >
        <div className="Search__row row">
            <div className="Search__find">
                <input data-testid="test__search" className="Search__input form-control" onChange={props.handleOnChange}  type="text" placeholder="Ingresa el nombre a buscar"></input>
            </div>
            <div className="Search__function pl-3">
                <button onClick={props.searchPokemon} data-testid="test__btn" className="Search__button btn btn-primary">Buscar</button>
            </div>
        </div>
    </SearchStyled >
);