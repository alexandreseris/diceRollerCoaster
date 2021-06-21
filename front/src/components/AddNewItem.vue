<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on" :disabled="disabledAddBtn">
        <v-icon>
          mdi-plus-circle-outline
        </v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="item in getAvailableElements(valueList, excludeList)"
        :key="item"
        @click="newItem(item)"
      >
        <v-list-item-title>{{ item }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: {
    valueList: {
      type: Array,
      default: function() {
        return [];
      }
    },
    excludeList: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data: function() {
    return {
      disabledAddBtn: false
    };
  },
  methods: {
    newItem: function(item) {
      this.$emit("insert-elem", { name: item });
    },
    getAvailableElements: function(valueList, excludeList) {
      const filteredList = valueList.filter(function(item) {
        return excludeList.indexOf(item) === -1;
      });
      if (filteredList.length <= 0) {
        this.disabledAddBtn = true;
      } else {
        this.disabledAddBtn = false;
      }
      return filteredList;
    }
  }
};
</script>
