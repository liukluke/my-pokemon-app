<template>
  <article v-if="llave === 'order'" class="info-box">
    <div class="info-box-title">
      <h3>{{title[0]}}</h3>
    </div>
    <div class="info-box-content">
      <p><strong>{{infos[0]}}</strong></p>
    </div>
    <div style="margin-top:24px" class="info-box-title">
      <h3><strong>{{title[1]}}</strong></h3>
    </div>
    <div class="info-box-content">
      <p>{{infos[1]? 'yes' : 'no'}}</p>
    </div>
  </article>
  <article v-else class="info-box">
    <div class="info-box-title">
      <h3>{{title}}</h3>
    </div>
    <div v-if="llave === 'base'" class="info-box-content">
      <p><strong>{{infos}}</strong></p>
    </div>
    <div v-else-if="llave === 'height'" class="info-box-content">
      <p>heigth: <strong>{{infos[0]}}</strong></p>
      <p>weight: <strong>{{infos[1]}}</strong></p>
    </div>
    <div v-else-if="infos.length === 0" class="info-box-content">
      <p><span class="empty-item">no {{title}}</span></p>
    </div>
    <div v-else-if="llave === 'stat'" class="info-box-content">
      <p v-for="info in infos" v-bind:key="info[llave].name">{{info[llave].name}}: <strong>{{info.base_stat}}</strong></p>
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