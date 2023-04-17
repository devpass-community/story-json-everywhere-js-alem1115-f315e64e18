async function getPokemon(pokemonId) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const pokemonData = await response.json();
        return pokemonData;
    } catch (error) {
        console.error('There was a problem fetching the Pokemon data:', error);
    }
}

module.exports = getPokemon;