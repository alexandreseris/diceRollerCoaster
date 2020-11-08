import Vue from "vue";

import App from "./App.vue";

import router from "./router";
import store from "./store";

import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

import objectSelection from "./functions/objectSelection";
import inputValidation from "./functions/inputValidation";
import logger from "./functions/logger";

Vue.config.productionTip = true;

// global vue which allows component communication using events
// use: in hook "created" of a conponent: this.$eventBus.$on("eventName", data)
// and anywhere, emit the custom event: this.$eventBus.$emit("eventName", this);
Vue.prototype.$eventBus = new Vue();

// use: this.$root.$globalFunctions.moduleName.functionName
Vue.prototype.$globalFunctions = {
  objectSelection,
  inputValidation,
  logger
};

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
