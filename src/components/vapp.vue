<template>
  <div>
    <page2 />
    <home />
    <fouter />
  </div>
</template>

<script>
import home from "./home.vue";
import fouter from "./fouter.vue";
import page2 from "./page2.vue";
export default {
  name: "vapp",
  components: {
    home,
    fouter,
    page2,
  },
};
</script>

<style>
</style>