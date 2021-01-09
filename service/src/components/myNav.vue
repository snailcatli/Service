<template>
  <div id="myNav">
    <div class="container">
      <el-row style="width: 100%;" type="flex">
        <el-col :span="14" :offset="5">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane :label="item.name" :name="item.id" v-for="(item,index) in navList" :key="index"></el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="5" style="display: flex; align-items: center;">
          <el-input
            size="mini"
            :placeholder="$t('placeholder')"
            suffix-icon="el-icon-search"
            v-model="navKeyword">
          </el-input>
        </el-col>
      </el-row>
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
      activeName: '01',
      navList: [],
      navKeyword: ''
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
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
}
</script>
<style scoped lang='less'>
  @deep: ~'>>>';
  @colorRed: #c6000a;
  @{deep} .el-tabs__header{
    margin: 0;
    .el-tabs__nav-wrap::after{
      width: 0;
    }
    .el-tabs__active-bar{
      background-color: @colorRed;
    }
    .is-active {
      color: @colorRed;
    }
    .el-tabs__item:hover {
      color: @colorRed;
    }
  }
  #myNav{
    height: 44px;
    width: 100%;
    background-color: #f8f8f8;
    box-shadow: 0px 2px 7px 0px #bebebe;  
    .container{
      display: flex;
      align-items: center;
      @{deep} .el-input__inner:focus{
        border-color: @colorRed;
      }
      @{deep} .el-input__inner{
        border-radius: 16px;
      }
    }
  }
</style>