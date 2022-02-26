<template>
  <v-app>
    <v-app-bar color="white" dark fixed>
      <router-link :to="{ name: 'Home' }">
        <v-img
          style="max-width: 180px; margin-left: 1%"
          src="@/assets/logo.svg"
        ></v-img>
      </router-link>
      <v-spacer></v-spacer>
      <router-link
        :to="{ name: 'Engineers' }"
        class="links"
        >For Engineers</router-link
      >
      <v-divider class="mx-4" vertical></v-divider>
      <router-link
        :to="{name:'Companies'}"
        class="links"
        style="margin-right: 30%"
        >For Companies</router-link
      >
      <v-spacer></v-spacer>
     <router-link
        :to="{name:'Companies'}"
        class="links"
        >Hire Talent</router-link>
 <router-link
        :to="{name:'Companies'}"
        class="links"
        >Find Work</router-link>

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
  color: rgb(29, 2, 2);
}
.links:hover {
  font: 1em sans-serif;
  box-shadow: 10px 11px 2px rgba(26, 30, 228, 0.63);
}
</style>
