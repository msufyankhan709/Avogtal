<template>
  <v-app>
    <!-- <v-app-bar color="white" dark fixed> -->
     <div v-if="!isMobile">
      <Laptop />
    </div>
    <div v-else>
      <Mobile />
    </div>
      <router-link :to="{ name: 'Home' }">
        <v-img
          style="max-width: 180px; margin-left: 1%"
          src="@/assets/logo.svg"
        ></v-img>
      </router-link>
      <v-spacer></v-spacer>
      <router-link :to="{ name: 'Engineers' }" class="links"
        >For Engineers</router-link
      >
      <v-divider class="mx-4" vertical></v-divider>
      <router-link
        :to="{ name: 'Companies' }"
        class="links"
        style="margin-right: 30%"
        >For Companies</router-link
      >
      <v-spacer></v-spacer>
      <v-btn class="black--text" :ripple="false" @click="HireTalent" text plain>
        Hire Talent
      </v-btn>
      <v-btn class="black--text" :ripple="false" @click="findWork" text plain>
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
                <Contact />
              </v-col>
            </v-row>
            <v-row v-else>
              <v-col>
                <Work />
              </v-col>
            </v-row>
          </v-card>
        </template>
      </v-dialog>
    <!-- </v-app-bar> -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
import Contact from "@/components/Contact.vue";
import Mobile from '@/components/mobile.vue'
import Work from "../src/components/Work.vue";
export default Vue.extend({
  name: "App",
  components: {
    Contact,
    Work,
    Mobile
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
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown ? true : false;
    },
  },
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
