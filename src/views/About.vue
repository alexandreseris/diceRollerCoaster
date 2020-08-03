<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Coucou/>
  </div>
</template>

<script>
// @ is an alias to /src
import Coucou from "@/views/Coucou.vue";

export default {
  name: "Home",
  components: {
    Coucou
  }
};
</script>
