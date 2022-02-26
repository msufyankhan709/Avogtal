<template>
<div style="color: blue">
  <v-footer dark padless>
    <v-card dark class="purple6 footer" flat tile>
      <v-card-text>
        <div class="text-right">
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </div>
        <div class="d-flex justify-space-between justify-space-around">
          <div class="text-left left">
            <img
              height="100px"
              width="100px"
              src="https://avogtal.com/wp-content/themes/avogtal/assets/images/logo-footer.svg"
              alt="Avogtal"
            />
            <h6 class="d-flex subtitle-1">
              We take pride in matching and hiring only the best talent for
              companies of all sizes and from all industries.
            </h6>
            <br />
            <a href="https://www.linkedin.com/company/avogtal" target="_blank"
              ><img
                src="https://avogtal.com/wp-content/themes/avogtal/assets/images/linkedin-icon.svg"
                alt="lilnkedin"
            /></a>
          </div>
            <div class="right d-flex justify-space-between justify-space-around;"
             style="display: block;">
              <div class="column">
                <h3>HELP</h3>

                <ul>
                  <li class="hide"><a style="text-decoration: none;color: white" href="#">Help Center</a></li>

                  <li><a style="text-decoration: none;color: white" href="https://avogtal.com/faqs">Client FAQs</a></li>

                  <li>
                    <a style="text-decoration: none;color: white" href="https://avogtal.com/faqs">Freelancer FAQs</a>
                  </li>
                </ul>
              </div>

              <div class="column">
                <h3>COMPANY</h3>

                <ul>
                  <li><a style="text-decoration: none;color: white" href="https://avogtal.com/about">About</a></li>

                  <li class="hide"><a style="text-decoration: none;color: white" href="#">Team</a></li>

                  <li class="hide"><a style="text-decoration: none;color: white" href="#">Press</a></li>
                </ul>
              </div>

              <div class="column">
                <h3>CONNECT</h3>

                <ul>
                  <li><a style="text-decoration: none;color: white" href="https://avogtal.com/blogs">Blog</a></li>

                  <li>
                    <a style="text-decoration: none;color: white" href="#" class="contact-modal-toggle"> Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        <v-spacer></v-spacer>
      </v-card-text>
   <v-divider style="color: white" class="mt-16 "></v-divider>
     <h6 style="color: white;text-align:center;margin-top: 5%">Copyright © Avogtal 2021 | All Rights Reserved.</h6>
    </v-card>
  </v-footer>
  </div>
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
.left{
  width: 40%;
}
.right{
  width: 40%;
  display: flex;
  margin-top: 2%;
}
.footer{
  width: 100%;
}
</style>