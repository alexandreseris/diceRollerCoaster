<template>
  <v-card
    :class="['centerElem', 'noSpace', 'pointCounterCardMain']"
    :color="colorVal"
    width="33%"
    raised
  >
    <v-card-subtitle>{{ this.namePoint }}</v-card-subtitle>
    <v-card-text :class="['flexRow']">
      <v-text-field
        :value="this.currentPoint"
        placeholder="actuel"
        :color="colorVal"
      ></v-text-field>
      <v-text-field
        prefix="/"
        :value="this.maxPoint"
        placeholder="max"
        :color="colorVal"
      ></v-text-field>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    namePoint: String,
    colorVal: String,
    currentPoint: Number,
    maxPoint: Number
  }
};
</script>

<style scoped>
.noSpace {
  padding: 0 0 0 0;
  margin: 0 0 0 0;
}

.noSpace * {
  padding: 0 0 0 0;
  margin: 0 0 0 0;
}

.pointCounterCardMain {
  max-width: 7em;
}
</style>
