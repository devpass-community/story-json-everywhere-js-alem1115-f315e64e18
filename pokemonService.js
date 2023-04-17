async function getPokemon(pokemonId) {
    debugger;
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/25`;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            return data
        })
}

module.exports = getPokemon;