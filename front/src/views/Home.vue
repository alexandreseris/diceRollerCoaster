<template>
  <div>
    <v-card width="50%" class="mx-auto">
      <v-card-title>
        <v-btn
          color="accent"
          text
          large
          @click="toogleShowCampaigns"
          class="mx-auto"
          width="100%"
        >
          Campagnes
        </v-btn>
      </v-card-title>
      <v-list v-show="showCampaigns">
        <v-list-item link class="actionText">
          Nouvelle campagne en tant que Maître du jeu<v-icon
            v-text="'mdi-plus-circle-outline'"
            class="iconSpace"
          ></v-icon>
        </v-list-item>
        <v-list-item-group v-model="selectedCampaign">
          <div v-for="campaign in campaignAvailable" :key="campaign.id">
            <v-list-item
              :value="campaign.id"
              :title="
                campaign.playerIsGM
                  ? 'Vous êtes Maître du jeu pour cette campagne'
                  : ''
              "
            >
              <div class="d-flex flex-row">
                {{ campaign.name }}
                <v-icon
                  v-if="campaign.playerIsGM"
                  v-text="'mdi-shield-account'"
                  class="iconSpace"
                ></v-icon>
              </div>
            </v-list-item>
            <v-list v-show="campaign.id === selectedCampaign">
              <v-list-item-group v-model="selectedCharacter">
                <v-list-item
                  v-if="campaign.playerIsGM"
                  class="subListSpacing"
                  :value="campaign.id.toString() + '/gm'"
                  >Maître du jeu
                  <v-icon
                    v-text="'mdi-shield-account'"
                    class="iconSpace"
                  ></v-icon
                ></v-list-item>
                <v-list-item
                  class="subListSpacing"
                  :value="character.id.toString()"
                  v-for="character in campaign.charactersAvailable"
                  :key="character.id.toString()"
                  >{{ character.name }}</v-list-item
                >
                <!-- problem here, the next list item should not update the select value in v-list-item-group cause its an action -->
                <!-- temporary solution: put a specific value which should be watch later to not send it to the server -->
                <v-list-item
                  :value="campaign.id.toString() + '/newChar'"
                  class="actionText subListSpacing"
                  >Nouveau personnage
                  <v-icon
                    v-text="'mdi-plus-circle-outline'"
                    class="iconSpace"
                  ></v-icon
                ></v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      showCampaigns: true,
      selectedCampaign: 1,
      selectedCharacter: "1/2",
      campaignAvailable: [
        {
          id: 1,
          name: "test",
          charactersAvailable: [
            { name: "Thierry", id: "1/1" },
            { name: "Michel", id: "1/2" }
          ],
          playerIsGM: false
        },
        {
          id: 2,
          name: "toast",
          charactersAvailable: [],
          playerIsGM: true
        },
        {
          id: 3,
          name: "tist",
          charactersAvailable: [{ name: "machin", id: "3/1" }],
          playerIsGM: true
        },
        {
          id: 4,
          name: "tust",
          charactersAvailable: [],
          playerIsGM: false
        }
      ]
    };
  },
  methods: {
    toogleShowCampaigns: function() {
      this.showCampaigns = !this.showCampaigns;
    }
  }
};
</script>

<style scoped>
.iconSpace {
  margin-left: 1em;
}
.subListSpacing {
  margin-left: 2em;
}
.actionText {
  font-style: italic;
}
</style>
