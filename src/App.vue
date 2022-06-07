<template >
  <div id="app">
    <div ><con-tent></con-tent></div>
    <div><MyMenu></MyMenu></div>
  </div>
</template>

<style>

</style>

<script>
import Vue from 'vue'
import ConTent from './views/Layout/ConTent.vue'
import MyMenu from './views/Layout/MyMenux.vue'
export default {
  components: {
    ConTent,
    MyMenu
  }
}
</script>

<style>
.divapp{
  height: 100px;
}
</style>
