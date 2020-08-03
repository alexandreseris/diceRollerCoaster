<template>
  <div id="mainVue" class="vueContainer">
    <character-name />
    <div class="rollContainer">
      <manual-input />
      <roll-button />
    </div>
    <div>Statistiques</div>
    <div class="statContainer">
      <stat-array v-bind:statList="statList" />
      <stat-intervals v-bind:statIntervals="statIntervals" />
    </div>
    <div>Points</div>
    <div class="pointContainer">
      <point-counter
        v-for="pointElem in pointLs"
        v-bind:key="pointElem.name"
        v-bind:name-point="pointElem.name"
        v-bind:current-point="pointElem.current"
        v-bind:max-point="pointElem.max"
      />
    </div>
    <text-input
      v-for="textBox in textBoxes"
      v-bind:key="textBox"
      v-bind:name-box="textBox"
    />
  </div>
</template>

<script>
import CharacterName from "@/components/CharacterName.vue";
import ManualInput from "@/components/ManualInput.vue";
import RollButton from "@/components/RollButton.vue";
import StatArray from "@/components/statistics/StatArray.vue";
import StatIntervals from "@/components/statistics/StatIntervals.vue";
import PointCounter from "@/components/PointCounter.vue";
import TextInput from "@/components/TextInput.vue";

export default {
  name: "Home",
  components: {
    CharacterName,
    ManualInput,
    RollButton,
    StatArray,
    StatIntervals,
    PointCounter,
    TextInput
  },
  data: function() {
    return {
      pointLs: [
        { name: "LALA", current: 123, max: 300 },
        { name: "LOLO", current: 2, max: 10000 }
      ],
      textBoxes: ["Notes", "Equipement", "Description"],
      statList: [
        { name: "for", value: 10 },
        { name: "int", value: 20 },
        { name: "char", value: 30 }
      ],
      statIntervals: [
        "Echec critique",
        "Echec",
        "Réussite",
        "Réussite critique"
      ]
    };
  }
};
</script>

<style scoped>
div.rollContainer {
  display: flex;
}
div.statContainer * {
  display: inline-block;
}
div.pointContainer * {
  display: inline-block;
  border: 1px solid black;
}
</style>
