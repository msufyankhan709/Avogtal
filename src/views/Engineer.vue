<template>
  <div>
    <page2 />
    <fouter />
    <mobile />
  </div>
</template>

<script>
import fouter from "@/components/Footer.vue";
import page2 from "@/components/page2.vue";
import mobile from "@/components/mobile.vue";
export default {
  name: "vapp",
  components: {
    fouter,
    page2,
    mobile
  },
};
</script>

<style>
</style>