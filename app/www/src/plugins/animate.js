import Vue from 'vue'
import '../assets/extras/animate.css'

Vue.prototype.$animate = function (node, animationName, callback) {
  node.classList.add('animated', animationName)

  function handleAnimationEnd() {
    node.classList.remove('animated', animationName)
    node.removeEventListener('animationend', handleAnimationEnd)

    // eslint-disable-next-line callback-return
    if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd)
}
