import Vue from "vue";
import App from "./App.vue";
import router from './router/index.js';
import './reset.less';

// const app = new Vue({
//   router
// }).$mount(App)

new Vue({
  // el: '#app',
  router,
  render:h=>h(App)
}).$mount('#app')