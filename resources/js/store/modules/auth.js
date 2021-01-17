import axios from 'axios';
axios.defaults.baseURL = 'http://naseslovenske.test'
axios.defaults.withCredentials = true;

const state = {
    authenticated: false,
    user: null,
};

const getters = {
    authenticated (state) {
        return state.authenticated
    },
  
    user (state) {
        return state.user
    },
};

const actions = {
    async login ({ dispatch }, credentials) {
        await axios.get('/sanctum/csrf-cookie')
        await axios.post('/login', credentials)
  
        return dispatch('me')
      },
  
      async register ({ dispatch }, credentials) {
        await axios.get('/sanctum/csrf-cookie')
        await axios.post('/register', credentials)
  
        return dispatch('me')
      },

      async logout ({ dispatch }) {
        await axios.post('/logout')
                return dispatch('me')
      },
  
      me ({ commit }) {
        return axios.get('/api/user').then((response) => {
          commit('SET_AUTHENTICATED', true)
          commit('SET_USER', response.data)
        })
        .catch(() => {
          commit('SET_AUTHENTICATED', false)
          commit('SET_USER', null)
        })
      },
};

const mutations = {
    SET_AUTHENTICATED (state, value) {
      state.authenticated = value
    },
  
    SET_USER (state, value) {
      state.user = value
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};