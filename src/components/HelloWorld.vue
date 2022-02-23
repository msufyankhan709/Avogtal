<template>
  <v-container>
    <div v-if="isMobile"><SiteNav /></div>
    <div v-if="!isMobile"><Appbar /></div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SiteNav from "./nav/sitenav.vue";
import Appbar from "./nav/app-bar.vue";

@Component({
  components: {
    Appbar,
    SiteNav,
  },
})
export default class HelloWorld extends Vue {
  private navDrawer = false;
  private toggleNavDrawer(visible: boolean): void {
    this.navDrawer = visible;
  }

  private get defaultMini(): boolean {
    const { smAndUp, mdAndDown } = this.$vuetify.breakpoint;
    return smAndUp && mdAndDown;
  }

  private get isMobile(): boolean {
    return this.$vuetify.breakpoint.xsOnly;
  }

  private get _navDrawer(): boolean {
    if (this.$vuetify.breakpoint.smAndUp) {
      return true;
    }
    return this.navDrawer;
  }
}
</script>
