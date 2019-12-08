import Vue from 'vue'
import App from './App.vue'
import {
  Input
} from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Input)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')