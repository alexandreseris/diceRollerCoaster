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
        <validation-provider
          :rules="
            'required|int|range:' +
              currentPointMin.toString() +
              ',' +
              currentPointMax.toString()
          "
        >
          <template v-slot="{ errors, valid, invalid }">
            <v-text-field
              ref="currentpointinput"
              :error="invalid"
              v-model="currentPointValue"
              placeholder="actuel"
              hide-details="auto"
              @change="
                if (valid) {
                  $emit('update:currentPointValue', Number(currentPointValue));
                }
              "
            ></v-text-field>
            <v-tooltip
              bottom
              color="error"
              open-on-hover
              :activator="$refs.currentpointinput"
            >
              <!-- use of activator is mandatory cause validation-provider expect the first children to be an input and v-tooltip withouth activator prop need to wrap the activator (the input here) -->
              <!-- :disabled="errors.length === 0" does not update, should use a computed prop instead? -->
              <template v-slot:default>
                <span>{{ errors[0] }}</span>
              </template>
            </v-tooltip>
          </template>
        </validation-provider>
      </v-col>
      <v-col>
        <v-text-field
          :disabled="!isEditable"
          prefix="/"
          v-model="maxPointValue"
          placeholder="max"
          hide-details="auto"
          @change="
            if (valid) {
              $emit('update:maxPointValue', Number(maxPointValue));
            }
          "
        >
        </v-text-field>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { ValidationProvider, extend } from "vee-validate";
import { required, integer, between } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "champs obligatoire"
});

extend("int", {
  ...integer,
  message: "nombre entier attendu"
});

extend("range", {
  ...between,
  message: "le champs doit etre compris entre {min} et {max}"
});

export default {
  components: { ValidationProvider },
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
