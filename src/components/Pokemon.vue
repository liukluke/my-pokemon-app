<template>
  <router-link v-bind:to="`/pokemon/${pokemon.name}`">
    <h2>{{pokemon.name}}</h2>
    <p>{{pokemon.id}}</p>
    <img
      v-bind:src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`"
      alt
    />
  </router-link>
</template>


<script>
export default {
  props: ["pokemon"]
};
</script> 