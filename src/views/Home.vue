<template>
  <div class="home">
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
      return this.$store.getters.pokemons;
    }
  }
};
</script>
