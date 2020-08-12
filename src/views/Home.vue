<template>
  <div id="mainVue" class="vueContainer">
    <message-box message="tatamère"></message-box>
    <md-field md-inline>
      <md-input v-model="characterName"></md-input>
    </md-field>
    <div class="rollContainer">
      <div class="manualInputContainer">
        <md-field>
          <label>Saisie Manuelle</label>
          <md-input
            v-model="manualRollNumberDice"
            type="number"
            :min="manualRollNumberDiceIntervals[0]"
            :max="manualRollNumberDiceIntervals[1]"
            v-on:change="
              checkInputIntervals($event, manualRollNumberDiceIntervals)
            "
          ></md-input>
        </md-field>
        <md-toolbar class="md-dense md-transparent" md-elevation="0"
          >dés</md-toolbar
        >
        <md-field>
          <md-input
            v-model="manualRollValue"
            type="number"
            :min="manualRollValueIntervals[0]"
            :max="manualRollValueIntervals[1]"
            v-on:change="checkInputIntervals($event, manualRollValueIntervals)"
          ></md-input>
        </md-field>
      </div>
      <div class="rollButtonContainer">
        <md-button v-on:click="roll" class="md-theme-info md-raised md-primary"
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
import MessageBox from "@/components/MessageBox.vue";

export default {
  name: "Home",
  components: {
    PointCounter,
    TextInput,
    MessageBox
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
      manualRollNumberDice: 0,
      manualRollValue: 0,
      manualRollNumberDiceIntervals: [1, 100],
      manualRollValueIntervals: [2, 1000]
    };
  },
  methods: {
    checkInputIntervals: function(event, interval) {
      console.log("EVENEMENT");
      console.log(event);
      let invalidInput = false;
      if (isNaN(event.target.value)) {
        invalidInput = true;
      } else {
        let inpVal = parseInt(event.target.value, 10);
        if (inpVal < interval[0] || inpVal > interval[1]) {
          invalidInput = true;
        }
      }
      if (invalidInput) {
        event.target.classList.add("invalidForm");
      } else {
        event.target.classList.remove("invalidForm");
      }
    },
    roll: function() {
      this.rollRes = String(Math.random()).slice(0, 5);
    }
  }
};
</script>

<style scoped>
div.rollContainer,
.rollButtonContainer,
.manualInputContainer {
  display: flex;
  justify-content: space-between;
}
div.statContainer > * {
  display: inline-block;
}
div.pointContainer * {
  display: inline-block;
}
</style>
