import Vue from 'vue'
import Router from 'vue-router'
import Film from '@/views/Film'
import Cinema from '@/views/Cinema'
import Center from '@/views/Center'
import Nowplaying from './views/film/Nowplaying'
import Comingsoon from './views/film/Comingsoon'
import Detail from './views/Detail'
import City from "./views/City";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/film',
      component: Film,
      children: [{
        path: '/film/nowplaying',
        component: Nowplaying
      }, {
        path: 'comingsoon',
        component: Comingsoon
      }, {
        path: '',
        redirect: '/film/nowplaying'
      }
      ]
    },
    {
      name: 'mydetail',
      path: '/detail/:id',
      component: Detail
    },
    {
      path: '/cinema',
      component: Cinema
    },
    {
      path: '/center',
      component: Center
    },
    {
      path: '/city',
      component: City
    },
    {
      path: '*',
      redirect: '/center'
    }
  ]
})
