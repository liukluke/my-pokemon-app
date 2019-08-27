<template>
  <article v-if="llave === 'order'">
    <div class="info-box-tittle">
      <h2>{{title[0]}}</h2>
    </div>
    <div class="info-box-content">
      <p>order: {{infos[0]}}</p>
    </div>
    <div class="info-box-tittle">
      <h2>{{title[1]}}</h2>
    </div>
    <div class="info-box-content">
      <p>Default: {{infos[1]? 'yes' : 'no'}}</p>
    </div>
  </article>
  <article v-else class="info-box">
    <div class="info-box-tittle">
      <h2>{{title}}</h2>
    </div>
    <div v-if="llave === 'base'" class="info-box-content">
      <p>{{infos}}</p>
    </div>
    <div v-else-if="llave === 'height'" class="info-box-content">
      <p>heigth: {{infos[0]}}</p>
      <p>weight: {{infos[1]}}</p>
    </div>
    <div v-else-if="infos.length === 0" class="info-box-content">
      <p>NO {{title}}</p>
    </div>
    <div v-else class="info-box-content">
      <p v-for="info in infos" v-bind:key="info[llave].name">{{info[llave].name}}</p>
    </div>
  </article>
</template>

<script>
export default {
  props: ["title", "infos", "llave"]
};
</script>