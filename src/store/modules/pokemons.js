const state = {
  pokemons: [],
  infoPokemon: {}
}


const mutations = {
  'SET_POKEMONS'(state, newPokemons) {
    state.pokemons = newPokemons
  },
  'ONE_POKEMON'(state, pokemon) {
    state.infoPokemon = pokemon
  }
}


const getters = {
  pokemons: state => {
    return state.pokemons
  },
  infoPokemon: state => {
    return state.infoPokemon
  }
}

export default {
  state, mutations, getters
}