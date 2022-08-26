import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    app_id: '', // 当前应用信息app_id
    staff_id: '',  // 用户id
    staff_name: '',  // 用户名
  },
  getters: {
    getAppId: (state) => {
      return state.app_id
    }
  },
  mutations: {
    // 设置appID
    setAppId (state, data) {
      state.app_id = data.app_id
    },
    // 设置登录用户信息
    setLoginInfo (state, data) {
      state.staff_id = data.staff_id
      state.staff_name = data.staff_name
    }
  }
})

export default store;