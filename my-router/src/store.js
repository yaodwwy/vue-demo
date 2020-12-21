import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showMe: true,
    comingList: []
  },
  getters: {
    comingListGetter(state) {
      return state.comingList.filter((item, index) => index < 3);
    }
  },
  mutations: {
    showMe(state, data) {
      state.showMe = data;
    },
    comingListMutation(state, data) {
      state.comingList = data;
    }
  },
  actions: {
    getComingListAction(store) {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=3083712',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16072624521316527735308289"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        store.commit('comingListMutation', res.data.data.films);
      })
    }
  }
})

var name = 'aaa';
var obj = {
  name:'myname',
  [name]:'mynameaaa'
}
console.log(obj);
