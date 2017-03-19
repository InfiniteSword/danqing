import Vue from 'vue';
import HomePage from './components/HomePage.vue';
import '../assets/css/style.scss';

new Vue({
    el: '#homepage',
    render: function (h) {
        return h(HomePage)
    }
});

