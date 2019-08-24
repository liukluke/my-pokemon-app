<template >
  <div v-if="infoPokemon">
    <h2>Info Pokemon</h2>
    <p>{{infoPokemon.name}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    infoPokemon() {
      this.$store.dispatch("getPokemon", this.$route.params.name);
      return this.$store.getters.infoPokemon;
    }
  }
};
</script>