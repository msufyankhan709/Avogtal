<template>
  <v-app>
    <v-app-bar color="blue" dark fixed>
      <router-link :to="{ name: 'Home' }">
        <v-img
          style="max-width: 180px; margin-left: 1%"
          src="@/assets/logo.svg"
        ></v-img>
      </router-link>
      <v-spacer></v-spacer>
      <router-link
        :to="{ name: 'Companies' }"
        class="links"
        >For Engineers</router-link
      >
      <v-divider class="mx-4" vertical></v-divider>
      <router-link
        :to="{name:'Engineers'}"
        class="links"
        >For Companies</router-link
      >
      <v-spacer></v-spacer>
        <v-btn text> Hire Talent </v-btn>
        <v-divider vertical></v-divider>
        <v-btn text> Find Work </v-btn>
        <v-divider vertical></v-divider>
        <v-divider vertical></v-divider>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "App",
  components: {},

  data: () => ({
    //
  }),
});
</script>
<style lang="scss" scoped>
.links {
  padding: 10px;
  margin: 1%;
  text-decoration: none;
  color: whitesmoke;
}
.links:hover {
  font: 1em sans-serif;
  box-shadow: 10px 11px 2px rgba(1, 2, 59, 0.63);
}
</style>
