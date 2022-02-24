<template>
  <v-app>
  <v-toolbar
    color="blue"
    dark
  >
  <v-img style="max-width: 200px;margin-left: 5%" src="@/assets/logo.svg"></v-img>
     <v-toolbar-title style="margin-left: 100px">For Companies</v-toolbar-title>

    <v-divider
      class="mx-4"
      vertical
    ></v-divider>

    <span class="subheading">For Engineers</span>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text>
       Hire Talent
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn text>
        Find Work
      </v-btn>

      <v-divider vertical></v-divider>

  

      <v-divider vertical></v-divider>
    </v-toolbar-items>

    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </v-toolbar>

        <vapp />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Vapp from './components/vapp.vue';
export default Vue.extend({
  name: 'App',
  components:{

    Vapp
  },

  data: () => ({
    //
  }),
});
</script>
