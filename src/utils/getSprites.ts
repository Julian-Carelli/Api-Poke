/**
 * 
 * Funcion para obtener los sprites de cada pokemon 
 */

const getSprites = pokemonId => {

    if(pokemonId == 10129 || pokemonId == 10153 || pokemonId == 10146 || pokemonId == 10154 || pokemonId == 10128 ){
        const otherData = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
        return otherData;
    }

    const data = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
    return data;
};

export default getSprites;