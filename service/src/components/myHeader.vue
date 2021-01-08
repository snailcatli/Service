<template>
  <div id="myHeader">
    <div class="container">
      <div class="header-left">
        <img id="logoImg" src="@/assets/img/logo.png" alt="">
        <span>Service Of Snail</span>
      </div>
      <div class="header-right">
        <div class="user">
          <span class="icon iconfont user icon-user"></span>
          <span class="user-id">1130694832</span>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div class="lang">
          <span>{{ $t('lang') }}</span>
        </div>
        <div class="home">
          <span class="icon iconfont icon-zhuye"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
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
@hovercolor: #6ea2d9;
  #myHeader{
    height: 40px;
    background-color: #282828;
    width: 100%;
    .container{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header-left{
        height: 100%;
        display: flex;
        align-items: center;
        #logoImg{
          height: 28px;
          width: 28px;
        }
        span{
          color: #fff;
          margin-left: 10px;
        }
      }
      .header-right{
        display: flex;
        align-items: center;
        .user{
          margin-right: 8px;
          span{
            color: #fff;
          }
          .icon-user{
            font-size: 20px;
          }
        }
        .lang{
          margin-left: 8px;
          cursor: pointer;
          span{
            color: #fff;
            font-size: 14px;
          }
        }
        .home{
          margin-left: 15px;
          .icon-zhuye{
            font-size: 20px;
            color: #fff;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>