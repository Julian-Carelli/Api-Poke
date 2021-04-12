import * as React from 'react';

import {IProps} from './IProps';

import getSprites from '../../utils/getSprites';
import getPokemonId from '../../utils/getPokemonId';
import {PreviewCard} from '../PreviewCard/index';
import {CompleteCard} from '../CompleteCard/index';
import {Modal} from '../Modal/index';
import {NotFound} from '../NotFound/index';
import {Loading} from '../Loading/index';

export const Presentation = (props:IProps) => (
    <div data-testid="Presentation" className="Presentation container">
        <div className="Presentation__row row">

            {props.stateLoading === true && 
            <Loading/>
            }

            {props.stateModal === true &&
                
                <Modal
                handleModal={props.handleModal} 
                stateModal={props.stateModal}>

                    <CompleteCard
                    collectionPokemonView={props.collectionPokemonView}
                    ></CompleteCard>       

                </Modal>
                
            }

            {props.collectionPokemonsView.length < 1 && (
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
                   ></PreviewCard>
                )

            })}
        
        </div>
    </div>
);