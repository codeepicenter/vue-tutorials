import Vue from "vue";
import MyComponent from "./MyComponent.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(MyComponent)
}).$mount("#app");
