import { login, logout } from '@/api/user'
import { getToken, setToken, removeToken, toggleLoginStatus } from '@/utils/auth'
import { resetRouter } from '@/router'

const state = {
  token: getToken(),
  user: JSON.parse(window.localStorage.getItem('user'))
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER: (state, user) => {
    state.user = user
    window.localStorage.setItem('user', JSON.stringify(user))
  }
}

const actions = {
  login ({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({
        username: username.trim(),
        password: password
      })
        .then(res => {
          const { data } = res
          commit('SET_TOKEN', data.token)
          commit('SET_USER', data)
          setToken(data.token)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  logout ({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        removeToken()
        resetRouter()
        toggleLoginStatus()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  resetToken ({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
