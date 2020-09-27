import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: "#3f51b5",
        secondary: "#607d8b",
        accent: "#03a9f4",
        error: "#f44336",
        warning: "#ffc107",
        info: "#2196f3",
        success: "#4caf50"
      },
      dark: {
        primary: "#3f51b5",
        secondary: "#607d8b",
        accent: "#03a9f4",
        error: "#f44336",
        warning: "#ffc107",
        info: "#2196f3",
        success: "#4caf50"
      }
    }
  }
});
