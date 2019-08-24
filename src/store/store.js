import Vue from 'vue'
import Vuex from 'vuex'

import pokemons from './modules/pokemons'
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    pokemons
  }
})
