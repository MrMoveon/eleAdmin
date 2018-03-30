import Vue from 'vue'
import Vuex from 'vuex'

import global from './module/global'

Vue.use(Vuex)

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules:{
        global
    }
    
})



export default store