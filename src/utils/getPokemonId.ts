/**
 * Funcion para obtener ID que no se encuentran con facilidad en la API
 * @param pokemonUrl Parametro tipo string
 * @returns resultado de Id
 */

const getPokemonId = (pokemonUrl:string) => {

    const pokemonId = pokemonUrl.slice(34, 39).split('/')[0];

    return pokemonId;
};

export default getPokemonId;