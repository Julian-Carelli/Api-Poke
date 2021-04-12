import * as React from 'react';


import {IProps} from './IProps';
import {CompleteCardStyled} from './style';

export const CompleteCard = (props:IProps) => (


   <CompleteCardStyled data-testid="CompleteCard">
       
        <div className="CompleteCard__header row">
            <div className="CompleteCard__presentation col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <h2 className="CompleteCard__title">{props.collectionPokemonView.name}</h2>
            </div>
            <div className="CompleteCard__type col-sm-12 col-md-12 col-lg-6 col-xl-6">
                {props.collectionPokemonView.types.map((pokemon, index) => (
                    <p key={index} className="CompleteCard__text_type">{pokemon.type.name}</p>
                ))}
            </div>
        </div>
        <div className="CompleteCard__information row">
            <div className="CompleteCard__background_front col-6 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="CompleteCard__background">
                    <img width="200px;" height="200px;" className="CompleteCard__img" src={props.collectionPokemonView.sprites.front_default} alt={props.collectionPokemonView.name}></img>
                </div>
                <div>
                    <p className="CompleteCard__text_front">{props.collectionPokemonView.name} de frente.</p>
                </div>
            </div>
            {props.collectionPokemonView.sprites.back_default &&
            <div className="CompleteCard__background_back col-6 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <img width="200px;" height="200px;" className="CompleteCard__img" src={props.collectionPokemonView.sprites.back_default} alt={props.collectionPokemonView.name}></img>
                <p className="CompleteCard__text_back">{props.collectionPokemonView.name} de atrás.</p>
            </div>
            }
            
        </div>
        <div className="CompleteCard__information row">
            <div className="CompleteCard__presentation col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <h2 className="CompleteCard__title_stats">Stats de {props.collectionPokemonView.name}</h2>
            </div>
            <div className="CompleteCard__stats col-12">
                {props.collectionPokemonView.stats.map((stats, index) => (
                    <div className="CompleteCard__paramether" key={index}>
                        <div className="CompleteCard__exp">
                            <p><strong className="CompleteCard__prop">{stats.stat.name}</strong>: {stats.base_stat}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </CompleteCardStyled>
 
);