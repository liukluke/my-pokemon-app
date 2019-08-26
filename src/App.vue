<template>
  <div class="main-container">
    <app-header />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch("initPokemons");
  }
};
</script>

<style lang="scss">
@import "./styles/styles.scss";
</style>

