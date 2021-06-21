import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    campaignInfo: {
      namespaced: true,
      state: {
        name: "",
        players: [], // {name, isConnected, isGM, character}
        sessionNotes: { beginTime: null, endTime: null, content: "" },
        sessionNotesHistory: [], // {beginTime, endTime, content}
        chatLines: [] // {time, player, character, content}
      },
      mutations: {},
      actions: {}
    },
    characterInfo: {
      namespaced: true,
      state: {
        name: "",
        subtitle: "",
        isOutOfGame: false,
        stats: [], // {name, value}
        points: [], // {name, current, max}
        equipments: [], // {name, notes}
        freeInputs: [], // {name, value}
        manualRoll: { diceNumber: 0, diceFaces: 0 }
      },
      mutations: {},
      actions: {}
    },
    userInfos: {
      namespaced: true,
      state: {
        charactersAvailableForCurrentCampaign: [], // {name, subtitle, isOutOfGame}
        campaignAvailable: [], // {name, playersConnected: [{name}]}
        friends: [] // {playerName}
      },
      mutations: {},
      actions: {}
    },
    userParam: {
      namespaced: true,
      state: {
        darkMode: true
      },
      mutations: {},
      actions: {}
    }
  }
});
