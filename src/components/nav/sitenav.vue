<template>
  <v-app>
    <v-app-bar height="70px" app flat color="white">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mr-2">
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <img :src="require('@/assets/logo.png')" alt="" />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      floating
      color="white"
      hide-overlay
    >
      <v-list-item>
        <v-list-item-title>
          <v-btn @click="drawer = !drawer" text fab>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item-group>
        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.id"
            :to="link.route"
            text
            :ripple="false"
          >
            <span class="ml-4">{{ link.name }}</span>
          </v-list-item>
        </v-list>
      </v-list-item-group>
      <br />
      <v-divider dark></v-divider>
      <template v-slot:append>
        <div>
          <v-btn class="hotpink ml-12" x-large>
            <router-link to="/get-started">
              <span> Get Started</span>
            </router-link>
          </v-btn>
        </div>
        <br />
        <v-flex class="mt-4" xs11>
          <v-row>
            <v-col
              cols="2"
              class="ml-2"
              v-for="link in socialLinks"
              :key="link.id"
            >
              <v-btn :href="link.link" fab x-small>
                <v-icon medium color="darkNavy">{{ link.icon }}</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-flex>
      </template>
    </v-navigation-drawer>
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class SiteNav extends Vue {
  public drawer = false;
  private links = [
    { name: "K-12 Classes", route: "k-twelve" },
    { name: "Adult Classes", route: "/adult" },
    { name: "Tutors", route: "/tutors" },
    { name: "About", route: "/about" },
    { name: "Trial ", route: "/trial" },
    { name: "Contact Us ", route: "/contact" },
    { name: "FAQ ", route: "/faq" },
  ];
  private socialLinks = [
    {
      id: 1,
      icon: "mdi-instagram",
      link: "https://www.instagram.com/",
    },
    {
      id: 2,
      icon: "mdi-linkedin",
      link: "https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Ffeed%2F&trk=login_reg_redirect",
    },
    {
      id: 3,
      icon: "mdi-facebook",
      link: "https://web.facebook.com/?_rdc=1&_rdr",
    },
    {
      id: 4,
      icon: "mdi-google",
      link: "https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin",
    },
  ];

  private group(): void {
    this.drawer = !this.drawer;
  }
}
</script>
