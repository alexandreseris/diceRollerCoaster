<template>
  <md-snackbar
    :md-position="position"
    :md-duration="isInfinity ? Infinity : duration"
    :md-persistent="persistent"
    :md-active.sync="showSnackbar"
    :style="styleObj"
  >
    <span>{{ message }}</span>
    <md-button
      class="md-primary md-icon-button md-dense"
      @click="showSnackbar = false"
    >
      <md-icon>close</md-icon>
    </md-button>
  </md-snackbar>
</template>

<script>
export default {
  props: {
    position: { type: String, default: "center" },
    isInfinity: { type: Boolean, default: true },
    persistent: { type: Boolean, default: false },
    duration: { type: Number, default: 4000 },
    styleObj: { type: Object },
    message: String
  },
  data: function() {
    return {
      showSnackbar: true
    };
  }
};
</script>
