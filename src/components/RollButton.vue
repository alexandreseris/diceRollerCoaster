<template>
  <div class="rollButtonContainer">
    <button v-on:click="this.roll">ROULLLLERRR</button>
    <div>{{ this.rollRes }}</div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      rollRes: 100
    };
  },
  methods: {
    roll: function() {
      // console.log("COUCOU");
      this.rollRes = Math.random();
    }
  }
};
</script>

<style scoped>
div.rollButtonContainer * {
  display: inline;
}
</style>
