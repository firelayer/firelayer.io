export default {
  SHOW_TOAST: (state, toast) => {
    const { color, timeout, message } = toast

    state.toast = {
      message,
      color,
      timeout,
      show: true
    }
  },
  HIDE_TOAST: (state) => {
    state.toast.show = false
  },
  RESET: (state) => {
    state.toast = {
      show: false,
      color: 'black',
      message: '',
      timeout: 3000
    }

    // User
    state.user = null
    state.claims = null
  }
}
