import * as React from 'react';


import ImgNotFound from '../../assets/images/NotFound.png';
import {NotFoundStyled} from './style';


export const NotFound = () => (

    <NotFoundStyled data-testid="Not Found">
        <img src={ImgNotFound} className="NotFound__image"></img>
    </NotFoundStyled>

);