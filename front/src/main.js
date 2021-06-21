import Vue from "vue";

import App from "./App.vue";

import router from "./router";
import store from "./store";

import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

import objectSelection from "./functions/objectSelection";
import logger from "./functions/logger";

Vue.config.productionTip = true;
// test if prod: process.env.NODE_ENV === "development" (others modes: test, production)

// global vue which allows component communication using events
// use: in hook "created" of a conponent: this.$eventBus.$on("eventName", data)
// and anywhere, emit the custom event: this.$eventBus.$emit("eventName", this);
Vue.prototype.$eventBus = new Vue();

// use: this.$root.$globalFunctions.moduleName.functionName
// eg: $root.$globalFunctions.logger.consoleLog()
Vue.prototype.$globalFunctions = {
  objectSelection,
  logger
};

new Vue({
  router,
  store, // use this.$store to access vuex
  vuetify,
  render: h => h(App)
}).$mount("#app");
