<template>
  <div class="characterList">
    <md-button v-on:click="show" class="md-raised md-accent">{{
      profilName
    }}</md-button>
    <md-button
      v-on:click="loadCharacter"
      v-show="showed"
      v-for="character in characterList"
      v-bind:key="character"
      class="md-raised md-primary"
    >
      {{ character }}
    </md-button>
  </div>
</template>

<script>
export default {
  props: {
    characterList: Array,
    profilName: String
  },
  data: function() {
    return {
      showed: false
    };
  },
  methods: {
    show: function() {
      if (this.showed) {
        this.showed = false;
      } else {
        this.showed = true;
        this.$eventBus.$emit("openedProfil", this);
      }
    },
    loadCharacter: function(event) {
      console.log(this.profilName);
      console.log(event.target); // chargement du profil à faire via appel API, param: profil et character
    }
  },
  created() {
    this.$eventBus.$on("openedProfil", openedComp => {
      if (openedComp !== this) {
        this.showed = false;
      }
    });
  }
};
</script>

<style scoped>
button {
  font-weight: bold;
}
</style>
