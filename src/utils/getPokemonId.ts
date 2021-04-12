const getPokemonId = (pokemonUrl) => {

    const pokemonId = pokemonUrl.slice(34, 39).split('/')[0];

    return pokemonId;
};

export default getPokemonId;