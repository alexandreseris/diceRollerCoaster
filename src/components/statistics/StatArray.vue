<template>
  <div>
    <table>
      <tr v-for="stat in statList" v-bind:key="stat.name">
        <td>{{ stat.name }}</td>
        <td>{{ stat.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    statList: Array
  }
};
</script>
