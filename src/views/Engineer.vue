<template>
  <div>
    <page2 />
    <fouter />
  </div>
</template>

<script>
import fouter from "@/components/Footer.vue";
import page2 from "@/components/page2.vue";
export default {
  name: "vapp",
  components: {
    fouter,
    page2,
  },
};
</script>

<style>
</style>