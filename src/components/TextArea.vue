<template>
  <v-card>
    <v-card-actions>
      <v-btn outlined rounded text>{{ this.titleVal }}</v-btn>
    </v-card-actions>
    <v-textarea dense outlined :value="contentVal"></v-textarea>
  </v-card>
</template>

<script>
export default {
  props: {
    titleVal: String,
    contentVal: String
  }
};
</script>
