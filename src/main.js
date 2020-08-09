import Vue from "vue";
// import des libraires
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default-dark.css"; // https://vuematerial.io/themes/prebuilt
import {
  MdButton,
  MdIcon,
  MdAutocomplete,
  MdField,
  MdList,
  MdMenu,
  MdContent,
  MdTable,
  MdToolbar
} from "vue-material/dist/components";
Vue.use(MdButton);
Vue.use(MdIcon);
Vue.use(MdAutocomplete);
Vue.use(MdField);
Vue.use(MdList);
Vue.use(MdMenu);
Vue.use(MdContent);
Vue.use(MdTable);
Vue.use(MdToolbar);

import router from "./router";
import store from "./store";

import App from "./App.vue";

// config
Vue.config.productionTip = true;
// https://vuematerial.io/configuration
// Vue.material = {
// https://vuematerial.io/configuration
//   theming: {}
// locale: {
//     dateFormat: "dd/MM/yyyy",
//     // `0` stand for Sunday, `1` stand for Monday
//     firstDayOfAWeek: 1
// }
// };

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
