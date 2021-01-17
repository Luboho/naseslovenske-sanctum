import Vuex from 'vuex';
import Vue from 'vue';
import posts from './modules/posts';
import auth from './modules/auth';
import axios from 'axios'
axios.defaults.baseURL = 'http://naseslovenske.test'
axios.defaults.withCredentials = true;

// Load Vuex
Vue.use(Vuex);

//Create store
export default new Vuex.Store({
    modules: {
        posts,
        auth
    }
});