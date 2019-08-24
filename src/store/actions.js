import axios from "axios";

const initPokemons = ({ commit }) => axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=20")
    .then(data => {
        const pokemons = data.data.results;
        const newPokemons = [];
        pokemons.forEach(pokemon => {
            axios
                .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                .then(data => newPokemons.push(data.data))
                .catch(err => console.log(err));
        })
        commit('SET_POKEMONS', newPokemons)
    })
    .catch(err => console.log(err));

// const getPokemon = ({ commit }, namePokemon) => axios
//     .get(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
//     .then(data => {
//         const pokemon = data.data;
//         commit('ONE_POKEMON', pokemon)
//     })
//     .catch(err => console.log(err));


export {
    initPokemons
}