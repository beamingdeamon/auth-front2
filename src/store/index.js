import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    jwt: null,
    email: null,
    first_name: null,
    last_name: null,
    role: null
  },
  getters: {
    jwt: state =>{
      return state.jwt
    }
  },
  mutations: {
    setJwt(state, payload){
      state.jwt = payload
    },
    setEmail(state, payload){
      state.email = payload
    },
    setFirstName(state, payload){
      state.first_name = payload
    },
    setLastName(state, payload){
      state.last_name = payload
    },
    setRole(state, payload){
      state.role = payload
    },
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
