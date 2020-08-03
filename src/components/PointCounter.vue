<template>
  <div>
    <div>{{ this.namePoint }}</div>
    <span>{{ this.currentPoint }}</span> /
    <span>{{ this.maxPoint }}</span>
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
