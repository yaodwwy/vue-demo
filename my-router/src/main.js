import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";
import all from "./moudle/MoudleA";
import {aa} from "./moudle/MoudleB";
import {bb as b} from "./moudle/MoudleB";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

console.log(all,aa,b);

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
