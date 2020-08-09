<template>
  <div id="app">
    <div id="nav">
      <router-link
        v-for="routeItem in routes"
        :key="routeItem.path"
        :to="routeItem.path"
        v-slot="{ href, navigate, isActive, isExactActive }"
        :title="routeItem.label"
      >
        <md-button
          class="md-primary"
          :class="[
            isActive && 'router-link-active',
            isExactActive && 'router-link-exact-active'
          ]"
          :href="href"
          :routeItem="routeItem"
          @click="navigate"
        >
          <md-icon>{{ routeItem.icon }}</md-icon>
          {{ routeItem.label }}
        </md-button>
      </router-link>
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
      routes: router.options.routes
    };
  }
};
</script>

<style lang="scss">
// style spécifique au composant, on ne peut pas stacker un style scoped et un style global donc penser à faire des selection précises
#nav {
  background-color: rgb(50, 50, 50);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 3em;
}
#nav * {
  text-align: center;
  margin: auto;
  font-size: 1.2em;
}

#nav .router-link-exact-active {
  color: white;
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

// style spécifique sur body, ça marche pas avant :/
body {
  margin-top: 0vh;
  margin-bottom: 0vh;
  margin-left: 1vw;
  margin-right: 1vw;
}
</style>
