import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import store from './store';

import HomePage from './components/HomePage.vue';
import ImgPanel from './components/ImgPanel.vue';
import Search from './components/Search.vue';
import Work from './components/Work.vue';
import User from './components/User.vue';

import '../assets/css/style.scss';


Vue.use(Vuex);
Vue.use(VueRouter);

const routes = [
    { path: '/works', component: ImgPanel },
    { path: '/search', component: Search },
    { path: '/work/:workId', component: Work, name: 'work' },
    { path: '/user/:userId', component: User, name: 'user' },
];


const router = new VueRouter({
    routes
});

new Vue({
    el: '#homepage',
    render: function (h) {
        return h(HomePage);
    },
    router,
    store
});

