import Vue from 'vue'
import Vuex from 'vuex'

import blurState from './modules/blurState'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        blurState
    },
    strict: debug,
})
