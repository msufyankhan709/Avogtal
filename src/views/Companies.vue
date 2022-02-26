<template>
  <div>
    <page-3 />
    <fouter />
  </div>
</template>

<script>
import fouter from "@/components/fouter.vue";
import page3 from "@/components/page3.vue";
export default {
  name: "vapp",
  components: {
    fouter,
    page3,
  },
};
</script>

<style>
</style>