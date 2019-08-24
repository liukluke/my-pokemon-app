<template>
  <div>
    <h2>{{pokemon.name}}</h2>
    <img v-bind:src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`" alt="" />
  </div>
</template>


<script>
export default {
  props: ["pokemon"],
};
</script>