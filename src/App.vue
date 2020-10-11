<template>
  <v-app id="app">
    <v-navigation-drawer permanent app mini-variant color="primary">
      <v-list>
        <v-list-item v-for="routeItem in routes" :key="routeItem.path">
          <v-btn
            icon
            :to="routeItem.path"
            :routeItem="routeItem"
            :title="routeItem.label"
          >
            <v-icon>{{ routeItem.icon }}</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="vueContainer">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import router from "@/router/index.js";

export default {
  name: "App",
  data: () => ({
    routes: router.options.routes
  })
};
</script>

<style>
* {
  text-transform: none;
}
.vueContainer {
  width: 100%;
}
.vueContainerInner {
  padding: 10vh 10vw;
}

.centerElem {
  text-align: center;
  margin: auto;
}
.centerElem * {
  text-align: center;
  margin: auto;
}

.flexRow {
  display: flex;
  flex-direction: row;
}

.flexCol {
  display: flex;
  flex-direction: column;
}

.flexWrap {
  flex-wrap: wrap;
}

.flexSpaceArround {
  justify-content: space-around;
}

.flexSpaceBetween {
  justify-content: space-between;
}

.noTextSelection {
  user-select: none;
}

.noPadding {
  padding: 0px;
}

.noMargin {
  margin: 0px;
}
</style>
