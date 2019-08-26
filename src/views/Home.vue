<template>
  <div class="home-container">
    <appPokemon v-for="pokemon in pokemons" v-bind:key="pokemon.id" :pokemon="pokemon" />
  </div>
</template>

<script>
import Pokemon from "@/components/Pokemon.vue";
export default {
  components: {
    appPokemon: Pokemon
  },
  computed: {
    pokemons() {
      const pokemons = this.$store.getters.pokemons;
      return pokemons.sort((a, b) => a.id - b.id);
    }
  }
};
</script>
