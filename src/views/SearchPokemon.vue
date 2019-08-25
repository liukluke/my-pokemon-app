<template>
  <div>
    <input type="text" v-model="search" placeholder="Search pokemons!" />
    <div v-if="search !== ''">
      <div v-bind:key="pokemon.id" v-for="pokemon in filteredList">
        <router-link v-bind:to="`/pokemon/${pokemon.name}`">{{ pokemon.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  },
  computed: {
    pokemons() {
      return this.$store.getters.pokemons;
    },
    filteredList() {
      return this.pokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
};
</script>