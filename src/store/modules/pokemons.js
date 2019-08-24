const state = {
  pokemons: [],
  infoPokemon: []
}


const mutations = {
  'SET_POKEMONS'(state, newPokemons) {
    state.pokemons = newPokemons
  },
  'ONE_POKEMON'(state, namePokemon) {
    state.infoPokemon = state.pokemons.filter(pokemon => pokemon.name === namePokemon);
  }
}


const getters = {
  pokemons: state => {
    return state.pokemons
  },
  infoPokemon: state => {
    return state.infoPokemon[0]
  }
}

export default {
  state, mutations, getters
}