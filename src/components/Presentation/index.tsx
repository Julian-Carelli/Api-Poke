import * as React from 'react';

import {IProps} from './IProps';
import {PresentationStyled} from '../Presentation/style';

import getSprites from '../../utils/getSprites';
import getPokemonId from '../../utils/getPokemonId';
import {PreviewCard} from '../PreviewCard/index';
import {CompleteCard} from '../CompleteCard/index';
import {Modal} from '../Modal/index';
import {NotFound} from '../NotFound/index';
import {Loading} from '../Loading/index';

const Presentation = (props:IProps) => (
    <PresentationStyled data-testid="Presentation">
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
    </PresentationStyled>
);

export default React.memo(Presentation)