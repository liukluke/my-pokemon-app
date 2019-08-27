<template>
  <div :style="{'background-color': randomColors}" class="pokemon-container">
    <div style="position:relative" v-if="!pokemon">
      <appLoader />
    </div>
    <router-link v-else v-bind:to="`/pokemon/${pokemon.name}`">
      <div class="box-inside">
        <div class="image-box">
          <img
            v-bind:src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`"
            alt
          />
        </div>
        <h2>
          <span>#{{pokemon.id}}</span>
          <br />
          {{pokemon.name}}
        </h2>
      </div>
    </router-link>
  </div>
</template>


<script>
import Loader from './../atoms/Loader';

export default {
  props: ["pokemon"],
  components: {
    appLoader: Loader
  },
  computed: {
    randomColors() {
      const letters = "0123456789ABCDEF";
      return (
        "#" +
        new Array(6)
          .fill()
          .map(() => letters[Math.floor(Math.random() * 16)])
          .join("")
      );
    }
  }
};
</script> 
