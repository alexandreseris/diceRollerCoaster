<template>
  <div class="profilList vueContainer">
    <character-list
      v-for="[profil, characterList] in Object.entries(profilList)"
      v-bind:key="profil"
      v-bind:characterList="characterList"
      v-bind:profilName="profil"
    ></character-list>
  </div>
</template>

<script>
import CharacterList from "@/components/CharacterList.vue";
export default {
  components: {
    CharacterList
  },
  data: function() {
    return {
      profilList: {
        // données bidons pour test
        // eslint-disable-next-line prettier/prettier
        sify: ["jeanjean", "machin", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE"],
        // eslint-disable-next-line
        fantaisie: ["MICHEL", "guenievre", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE"],
        // eslint-disable-next-line
        fantaisie2: ["MICHEL", "guenievre", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE"],
        // eslint-disable-next-line
        fantaisie3: ["MICHEL", "guenievre", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE"],
        // eslint-disable-next-line
        fantaisie4: ["MICHEL", "guenievre", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE"],
        // eslint-disable-next-line
        fantaisie5: ["MICHEL", "guenievre", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE"],
        // eslint-disable-next-line
        fantaisie6: ["MICHEL", "guenievre", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE"],
        // eslint-disable-next-line
        fantaisie7: ["MICHEL", "guenievre", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE"],
        // eslint-disable-next-line
        fantaisie8: ["MICHEL", "guenievre", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE", "MICHMICHE"] 
      }
    };
  }
};
</script>
