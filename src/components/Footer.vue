<template>
<v-app> 
   <v-footer >
    <v-layout row wrap>
      <v-flex sm12>
        <v-card flat tile class="indigo lighten-1 white--text">
          <v-card-text>
            <v-btn
              v-for="icon in icon"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
              v-
            </v-btn>
          </v-card-text>
          <v-card-text class="white--text-right:">
               <span>
                   <v-img style="width:100px" src="https://avogtal.com/wp-content/themes/avogtal/assets/images/logo-footer.svg"></v-img>
                    We take pride in matching and hiring only the best talent for <br> companies of all sizes and from all industries.</span>
            <div class=" text-center:">
              <h3 style="color:white">HELP</h3>
              <p>Client FAQs</p>
              <p>Freelancer FAQs</p>
            </div>
            <div class=" text-center">
              <h3 style="color:white">COMPANY</h3>
              <p>About</p>
            </div>
            <div class=" text-right">
              <h3 style="color:white">CONNECT</h3>
              <p>Blog</p>
              <p>Contact Us</p>
            </div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-footer>
  
  </v-app>

</template>

     <script>
export default {
  name:'Footer',
  
};
</script>

    <style scoped>
    body {
   text-align: center;
}
</style>