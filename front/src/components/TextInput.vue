<template>
  <validation-provider :rules="rules">
    <template v-slot="{ errors, valid, invalid }">
      <v-text-field
        ref="currentinput"
        v-model="inputValue"
        :color="colorVal"
        :placeholder="placeholder"
        :hide-details="large ? false : 'auto'"
        :class="[invalid && colorVal === 'error' ? 'errorColorManaging' : '']"
        :error="invalid"
        :prefix="prefix"
        :disabled="disabled"
        @change="
          if (valid) {
            lastValidValue = String(inputValue);
            $emit('update:input-value', inputValue);
          }
        "
      ></v-text-field>
      <v-tooltip
        :top="errorPosition === 'top' ? true : false"
        :bottom="errorPosition === 'bottom' ? true : false"
        :left="errorPosition === 'left' ? true : false"
        :right="errorPosition === 'right' ? true : false"
        color="error"
        open-on-hover
        :activator="$refs.currentinput"
        :disabled="valid"
      >
        <!-- use of activator is mandatory cause validation-provider expect his first children to be an input and v-tooltip without the activator prop need to wrap the activator (the input here) -->
        <template v-slot:default>
          <span>{{
            errors[0] +
              " (dernière valeur valide enregistée: " +
              String(lastValidValue) +
              ")"
          }}</span>
        </template>
      </v-tooltip>
    </template>
  </validation-provider>
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
  components: {
    ValidationProvider
  },
  props: {
    rules: { type: String, default: "" },
    inputValue: { type: [Number, String], required: true },
    colorVal: { type: String, default: "primary" },
    placeholder: { type: String, default: "votre valeur" },
    large: { type: Boolean, default: false },
    errorPosition: { type: String, default: "bottom" },
    prefix: { type: String, default: "" },
    disabled: { type: Boolean, default: false }
  },
  data: function() {
    return {
      lastValidValue: ""
    };
  }
};
</script>

<style scoped>
/* specific rule for input with error color */
.v-application .error--text.errorColorManaging {
  color: var(--v-warning-base) !important;
  caret-color: var(--v-warning-base) !important;
}
</style>
