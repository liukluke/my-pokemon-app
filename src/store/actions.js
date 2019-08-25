import axios from "axios";

const initPokemons = ({ commit }) => axios
    .get("https://pokeapi.co/api/v2/pokemon/")
    .then(data => {
        const pokemons = [...data.data.results];
        const newPokemons = [];
        pokemons.map(pokemon => {
            axios
                .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                .then(data => newPokemons.push(data.data))
                .catch(err => console.log(err));
        })
        commit('SET_POKEMONS', newPokemons)
    })
    .catch(err => console.log(err));

const getPokemon = ({ commit }, namePokemon) => {
    commit('ONE_POKEMON', namePokemon)
}

export {
    initPokemons, getPokemon
}