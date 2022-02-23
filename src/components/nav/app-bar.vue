<template>
  <v-app>
    <v-app-bar
      class="bar"
      height="70px"
      app
      :flat="!isScrolling"
      v-scroll="onScroll"
      :color="!isScrolling ? 'transparent' : 'white'"
    >
      <img :src="require('@/assets/logo.svg')" height="50px" />
      <v-btn
        v-for="link in links"
        :key="link.id"
        :to="link.route"
        text
        class="mx-lg-2"
        :ripple="false"
      >
        <span class="black--text text-subtitle-2 font-weight-bold">
          {{ link.name }}
        </span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in linkes"
        :key="link.id"
        :to="link.route"
        text
        class="mx-lg-2"
        :ripple="false"
      >
        <span class="black--text text-subtitle-2 font-weight-bold">
          {{ link.name }}
        </span>
      </v-btn>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "Appbar",
  components: {},
  data() {
    return {
      hover: false,
      isScrolling: false,
      links: [
        { name: "For Companies", route: "/k-twelve" },
        { name: "For Engineers", route: "/adult" },
      ],
      linkes: [
        { name: "Hire talent", route: "/k-twelve" },
        { name: "Find work", route: "/adult" },
      ],
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    onScroll() {
      const offset = window.pageYOffset;
      this.isScrolling = offset > 50;
      this.showLogo = offset > 200;
    },
  },
};
</script>

<style scoped>
.bar {
  color: white;
}
.v-btn {
  margin: 1% 2%;
  padding: auto;
  text-decoration: none;
}
.v-btn span {
  margin: 0% 10%;
}
</style>
