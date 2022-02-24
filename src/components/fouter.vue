<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="blue">
        <div class="ftr-left">
          <img
            src="https://avogtal.com/wp-content/themes/avogtal/assets/images/logo-footer.svg"
            alt="Avogtal"
          />

          <h6>
            We take pride in matching and hiring only the best talent for <br>
            companies of all sizes and from all industries.
          </h6>

          <div class="ftr-social">
            <!--<a href="#"><img src="https://avogtal.com/wp-content/themes/avogtal/assets/images/fb-icon.svg" alt="faceook"></a>-->

            <!--<a href="#"><img src="https://avogtal.com/wp-content/themes/avogtal/assets/images/insta-icon.svg" alt="instagram"></a>-->

            <!--<a href="#"><img src="https://avogtal.com/wp-content/themes/avogtal/assets/images/twiter-icon.svg" alt="twitter"></a>-->

            <a href="https://www.linkedin.com/company/avogtal" target="_blank"
              ><img
                src="https://avogtal.com/wp-content/themes/avogtal/assets/images/linkedin-icon.svg"
                alt="lilnkedin"
            /></a>
          </div>
        </div>
        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "fouter",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style scoped>
body {
  text-align: center;
}
.img {
  width: 1%;
}
</style>