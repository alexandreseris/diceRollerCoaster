<template>
  <div>
    <md-field>
      <label>{{ this.nameBox }}</label>
      <md-textarea v-model="textValue"></md-textarea>
    </md-field>
  </div>
</template>

<script>
export default {
  props: {
    nameBox: String
  },
  data: () => {
    return {
      textValue: "la bise ma poule"
    }
  }
};
</script>
