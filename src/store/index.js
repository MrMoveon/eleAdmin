import Vue from 'vue'
import Vuex from 'vuex'

import global from './module/global'
import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules:{
        global
    },
    getters
    
})



export default store