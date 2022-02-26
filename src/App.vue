<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn dark :ripple="false" @click="HireTalent" text plain>
        Hire Talent
      </v-btn>
      <v-btn dark :ripple="false" @click="findWork" text plain>
        Find Work
      </v-btn>
      <v-dialog
        transition="dialog-bottom-transition"
        fullscreen
        v-model="dialog"
      >
        <template v-slot:default>
          <v-card>
            <v-row>
              <v-col cols="12" class="text-right">
                <v-btn text fab @click="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn></v-col
              >
            </v-row>
            <v-row v-if="!show2nd">
              <v-col>
                <contact />
              </v-col>
            </v-row>
          <v-row v-else>
            <v-col>
              <work />
            </v-col>
          </v-row>
          </v-card>
        </template>
      </v-dialog>
    </v-app-bar>

    <v-main>
      <Home />

      <router-view />
    </v-main>
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
import Home from "./views/Home.vue";
import work from "./components/Test.vue";
import Contact from "./components/Contact.vue";

export default Vue.extend({
  name: "App",
  components: {
    Home,
    work,

    Contact,
  },

  data: () => ({
    //
    dialog: false,
    show2nd: false,
  }),
  methods: {
    HireTalent() {
      this.dialog = true;
      this.show2nd = false;
    },
    findWork() {
      this.dialog = true;
      this.show2nd = true;
    },
  },
});
</script>
