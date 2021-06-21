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
          :title="this.name"
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
        <text-input
          :rules="
            'required|int|range:' +
              currentPointMin.toString() +
              ',' +
              currentPointMax.toString()
          "
          :input-value="currentPointValue"
          @update:input-value="
            currentPointValue = Number($event);
            $emit('update:current-point-value', currentPointValue);
          "
          placeholder="actuel"
          :colorVal="colorVal"
        ></text-input>
      </v-col>
      <v-col>
        <text-input
          :rules="
            'required|int|range:' +
              maxPointMin.toString() +
              ',' +
              maxPointMax.toString()
          "
          :input-value="maxPointValue"
          @update:input-value="
            maxPointValue = Number($event);
            $emit('update:max-point-value', maxPointValue);
          "
          placeholder="max"
          :disabled="!isEditable"
          :colorVal="colorVal"
          prefix="/"
        ></text-input>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import TextInput from "@/components/TextInput";
export default {
  components: { TextInput },
  props: {
    name: String,
    colorVal: String,
    currentPointValue: Number,
    currentPointMin: Number,
    currentPointMax: Number,
    maxPointValue: Number,
    maxPointMin: Number,
    maxPointMax: Number,
    isEditable: { type: Boolean, default: false }
  },
  data: function() {
    return {
      textColor: this.$vuetify.theme.isDark ? "#FFFFFF" : "#000000",
      errorShow: false
    };
  },
  methods: {
    deleteElem: function(item) {
      this.$emit("delete-item", { name: item });
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
