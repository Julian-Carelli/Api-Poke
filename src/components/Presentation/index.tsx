import * as React from 'react';

import {IProps} from './IProps';
import {PresentationStyled} from '../Presentation/style';

import getSprites from '../../utils/getSprites';
import getPokemonId from '../../utils/getPokemonId';
import {PreviewCard} from '../PreviewCard/index';
import {NotFound} from '../NotFound/index';
import {Loading} from '../Loading/index';

const Presentation = (props:IProps) => (
    <PresentationStyled data-testid="Presentation">

        {props.stateAlert === true && 

        <p className="Presentation__alert text-danger">
            Por favor, escribi un pokemon para poder hacer una busqueda
        </p>

        }

        <div className="Presentation__row row">

            {props.stateLoading === true && 
            <Loading/>
            }

            {props.collectionPokemonsView.length < 1 && props.isReady === true &&(
                <NotFound></NotFound>  
            )}
            
            {props.collectionPokemonsView.map((pokemon) => {

                const {url, name}:any = pokemon

                const id = getPokemonId(url)

                const pokemonSprite = getSprites(id);

                return(
                   <PreviewCard
                   handleModal={props.handleModal}
                   pokemonName={name}
                   pokemonSprite={pokemonSprite}
                   pokemonId={id}
                   key={id}
                   ></PreviewCard>
                )

            })}
        
        </div>
    </PresentationStyled>
);

export default React.memo(Presentation)