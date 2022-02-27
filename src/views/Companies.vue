<template>
  <div>
    <page-3 />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import page3 from "@/components/page3.vue";
export default {
  name: "vapp",
  components: {
    Footer,
    page3,
  },
};
</script>

<style>
</style>