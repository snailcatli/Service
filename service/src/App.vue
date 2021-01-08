<template>
  <div id="app">
    <myheader></myheader>
    <mynav></mynav>
    <layout></layout>
  </div>
</template>

<script>
import layout from '@/layout/layout.vue';
import myheader from '@/components/myHeader.vue';
import mynav from '@/components/myNav.vue';
export default {
  name: 'App',
  components: {
    myheader,
    mynav,
    layout
  }
}
</script>

<style>
</style>
