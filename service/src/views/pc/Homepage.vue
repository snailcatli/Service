<template>
  <div id="homepage">
    <div class="container">
      <div class="title">
        <img id="logoImg" src="@/assets/img/logo.png" alt="">
        <span>Service Of Snail</span>
      </div>
      <div class="content">
        <div v-for="(item,index) in navList" :key="index" class="nav-card">
          <div class="card-img">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="card-title">
            {{item.name}}
          </div>
          <div class="description">
            {{item.description}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import nav from '@/json/nav.js';
  export default {
  name: '',
  props: {
  },
  data(){
    return {
      lang: 'zh',
      navList: [],
    };
  },
  component:{},
  computed:{},
  created(){},
  mounted(){
    if(this.lang == 'zh'){
      this.navList = nav.nav.zh;
    }
  },
  methods:{},
  }
</script>

<style scoped lang='less'>
  #homepage{
    .container{
      .title{
        margin-top: 75px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 65px;
          height: 65px;
          margin-right: 40px;
        }
        span{
          font-size: 40px;
        }
      }
      .content{
        display: flex;
        margin-top: 86px;
        justify-content: center;
        .nav-card{
          margin: 0 50px;
          width: 280px;
          cursor: pointer;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #dbdbdb;
          padding-bottom: 14px;
          transition: all 0.6s ease 0s;
          .card-img{
            img {
              max-width: 100%;
            }
          }
          .card-title {
            color: #000000;
            font-size: 18px;
            padding: 6px 12px;
          }
          .description{
            padding: 0 12px;
            font-size: 13px;
            color: #666;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
        .nav-card:hover {
          transform: scale(1.04);
          transition: all 0.6s ease 0s;
        }
      }
    }
  }
</style>