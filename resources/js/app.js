/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import store from './store/usersStore.js';

Vue.use(VueRouter);

import routes from './routes.js';
const router = new VueRouter({
	routes,
});

const app = new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app');
