<template>
  <div>
    <md-content>{{ this.namePoint }}</md-content>
    <md-toolbar>
      <span>{{ this.currentPoint }}</span> /
      <span>{{ this.maxPoint }}</span></md-toolbar
    >
  </div>
</template>

<script>
export default {
  props: {
    namePoint: String,
    currentPoint: Number,
    maxPoint: Number
  }
};
</script>
