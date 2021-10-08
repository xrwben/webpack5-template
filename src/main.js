import Vue from "vue";
import App from "./App.vue";
import router from './router/index.js';
import './reset.less';

new Vue({
  el: '#app',
  router,
  render:h=>h(App)
}).$mount('#app');