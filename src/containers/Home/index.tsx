import React, { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';

import {Header} from '../../components/Header/index';
import Presentation from '../../components/Presentation/index';
import {Search} from '../../components/Search/index';
import {Modal} from '../../components/Modal/index';
import {CompleteCard} from '../../components/CompleteCard/index';

import arrayFilter from '../../utils/arrayFilter';
import ModalStyleChange from './../../utils/ModalStyleChange';

export const Home = () => {

    const [pokemons, setPokemons] = useState<Array<object> | null>([]);
    const [pokemonsView, setPokemonsView] = useState<Array<object> | null>([]);
    const [pokemonView, setPokemonView] = useState<Array<object> | null>([]);
    const [pokemonName, setPokemonName] = useState<string | undefined>(undefined);
    const [modal, setModal] = useState<boolean | undefined>(false);
    const [loading, setLoading] = useState<boolean | undefined>(false);
    const [isready, setIsReady] = useState<boolean | undefined>(false);
    const [alert, setAlert] = useState<boolean | undefined>(false);
    const [initialize, setInitialize] = useState<boolean | undefined>(false);
    

    /**
     * Funcion que busca traer a todos los pokemones haciendo una busqueda parcial de la informacion
     */
    const getPokemons = async () => {

        setLoading(true);

        const urlAllPokemon = 'https://pokeapi.co/api/v2/pokemon?limit=1118';

        try{

            const pokemons = await fetch(urlAllPokemon);
            const data = await pokemons.json();

            setPokemons(data.results);
            setPokemonsView(data.results);
            setLoading(false);

        } catch(err) {

            console.error(err.message);
            setLoading(false);


        }  

    };

    
    /**
     * Funcion encargada de manejar la busqueda de pokemons
     * @returns retorna el estado pokemonsView actualizado
     */
    const searchPreviewPokemon = () => {

        if(!pokemonName && initialize === false){

            setAlert(true)

            return setTimeout(() => {
                setAlert(false)
            }, 3000)
        }

        const inmutableCharacters:any = [...pokemons];

        const filterPokemons:Array<object> = arrayFilter(inmutableCharacters, pokemonName);

        setInitialize(true);
        return setPokemonsView(filterPokemons);

    };

    /**
     * Funcion que busca la informacion completa de cada pokemon
     * @param pokemonId id con el que se busca a cada pokemon
     */

    const searchCompletePokemon = async (pokemonId) => {
        setLoading(true);

        const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;

        try {

            const pokemon = await fetch(urlPokemon);
            const data = await pokemon.json()

            setPokemonView(data);
            setLoading(false);

            
        } catch (err) {
            
            console.error(err.message);
            setLoading(false);

        }

        
    };

    /**
     * Funcion que maneja el valor del input
     * 
     * 
     */

    const handleOnChange = (e:any) => {

        const {value} = e.target;

        setPokemonName(value);
        setIsReady(true);

    };

    /**
     * Funcion que maneja que va a pasar cuando el estado modal cambie
     */

    const handleModal = async (e:any) => {

        if(modal === false){

            const pokemonId = e.target.id.slice(0, 5);

            await searchCompletePokemon(pokemonId);

            return setModal(true);

        }


        setModal(false);

    };

    
    // UseEffect es usado para que pueda ni bien se renderize el componente, llamar la funcion getPokemons()

    useEffect(() => {
        getPokemons();

    }, []);


    /**
     * Funcion que sirve para poder utilizar la tecla ESCAPE cuando se quiera abrir y cerrar el Modal
     * @param e evento para detectar que tecla se esta utilizando
     */

     const escapeModal = e => {
        if(e.key === "Escape") {
            setModal(false)
        }
    };


    useEffect(() => {
        /** constante para obtener el modal **/
        const modalOriginal = document.getElementById('modal');

        /** Condicional para que se pueda atrapar el error si el metodo ModalStyleChange carga antes que el elemento en el DOM**/
        if(!modalOriginal){
            return console.log('Sorry not loaded')
        }


        ModalStyleChange(false, modalOriginal);


        if(modal === true){

            ModalStyleChange(true, modalOriginal);
    
             /** evento "keydown" para detectar la tecla presiona y que se ejecute la funcion escapeModal **/
            document.addEventListener('keydown', escapeModal);
    
        }

    })

    return(
        <div data-testid="test__home" className="Home container">
            <Header></Header>
            <Search
                handleOnChange={handleOnChange}
                pokemonName={pokemonName}
                searchPokemon={searchPreviewPokemon}
            ></Search>

            <Presentation
                collectionPokemonsView={pokemonsView}
                collectionPokemonView={pokemonView}
                handleModal={handleModal}
                isReady={isready}
                stateLoading={loading}
                stateAlert={alert}
            ></Presentation>

            {modal === true && 
                ReactDOM.createPortal(
                    <Modal
                        handleModal={handleModal}>
                            <CompleteCard
                            collectionPokemonView={pokemonView}
                            ></CompleteCard>       

                    </Modal>, document.getElementById('modal'))
            }
        </div>

        
    )
};