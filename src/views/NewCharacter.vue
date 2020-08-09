<template>
  <div class="vueContainer">
    <form action="" method="get" class="form-example">
      <md-autocomplete v-model="selectedProfil" :md-options="profils">
        <label>Nom du profil</label>
      </md-autocomplete>
      <div id="characterFormButtonContainer">
        <md-button
          class="md-theme-success md-raised md-accent"
          id="characterFormSend"
        >
          Envoyer
        </md-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    selectedProfil: null,
    profils: ["machin1", "machin2"]
  })
};
</script>
