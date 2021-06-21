<template>
  <v-card>
    <v-card-actions>
      <v-btn rounded text @click="showBox">{{ this.titleVal }}</v-btn>
    </v-card-actions>
    <v-textarea
      dense
      outlined
      :value="contentVal"
      v-if="show"
      v-model="content"
    ></v-textarea>
  </v-card>
</template>

<script>
export default {
  props: {
    titleVal: String,
    contentVal: String
  },
  data: function() {
    return {
      show: true,
      content: this.contentVal
    };
  },
  methods: {
    showBox: function() {
      this.show = !this.show;
    }
  }
};
</script>
