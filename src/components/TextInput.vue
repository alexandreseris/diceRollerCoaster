<template>
  <div>
    <div>{{ this.nameBox }}</div>
    <textarea name="" id="" cols="30" rows="10"></textarea>
  </div>
</template>

<script>
export default {
  props: {
    nameBox: String
  }
};
</script>
