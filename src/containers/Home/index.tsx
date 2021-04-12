import React, { useEffect, useState } from 'react';

import {Header} from '../../components/Header/index';
import Presentation from '../../components/Presentation/index';
import {Search} from '../../components/Search/index';

import arrayFilter from '../../utils/arrayFilter';

export const Home = () => {

    const [pokemons, setPokemons] = useState<Array<object> | null>([]);
    const [pokemonsView, setPokemonsView] = useState<Array<object> | null>(([]));
    const [pokemonView, setPokemonView] = useState<Array<object> | null>(([]));
    const [pokemonName, setPokemonName] = useState<string | undefined>((undefined));
    const [modal, setModal] = useState<boolean | undefined>((false));
    const [loading, setLoading] = useState<boolean | undefined>(false);
    const [error, setError] = useState<string | undefined>(undefined);


    const escapeModal = e => {
        if(e.key === "Escape") {
            setModal(false)
        }
    };


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

            setError(err.message);
            setLoading(false);


        }  

    };

    const searchPreviewPokemon = () => {

        const inmutableCharacters:any = [...pokemons];

        const filterPokemons:Array<object> = arrayFilter(inmutableCharacters, pokemonName);

        return setPokemonsView(filterPokemons);

    };

    const searchCompletePokemon = async (pokemonId) => {
        setLoading(true);

        const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;

        try {

            const pokemon = await fetch(urlPokemon);
            const data = await pokemon.json()

            setPokemonView(data);
            setLoading(false);

            
        } catch (err) {
            
            setError(err.message);
            setLoading(false);

        }

        
    };

    const handleOnChange = (e:any) => {

        const {value} = e.target;

        setPokemonName(value);

    };

    const handleModal = async (e:any) => {

        if(modal === false){

            const pokemonId = e.target.id.slice(0, 5);

            await searchCompletePokemon(pokemonId);

            return setModal(true);

        }


        setModal(false);

    };

    useEffect(() => {
        getPokemons();

    }, []);

    document.addEventListener('keydown', escapeModal);
    
    const modalOriginal = document.getElementById('modal');
    modalOriginal.style.position = "";
    modalOriginal.style.top = "";
    modalOriginal.style.width = "";
    modalOriginal.style.backgroundColor = "";
    modalOriginal.style.height = "";

    if(modal === true){
        modalOriginal.style.position = "fixed";
        modalOriginal.style.top = "0px";
        modalOriginal.style.width = "100%";
        modalOriginal.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        modalOriginal.style.height = "100%";
    }


    return(
        <div className="Home container">
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
                stateModal={modal}
                stateLoading={loading}
            ></Presentation>
        </div>
    )


}