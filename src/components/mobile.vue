<template>
  <v-app>
    <v-app-bar fixed   flat
      v-scroll="onScroll"
      :color="!isScrolling ? 'transparent' : 'rgb(0, 39, 46)'" outlined clipped-left>
      <v-app-bar-nav-icon
        class="mb-1" dark
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
       <v-spacer></v-spacer>
       <!-- <router-link class="mb-5" to="/">
        <v-img
          class=""
           max-height="50px" max-width="50px"
          src="./../../public/logo.png"
        ></v-img></router-link> -->
      <!-- <v-img src="../../public/logo.png" max-height="50px" max-width="50px"></v-img> -->
    </v-app-bar>
    <v-navigation-drawer color="rgb(0, 39, 46)" v-model="drawer" app temporary>
      <v-list-item>
        <!-- <v-img
          class="mt-2"
           height="50px" width="55px"
          src="./../../public/logo.png"
        ></v-img> -->
        <!-- <v-img
          class="mt-2"
          height="50px"
          width="55px"
          src="../../public/logo.png"
        ></v-img> -->
        <v-timeline class="ml-6" dark></v-timeline>
        <v-list-item-title class="ml-4 white--text">
          Futuris Tech
        </v-list-item-title>
      </v-list-item>
      <v-divider class="white"></v-divider>
      <v-list-item
        :to="link.route"
        v-for="link in links"
        :key="link.id"
        class="mt-n1"
        style="text-decoration:none"
      >
        <span class="white--text">{{ link.name }}</span>
      </v-list-item>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import Main from "./Main.vue";
// import Video from "./Video.vue";
export default {
  name: "Mobile",
  components: {
    // Main,
    // Video,
  },
  data() {
    return {
      drawer: false,
         showLogo: false,
      isScrolling: false,
      activeClassExact: "exact-path",
      links: [
        { name: "home", route: "/" },
        { name: "For Engineers", route: "/for engineers" },
        { name: "For Companies", route: "/for companies" },
        { name: "HIRE TILENT", route: "/hire tilentd" },
        { name: "FIND WORK", route: "/find work" },
      ],
    };
  },
  methods: {
   onScroll() {
      const offset = window.pageYOffset;
      this.isScrolling = offset > 50;
      this.showLogo = offset > 200;
    },
  },
};
</script>
