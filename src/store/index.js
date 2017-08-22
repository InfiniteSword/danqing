import Vue from 'vue';
import Vuex from 'vuex';

import bgMode from './modules/bgMode';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        bgMode
    },
    strict: debug,
});
