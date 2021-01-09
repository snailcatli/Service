import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import i18n from './i18n/index';
import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset.css';
import '@/assets/css/base.css';
import '@/assets/css/iconfont/iconfont.css';
import router from '@/Router/router';

Vue.use(VueI18n);
Vue.use(ElementUI);
Vue.use(VueRouter); 

new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
