import Vue from 'vue';
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store'

import HomePage from './components/HomePage.vue';
import Search from './components/Search.vue';
import ImgPanel from './components/ImgPanel.vue'

import '../assets/css/style.scss';


Vue.use(Vuex);
Vue.use(VueRouter);

const routes = [
    { path: '/search', component: Search },
    { path: '/', component: ImgPanel },
];


const router = new VueRouter({
    routes
});

new Vue({
    el: '#homepage',
    render: function (h) {
        return h(HomePage)
    },
    router,
    store
});

