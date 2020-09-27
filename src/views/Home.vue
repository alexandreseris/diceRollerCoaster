<template>
  <div :class="['vueContainerInner', 'flexCol', 'flexSpaceArround']">
    <div>
      <v-text-field
        color="accent"
        class="centerElem"
        placeholder="Nom du personnage"
        prepend-inner-icon="mdi-account"
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
          ></v-text-field>
          <v-text-field
            id="diceFaces"
            color="secondary"
            prepend-inner-icon="mdi-dice-6"
            placeholder="Nombre de face"
          ></v-text-field>
        </div>
        <div id="rollActionContainer" class="centerElem">
          <v-card :class="['d-flex']">
            <v-card-actions>
              <v-btn id="rollButton" fab small color="accent">
                <v-icon dark>
                  mdi-dice-multiple
                </v-icon>
              </v-btn></v-card-actions
            >
            <v-card-text>text</v-card-text>
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
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>test</td>
                  <td>toast</td>
                </tr>
                <tr>
                  <td>test</td>
                  <td>toast</td>
                </tr>
              </tbody>
            </v-simple-table>
          </div>
          <div id="intervalStatTableContainer">
            <v-simple-table dense>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>test</td>
                  <td>toast</td>
                </tr>
                <tr>
                  <td>test</td>
                  <td>toast</td>
                </tr>
              </tbody>
            </v-simple-table>
          </div>
        </div>
      </v-card>
    </div>

    <div id="pointContainer">
      <v-card>
        <v-card-title>Points</v-card-title>
        <div id="pointCardContainer" :class="['flexRow', 'flexWrap']">
          <point-counter
            :name-point="'PV'"
            :current-point="100"
            :max-point="200"
            :colorVal="'error'"
          ></point-counter>
          <point-counter
            :name-point="'MANAMANA'"
            :current-point="100"
            :max-point="200"
            :colorVal="'info'"
          ></point-counter>
          <point-counter
            :name-point="'BLABLA'"
            :current-point="100"
            :max-point="200"
            :colorVal="'warning'"
          ></point-counter>
          <point-counter
            :name-point="'BLABLA'"
            :current-point="100"
            :max-point="200"
            :colorVal="'warning'"
          ></point-counter>
          <point-counter
            :name-point="'BLABLA'"
            :current-point="100"
            :max-point="200"
            :colorVal="'warning'"
          ></point-counter>
          <point-counter
            :name-point="'BLABLASFDVfffffSFVSVs'"
            :current-point="100"
            :max-point="200"
            :colorVal="'warning'"
          ></point-counter>
        </div>
      </v-card>
    </div>

    <div id="textareaContainer">
      <text-area title-val="bonjour" content-val=""></text-area>
      <text-area title-val="blabla" content-val="COUILLE"></text-area>
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
    return {};
  }
};
</script>
