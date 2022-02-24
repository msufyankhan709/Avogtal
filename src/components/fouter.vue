<template>
  <footer class="body">
    <div class="footer-sec">
      <div class="container">
        <div class="ftr-wrapper">
          <div class="ftr-left">
            <img
              src="https://avogtal.com/wp-content/themes/avogtal/assets/images/logo-footer.svg"
              alt="Avogtal"
            />

            <p>
              We take pride in matching and hiring only the best talent for
              companies of all sizes and from all industries.
            </p>

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

          <div class="ftr-right">
            <div class="ftr-column">
              <h3>HELP</h3>

              <ul>
                <li class="hide"><a href="#">Help Center</a></li>

                <li><a href="https://avogtal.com/faqs">Client FAQs</a></li>

                <li><a href="https://avogtal.com/faqs">Freelancer FAQs</a></li>
              </ul>
            </div>

            <div class="ftr-column">
              <h3>COMPANY</h3>

              <ul>
                <li><a href="https://avogtal.com/about">About</a></li>

                <li class="hide"><a href="#">Team</a></li>

                <li class="hide"><a href="#">Press</a></li>
              </ul>
            </div>

            <div class="ftr-column">
              <h3>CONNECT</h3>

              <ul>
                <li><a href="https://avogtal.com/blogs">Blog</a></li>

                <li>
                  <a href="#" class="contact-modal-toggle"> Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="copyright-wrap">
      <div class="container">
        <div class="copy-right">
          <p>Copyright © Avogtal 2021 | All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  e: "fouter",
};
</script>
<style>
footer {
  display: block;
}
.body {
  font-family: var(--font-family);
  margin: 0;
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

</style>
