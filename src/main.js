import Vue from "vue";
import App from "./App.vue";
import { Input, Field } from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Input);
Vue.use(Field);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
