import actions from './actions'
import mutations from './mutations'

const state = () => ({
  toast: {
    show: false,
    color: 'black',
    message: '',
    timeout: 3000
  }
})

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
