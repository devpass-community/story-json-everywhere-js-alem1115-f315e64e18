const getPokemon = require('./pokemonService');

(async() => {
    const pokemonId = 25;
    const pokemon = await getPokemon(pokemonId);
    console.log(pokemon.name);
})();
