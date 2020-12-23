import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";
import all from "./moudle/MoudleA";
import {aa} from "./moudle/MoudleB";
import {bb as b} from "./moudle/MoudleB";

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
//
// Vue.use(ElementUI);

import 'mint-ui/lib/style.css'

import {InfiniteScroll} from 'mint-ui';
Vue.use(InfiniteScroll)

import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import { IndexList, IndexSection,Cell } from 'mint-ui';
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
Vue.component(Cell.name, Cell);

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
