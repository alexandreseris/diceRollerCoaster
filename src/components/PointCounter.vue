<template>
  <div class="container">
    <md-toolbar>
      <div class="pointName">{{ this.namePoint }}</div>
      <span class="pointValue">{{ this.currentPoint }}</span>
      <span class="pointMax">{{ this.maxPoint }}</span>
    </md-toolbar>
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

<style scoped>
.pointName::after {
  content: ":";
}
.pointValue::before {
  content: " ";
  white-space: pre;
}
.pointValue::after {
  content: "/";
}
</style>