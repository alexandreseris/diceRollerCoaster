<template>
  <div id="app">
    <div id="nav">
      <!-- afficher le menu -->
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <!-- tag contenant le menu -->
      <md-drawer :md-active.sync="showNavigation" md-fixed md-swipeable>
        <md-toolbar class="md-transparent" md-elevation="3">
          <p class="labelRouter"><span class="md-title">Menu</span></p>
        </md-toolbar>
        <md-list>
          <md-list-item v-for="routeItem in routes" :key="routeItem.path">
            <md-button
              :to="routeItem.path"
              class="md-primary routerButton"
              :routeItem="routeItem"
            >
              <md-icon>{{ routeItem.icon }}</md-icon>
              {{ routeItem.label }}
            </md-button>
          </md-list-item>
        </md-list>
      </md-drawer>
    </div>
    <div id="routerViewContainer">
      <router-view />
    </div>
  </div>
</template>

<script>
import router from "@/router/index.js";
export default {
  name: "App",
  data: function() {
    return {
      routes: router.options.routes,
      showNavigation: false
    };
  }
};
</script>

<style lang="scss">
#nav .router-link-exact-active {
  color: white;
}

.routerButton,
.labelRouter {
  width: 100%;
  text-align: center;
}

#routerViewContainer {
  display: flex;
  justify-content: space-around;
}
.vueContainer {
  margin-top: 2vh;
  width: 50vw;
}
// config des librairies
@import "~vue-material/dist/theme/engine"; // Import the theme engine
@include md-register-theme(
  "default",
  (
    primary: md-get-palette-color(bluegrey, 400),
    accent: md-get-palette-color(bluegrey, 800),
    theme: dark // This can be dark or light
  )
);
// on rajoute des couleurs, à utiliser avec md-theme-nomDuTheme
@include md-register-theme(
  "danger",
  (
    primary: md-get-palette-color(red, 400),
    accent: md-get-palette-color(red, 800)
  )
);
@include md-register-theme(
  "success",
  (
    primary: md-get-palette-color(green, 400),
    accent: md-get-palette-color(green, 800)
  )
);
@include md-register-theme(
  "info",
  (
    primary: md-get-palette-color(teal, 300),
    accent: md-get-palette-color(teal, 800)
  )
);
@import "~vue-material/dist/theme/all"; // Apply the theme

// reconfig des librairies
.md-button {
  text-transform: none;
}

// style spécifique sur body, et style global sur l'appli
body {
  margin-top: 0vh;
  margin-bottom: 0vh;
  margin-left: 1vw;
  margin-right: 1vw;
}

// redisgn des input number
input[type="number"] {
  -moz-appearance: textfield;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"]:invalid {
  box-shadow: none;
}
</style>
