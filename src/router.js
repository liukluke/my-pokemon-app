import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import InfoPokemon from './views/InfoPokemon.vue';
import SearchPokemon from './views/SearchPokemon.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/pokemon/:name',
      component: InfoPokemon
    },
    {
      path: '/pokemons/search',
      component: SearchPokemon
    }
  ]
})
