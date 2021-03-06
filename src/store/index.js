import Vue from 'vue'
import Vuex from 'vuex'

import showModule from './modules/show'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    showModule
  }
})
