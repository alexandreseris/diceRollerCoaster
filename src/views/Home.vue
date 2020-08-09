<template>
  <div id="mainVue" class="vueContainer">
    <md-field md-inline>
      <md-input v-model="characterName"></md-input>
    </md-field>
    <div class="rollContainer">
      <md-field>
        <label>Saisie Manuelle</label>
        <md-input v-model="manualRollInput" type="number"></md-input>
      </md-field>
      <div class="rollButtonContainer">
        <md-button
          v-on:click="this.roll"
          class="md-theme-info md-raised md-primary"
          >ROULLLLERRR</md-button
        >
        <md-toolbar class="md-accent md-title">{{ this.rollRes }}</md-toolbar>
      </div>
    </div>
    <div class="statContainer">
      <div class="statValueTable">
        <md-table>
          <md-table-row v-for="stat in statList" v-bind:key="stat.name">
            <md-table-cell>{{ stat.name }}</md-table-cell>
            <md-table-cell>{{ stat.value }}</md-table-cell>
          </md-table-row>
        </md-table>
      </div>
      <div class="statIntervalTable">
        <md-table>
          <md-table-row v-for="int in statIntervals" v-bind:key="int">
            <md-table-cell>{{ int }}</md-table-cell>
            <md-table-cell>0</md-table-cell>
          </md-table-row>
        </md-table>
      </div>
    </div>
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
import PointCounter from "@/components/PointCounter.vue";
import TextInput from "@/components/TextInput.vue";

export default {
  name: "Home",
  components: {
    PointCounter,
    TextInput
  },
  data: function() {
    return {
      pointLs: [
        { name: "Santé", current: 123, max: 300 },
        { name: "Mana", current: 2, max: 10000 }
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
      ],
      rollRes: 100,
      characterName: "JEAN MIMI",
      manualRollInput: 0
    };
  },
  methods: {
    roll: function() {
      this.rollRes = String(Math.random()).slice(0, 5);
    }
  }
};
</script>

<style scoped>
div.rollContainer {
  display: flex;
}
div.statContainer > * {
  display: inline-block;
}
div.pointContainer * {
  display: inline-block;
}
</style>
