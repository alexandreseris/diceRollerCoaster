<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="menuItem">Home</router-link>
      <router-link to="/newCharacter" class="menuItem"
        >Nouveau Personnage</router-link
      >
      <router-link to="/profilList" class="menuItem">Profils</router-link>
    </div>
    <div id="routerViewContainer">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
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
#nav .menuItem {
  text-align: center;
  margin: auto;
  font-size: 1.5em;
}

// style global pour toute l'appli
* {
  background-color: rgb(30, 30, 30);
  color: rgb(204, 204, 204);
}
#routerViewContainer {
  display: flex;
  justify-content: space-around;
}
.vueContainer {
  margin-top: 2vh;
  width: 50vw;
}

// import des libraires
@import "../node_modules/bootstrap/scss/bootstrap.scss";

// style spécifique sur body, ça marche pas avant :/
body {
  margin-top: 0vh;
  margin-bottom: 0vh;
  margin-left: 1vw;
  margin-right: 1vw;
}
</style>
