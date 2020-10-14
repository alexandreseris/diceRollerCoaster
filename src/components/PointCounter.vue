<template>
  <v-card
    :class="['centerElem', 'reworkedSpacing', 'pointCounterCardMain']"
    :color="this.colorVal"
    width="33%"
  >
    <v-row no-gutters>
      <v-col cols="8">
        <v-card-subtitle
          :style="{ color: this.textColor }"
          :class="['pointCounterName']"
        >
          {{ this.name }}
        </v-card-subtitle>
      </v-col>
      <v-col>
        <v-btn icon small class="float-right" @click="deleteElem(name)">
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-text-field
          :value="this.currentPoint"
          v-model="currentPoint"
          placeholder="actuel"
          hide-details="auto"
          @change="
            updateField({
              name: name,
              fieldname: 'currentPoint',
              value: Number(currentPoint)
            })
          "
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          prefix="/"
          :value="this.maxPoint"
          v-model="maxPoint"
          placeholder="max"
          :disabled="!this.isEditable"
          hide-details="auto"
          @change="
            updateField({ name: name, fieldname: 'maxPoint', value: Number(maxPoint) })
          "
        ></v-text-field>
      </v-col>
    </v-row>
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
      maxPoint: this.maxPointVal,
      textColor: this.$vuetify.theme.isDark ? "#FFFFFF" : "#000000"
    };
  },
  methods: {
    deleteElem: function(item) {
      this.$emit("delete-item", { name: item });
    },
    updateField: function(fieldDescription) {
      this.$emit("update-item", fieldDescription);
    }
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

.pointCounterName {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
