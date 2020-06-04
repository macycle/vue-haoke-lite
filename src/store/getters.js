const getters = {
  token: state => state.user.token,
  user: state => state.user.user,
  sidebar: state => state.app.sidebar
}

export default getters
