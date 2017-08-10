import Vue from 'vue'
import xcui from 'xcui'
import 'xcui/lib/xcui.css'
import App from './App.vue'

Vue.use(xcui)

new Vue({
  el: '#app',
  render: h => h(App)
})
