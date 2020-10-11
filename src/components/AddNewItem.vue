<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>
          mdi-plus-circle-outline
        </v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="item in valueList.filter(function(item) {
          return excludeList.indexOf(item) === -1;
        })"
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
  methods: {
    newItem: function(item) {
      this.$emit("new-item", { name: item });
    }
  }
};
</script>
