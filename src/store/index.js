import { createStore } from 'vuex'
import json from '../store/DB.json'
// import axios from 'axios'



export default createStore({
  state: {

    DB: json,

    user: {
      loggedIn: false,
      data: null
    },

    visorState:false,
    indexator:0
  },
  getters: {
    getUsers: (state) => state.user,
  },
  mutations: {   

    bgSet(state, value){
      state.bgLight = value
    },

    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value
    },
    SET_USERS(state, data) {
      state.user.data = data;
    },
  },
  actions: {

    /*async fetchUsers({ commit }) {
      try {
        const data = await axios.get(
          "https://xaxaxdata-default-rtdb.europe-west1.firebasedatabase.app/"
        );
        commit("SET_USERS", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },


  async register(context, { email, password, name }) {
    const response = await createUserWithEmailAndPassword(auth, email, password)
    if (response) {
      context.commit('SET_USER', response.user)
      response.user.updateProfile({ displayName: name })
    } else {
      throw new Error('Unable to register user')
    }
  },

  async logIn(context, { email, password }) {
    const response = await signInWithEmailAndPassword(auth, email, password)
    if (response) {
      context.commit('SET_USER', response.user)
    } else {
      throw new Error('login failed')
    }
  },

  async logOut(context) {
    await signOut(auth)
    context.commit('SET_USER', null)
  },

  async fetchUser(context, user) {
    context.commit("SET_LOGGED_IN", user !== null);
    if (user) {
      context.commit("SET_USER", {
        displayName: user.displayName,
        email: user.email
      });
    } else {
      context.commit("SET_USER", null);
    }
 */
    setVis(v){
      this.state.visorState=v;
    }
 },
  modules: {
  }
})
