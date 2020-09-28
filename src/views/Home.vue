<template>
  <div :class="['vueContainerInner', 'flexCol', 'flexSpaceArround']">
    <div>
      <v-text-field
        color="accent"
        class="centerElem"
        placeholder="Nom du personnage"
        prepend-inner-icon="mdi-account"
        v-model="characterName"
      ></v-text-field>
    </div>

    <div>
      <div id="rollContainer" :class="['flexRow', 'flexWrap']">
        <div id="manualRollContainer" :class="['flexRow', 'flexWrap']">
          <v-text-field
            id="dicNumber"
            color="secondary"
            prepend-inner-icon="mdi-dice-6"
            placeholder="Nombre de dés"
            v-model="manualRollDiceNumber"
          ></v-text-field>
          <v-text-field
            id="diceFaces"
            color="secondary"
            prepend-inner-icon="mdi-dice-6"
            placeholder="Nombre de face"
            v-model="manualRollDiceFaces"
          ></v-text-field>
        </div>
        <div id="rollActionContainer" class="centerElem">
          <v-card :class="['d-flex']">
            <v-card-actions>
              <v-btn id="rollButton" fab small color="accent" @click="roll">
                <v-icon>
                  mdi-dice-multiple
                </v-icon>
              </v-btn></v-card-actions
            >
            <v-card-text :title="this.rollRes.rollResLabel" id="rollResText">{{
              this.rollRes.value
            }}</v-card-text>
          </v-card>
        </div>
      </div>
    </div>

    <div id="statContainer">
      <v-card>
        <v-card-title>Statistiques</v-card-title>
        <div
          id="globalStatTableContainer"
          :class="['flexRow', 'flexWrap', 'flexSpaceArround']"
        >
          <div id="statTableContainer">
            <v-simple-table dense>
              <tbody>
                <tr v-for="stat in this.statTable" :key="stat.name">
                  <td>{{ stat.name }}</td>
                  <td>{{ stat.value }}</td>
                </tr>
              </tbody>
            </v-simple-table>
          </div>
          <div id="intervalStatTableContainer">
            <v-simple-table dense class="noTextSelection">
              <tbody>
                <tr
                  v-for="stat in this.statIntervalTable"
                  :key="stat.name"
                  :style="{ backgroundColor: stat.color }"
                >
                  <td>{{ stat.name }}</td>
                  <td>{{ stat.value }}</td>
                </tr>
              </tbody>
            </v-simple-table>
          </div>
        </div>
      </v-card>
    </div>

    <div id="pointContainer">
      <v-card>
        <v-card-title
          >Points
          <v-btn icon id="newPointCard" @click="newPointCard">
            <v-icon>
              mdi-plus-circle-outline
            </v-icon>
          </v-btn></v-card-title
        >
        <div id="pointCardContainer" :class="['flexRow', 'flexWrap']">
          <point-counter
            v-for="pointCounter in this.pointCounterList"
            :key="pointCounter.name"
            :name-point="pointCounter.name"
            :current-point-val="pointCounter.current"
            :max-point-val="pointCounter.max"
            :colorVal="pointCounter.color"
          ></point-counter>
        </div>
      </v-card>
    </div>
    <div id="textareaContainer">
      <text-area
        v-for="textarea in textAreaList"
        :key="textarea.name"
        :title-val="textarea.name"
        :content-val="textarea.value"
      ></text-area>
    </div>
  </div>
</template>

<script>
import PointCounter from "@/components/PointCounter";
import TextArea from "@/components/TextArea";

export default {
  name: "Home",
  components: { PointCounter, TextArea },
  data: function() {
    return {
      characterName: "Jean branlepaune",
      manualRollDiceNumber: 1,
      manualRollDiceFaces: 100,
      rollRes: { value: 0, label: "C'EST PAS BON JEAN MICHEL" },
      statTable: [
        { name: "Force", value: 100 },
        { name: "Intelligence", value: 50 },
        { name: "Charisme", value: 10 },
        { name: "Perception", value: 2 },
        { name: "Dextérité", value: 75 },
        { name: "amour", value: -40 }
      ],
      statIntervalTable: [
        {
          name: "Echec critique",
          value: 100,
          color: this.$vuetify.theme.themes[
            this.$vuetify.theme.isDark ? "dark" : "light"
          ].error
        },
        {
          name: "Echec mineur",
          value: 60,
          color: this.$vuetify.theme.themes[
            this.$vuetify.theme.isDark ? "dark" : "light"
          ].warning
        },
        {
          name: "Réussite mineure",
          value: 23,
          color: this.$vuetify.theme.themes[
            this.$vuetify.theme.isDark ? "dark" : "light"
          ].info
        },
        {
          name: "Réussite majeure",
          value: 5,
          color: this.$vuetify.theme.themes[
            this.$vuetify.theme.isDark ? "dark" : "light"
          ].success
        }
      ],
      pointCounterList: [
        { name: "PV", current: 100, max: 200, color: "primary" },
        { name: "Manamana", current: 100, max: 200, color: "secondary" },
        { name: "Moneymoney", current: 100, max: 200, color: "accent" },
        { name: "Folie", current: 100, max: 200, color: "error" },
        { name: "Faim", current: 100, max: 200, color: "warning" },
        { name: "Fatigue", current: 100, max: 200, color: "info" },
        { name: "saipa", current: 100, max: 200, color: "success" }
      ],
      textAreaList: [
        { name: "Description", value: "paysan de 3ieme classe" },
        { name: "Equipement", value: "une faux bien évidemment" }
      ]
    };
  },
  methods: {
    newPointCard: function() {
      this.pointCounterList.push({ name: "", current: 0, max: 0, color: "" });
    },
    roll: function() {
      this.rollRes.value = Math.round(Math.random() * 100);
    }
  }
};
</script>

<style scoped>
#rollResText {
  width: 5em;
}
</style>
