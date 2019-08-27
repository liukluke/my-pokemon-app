<template >
  <div v-if="!infoPokemon">
    <appLoader />
  </div>
  <div v-else class="info-container">
    <h1>#{{infoPokemon.id}} {{infoPokemon.name}}</h1>
    <section class="sprites">
      <p v-for="sprite in sprites" v-bind:key="sprite">
        <img v-bind:src="sprite" alt="pokemon.sprites" />
      </p>
    </section>
    <section class="info-boxes">
      <appInfoBox title="abilities" :infos="infoPokemon.abilities" llave="ability" />
      <appInfoBox title="base experience" :infos="infoPokemon.base_experience" llave="base" />
      <appInfoBox
        title="Heigth &amp; Weight"
        :infos="[infoPokemon.height,infoPokemon.weight]"
        llave="height"
      />
      <appInfoBox title="types" :infos="infoPokemon.types" llave="type" />
      <appInfoBox title="stats" :infos="infoPokemon.stats" llave="stat" />
      <appInfoBox title="moves" :infos="infoPokemon.moves" llave="move" />
      <appInfoBox title="Items" :infos="infoPokemon.held_items" llave="items" />
      <appInfoBox :title="['order','default']" :infos="[infoPokemon.order,infoPokemon.is_default]" llave="order" />
    </section>
  </div>
</template>

<script>
import Loader from "./../atoms/Loader";
import InfoBox from "./../atoms/InfoBox";

export default {
  components: {
    appLoader: Loader,
    appInfoBox: InfoBox
  },
  computed: {
    infoPokemon() {
      this.$store.dispatch("getPokemon", this.$route.params.name);
      return this.$store.getters.infoPokemon;
    },
    sprites() {
      return Object.values(this.infoPokemon.sprites).filter(e => e !== null);
    }
  }
};
</script>