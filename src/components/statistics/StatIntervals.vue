<template>
  <div>
    <table>
      <tr v-for="int in statIntervals" v-bind:key="int">
        <td>{{ int }}</td>
        <td>0</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    statIntervals: Array
  }
};
</script>
