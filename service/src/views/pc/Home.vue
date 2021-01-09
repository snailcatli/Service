<template>
  <div id="Home">
    <myheader></myheader>
    <router-view></router-view>
  </div>
</template>

<script>
import myheader from '@/components/myHeader.vue';
  export default {
    name: 'Home',
    components: {
      myheader
    },
    props: {
    },
    data(){
      return {
      };
    },
    component:{},
    computed:{},
    created(){},
    mounted(){},
    methods:{},
  }
</script>

<style scoped lang='less'>
</style>