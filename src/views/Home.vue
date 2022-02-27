<template>
  <div>
    <home />
    <Footer />
  </div>
</template>
<script>
import home from "../components/home.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Home",
  components: {
    home,
    Footer,
  },
};
</script>

<style>
</style>