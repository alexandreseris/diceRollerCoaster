<template>
  <v-card
    :class="['centerElem', 'reworkedSpacing', 'pointCounterCardMain']"
    :color="colorVal"
    width="33%"
    raised
  >
    <v-card-subtitle>
      <v-text-field
        :value="this.name"
        v-model="name"
        placeholder="nom"
        outlined
        dense
        single-line
        readonly
        hide-details="auto"
      ></v-text-field>
      <v-card-text :class="['flexRow']">
        <v-text-field
          :value="this.currentPoint"
          v-model="currentPoint"
          placeholder="actuel"
          hide-details="auto"
        ></v-text-field>
        <v-text-field
          prefix="/"
          :value="this.maxPoint"
          v-model="maxPoint"
          placeholder="max"
          :readonly="!this.isEditable"
          hide-details="auto"
        ></v-text-field>
      </v-card-text>
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: {
    namePoint: String,
    colorVal: String,
    currentPointVal: Number,
    maxPointVal: Number,
    isEditable: { type: Boolean, default: false }
  },
  data: function() {
    return {
      name: this.namePoint,
      color: this.colorVal,
      currentPoint: this.currentPointVal,
      maxPoint: this.maxPointVal
    };
  }
};
</script>

<style scoped>
.reworkedSpacing {
  padding: 0.5em 0.5em;
  margin: 0 0;
}

.reworkedSpacing * {
  padding: 0 0;
  margin: 0 0;
}

.pointCounterCardMain {
  max-width: 7em;
}
</style>
