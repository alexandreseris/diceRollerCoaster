import Vue from "vue";

import App from "./App.vue";

import router from "./router";
import store from "./store";

import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.config.productionTip = true;

// global vue which allows component communication using events
// use: in hook "created" of a conponent: this.$eventBus.$on("eventName", data)
// and anywhere, emit the custom event: this.$eventBus.$emit("eventName", this);
Vue.prototype.$eventBus = new Vue();

// utilitairies functions
Vue.prototype.$utilsFunctions = {
  intInput: function(val, range) {
    val = Number(val);
    if (isNaN(val)) {
      return "Nombre entier attendu";
    }
    if (range !== null) {
      if (typeof range[0] === "number" && val < range[0]) {
        return "Valeur minimale: " + range[0].toString();
      }
      if (typeof range[1] === "number" && val > range[1]) {
        return "Valeur maximale: " + range[1].toString();
      }
    }
    return true;
  },
  requiredInput: function(val) {
    if (val === "") {
      return "Valeur obligatoire";
    }
    return true;
  },
  getNameList: function(arr) {
    return arr.map(function(item) {
      return item.name;
    });
  },
  getItemByName: function(arr, search) {
    return arr.filter(function(item) {
      return item.name === search;
    })[0];
  }
};

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
