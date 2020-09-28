<template>
  <div class="vueContainerInner">
    <v-card>
      <v-card-title>
        Paramètres
      </v-card-title>
      <v-card-actions>
        <v-switch
          v-model="$vuetify.theme.dark"
          inset
          label="Activer le mode Sombre"
          persistent-hint
        ></v-switch>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "Settings",
  data: function() {
    return {};
  }
};
</script>
