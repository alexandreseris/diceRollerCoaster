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
        <v-card-title
          >Statistiques
          <add-new-item
            @new-item="newStat"
            :valueList="
              this.$root.$utilsFunctions.getNameList(this.statsAvailable)
            "
            :excludeList="this.$root.$utilsFunctions.getNameList(this.statList)"
          ></add-new-item>
        </v-card-title>
        <div
          id="globalStatTableContainer"
          :class="['flexRow', 'flexWrap', 'flexSpaceArround']"
        >
          <div id="statTableContainer">
            <v-simple-table dense>
              <tbody>
                <tr v-for="stat in this.statList" :key="stat.name">
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
          <add-new-item
            @new-item="newPointCard"
            :valueList="
              this.$root.$utilsFunctions.getNameList(
                this.pointsCounterAvailable
              )
            "
            :excludeList="
              this.$root.$utilsFunctions.getNameList(this.pointCounterList)
            "
          ></add-new-item>
        </v-card-title>
        <div id="pointCardContainer" :class="['flexRow', 'flexWrap']">
          <point-counter
            v-for="pointCounter in this.pointCounterList"
            @delete-item="deletePointCard(pointCounter)"
            @update-item="updatePointCard"
            :key="pointCounter.name"
            :name-point="pointCounter.name"
            :current-point-val="pointCounter.currentPoint"
            :max-point-val="pointCounter.maxPoint"
            :colorVal="pointCounter.color"
            :isEditable="pointCounter.isEditable"
          ></point-counter>
        </div>
      </v-card>
    </div>
    <div id="textareaContainer">
      <v-card>
        <v-card-title
          >Saisie de texte
          <add-new-item
            @new-item="newTextArea"
            :valueList="
              this.$root.$utilsFunctions.getNameList(this.textAreaAvailable)
            "
            :excludeList="
              this.$root.$utilsFunctions.getNameList(this.textAreaList)
            "
          ></add-new-item>
        </v-card-title>
        <text-area
          v-for="textarea in textAreaList"
          :key="textarea.name"
          :title-val="textarea.name"
          :content-val="textarea.value"
        ></text-area>
      </v-card>
    </div>
  </div>
</template>

<script>
import PointCounter from "@/components/PointCounter";
import TextArea from "@/components/TextArea";
import AddNewItem from "@/components/AddNewItem";

export default {
  name: "Home",
  components: { PointCounter, TextArea, AddNewItem },
  data: function() {
    return {
      characterName: "Jean branlepaune",
      manualRollDiceNumber: 1,
      manualRollDiceFaces: 100,
      rollRes: { value: 0, label: "C'EST PAS BON JEAN MICHEL" },
      statsAvailable: [
        { name: "Force", min: 0, max: 0, value: 100 },
        { name: "Intelligence", min: 0, max: 0, value: 100 },
        { name: "Charisme", min: 0, max: 0, value: 100 },
        { name: "Perception", min: 0, max: 0, value: 100 },
        { name: "Dextérité", min: 0, max: 0, value: 100 },
        { name: "amour", min: 0, max: 0, value: 100 },
        { name: "test1", min: 0, max: 0, value: 100 },
        { name: "toast", min: 0, max: 0, value: 100 }
      ],
      pointsCounterAvailable: [
        {
          name: "PV",
          currentPoint: 0,
          maxPoint: 200,
          color: "primary",
          isEditable: true
        },
        {
          name: "Manamana",
          currentPoint: 0,
          maxPoint: 200,
          color: "secondary",
          isEditable: true
        },
        {
          name: "Moneymoney",
          currentPoint: 0,
          maxPoint: 200,
          color: "accent",
          isEditable: false
        },
        {
          name: "Folie",
          currentPoint: 0,
          maxPoint: 200,
          color: "error",
          isEditable: true
        },
        {
          name: "Faim",
          currentPoint: 0,
          maxPoint: 200,
          color: "warning",
          isEditable: false
        },
        {
          name: "Fatigue",
          currentPoint: 0,
          maxPoint: 200,
          color: "info",
          isEditable: true
        },
        {
          name: "saipa",
          currentPoint: 0,
          maxPoint: 200,
          color: "success",
          isEditable: true
        },
        {
          name: "COUCOU",
          currentPoint: 0,
          maxPoint: 200,
          color: "success",
          isEditable: true
        },
        {
          name: "wazaaa",
          currentPoint: 0,
          maxPoint: 200,
          color: "success",
          isEditable: true
        }
      ],
      textAreaAvailable: [
        { name: "Description", value: "" },
        { name: "Equipement", value: "" },
        { name: "testTextArea", value: "COUCOU" }
      ],
      statList: [
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
        {
          name: "PV",
          currentPoint: 100,
          maxPoint: 200,
          color: "primary",
          isEditable: false
        },
        {
          name: "Manamana",
          currentPoint: 100,
          maxPoint: 200,
          color: "secondary",
          isEditable: true
        },
        {
          name: "Moneymoney",
          currentPoint: 100,
          maxPoint: 200,
          color: "accent",
          isEditable: true
        },
        {
          name: "Folie",
          currentPoint: 100,
          maxPoint: 200,
          color: "error",
          isEditable: true
        },
        {
          name: "Faim",
          currentPoint: 100,
          maxPoint: 200,
          color: "warning",
          isEditable: true
        },
        {
          name: "Fatigue",
          currentPoint: 100,
          maxPoint: 200,
          color: "info",
          isEditable: true
        },
        {
          name: "saipa",
          currentPoint: 100,
          maxPoint: 200,
          color: "success",
          isEditable: false
        }
      ],
      textAreaList: [
        { name: "Description", value: "paysan de 3ieme classe" },
        { name: "Equipement", value: "une faux bien évidemment" }
      ]
    };
  },
  methods: {
    logger: function(obj) {
      console.log(obj);
    },
    newPointCard: function(eventProp) {
      const pointCounterModel = this.$root.$utilsFunctions.getItemByName(
        this.pointsCounterAvailable,
        eventProp.name
      );
      this.pointCounterList.push(pointCounterModel);
    },
    newStat: function(eventProp) {
      const statModel = this.$root.$utilsFunctions.getItemByName(
        this.statsAvailable,
        eventProp.name
      );
      this.statList.push(statModel);
    },
    newTextArea: function(eventProp) {
      const textAreaModel = this.$root.$utilsFunctions.getItemByName(
        this.textAreaAvailable,
        eventProp.name
      );
      this.textAreaList.push(textAreaModel);
    },
    deletePointCard: function(pointCardElem) {
      this.pointCounterList.splice(
        this.pointCounterList.indexOf(pointCardElem),
        1
      );
    },
    updatePointCard: function(event) {
      const obj = this.$root.$utilsFunctions.getItemByName(
        this.pointCounterList,
        event.name
      );
      obj[event.fieldname] = event.value;
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
