<template >
  <div v-if="!infoPokemon">
    <appLoader />
  </div>
  <div v-else>
    <h2>Info Pokemon</h2>
    <p>{{infoPokemon.name}}</p>
  </div>
</template>

<script>
import Loader from "./../atoms/Loader";
export default {
  components: {
    appLoader: Loader
  },
  computed: {
    infoPokemon() {
      this.$store.dispatch("getPokemon", this.$route.params.name);
      return this.$store.getters.infoPokemon;
    }
  }
};
</script>