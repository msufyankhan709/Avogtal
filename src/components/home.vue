<template>
  <div>
    <v-layout style="background-color: #f1ebeb">
      <v-flex md6 style="margin-top: 10%">
        <div class="user">
          <h1>Build Your Software</h1>
          <h1>Development Dream Team Now</h1>
          <h3>
            We are the development partner of choice for over 300 clients.
          </h3>
          <v-btn class="button" style="margin-top: 16px; margin-left: 50px">
            hire now
          </v-btn>
        </div>
      </v-flex>
      <v-flex md5>
        <v-img
          style="margin-top: 70px; margin-left: 30px"
          src="@/assets/app.png"
        ></v-img>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex md1 class="ml-6"><h3 class="mt-5">trusted by:</h3></v-flex>
      <v-flex md2
        ><v-img
          style="width: 200px; margin-left: 10%"
          src="@/assets/log.png"
        ></v-img
      ></v-flex>
    </v-layout>
    <v-divider class="mt-7"> </v-divider>
    <h3 style="margin-left: 45%; margin-top: 7%; color: #cdc8c8">
      What We Offer
    </h3>
    <h1 style="text-align: center">Talent You Can Hire</h1>
    <v-layout>
      <a
        href="#"
        class="iduser"
        role="group"
        aria-label="1 / 5"
        style="width: 262.842px; margin-right: 24px"
      >
        <img
          src="https://avogtal.com/wp-content/themes/avogtal/assets/images/web-development-.svg"
          alt="web development"
        />

        <h3>Front-End Engineers</h3>
        <v-btn class="button">EXPLORE</v-btn>
      </a>
      <a
        href="#"
        class="iduser"
        role="group"
        aria-label="2 / 5"
        style="width: 262.842px; margin-right: 24px"
      >
        <img
          src="https://avogtal.com/wp-content/themes/avogtal/assets/images/web-backend.svg"
          alt="back-end"
        />

        <h3>Back-End Engineers</h3>

        <v-btn class="button">EXPLORE</v-btn>
      </a>
      <a
        href="#"
        class="iduser"
        role="group"
        aria-label="3 / 5"
        style="width: 262.842px; margin-right: 24px"
      >
        <img
          src="https://avogtal.com/wp-content/themes/avogtal/assets/images/full-stack.svg"
          alt="full-stack"
        />

        <h3>Full-Stack Engineers</h3>

        <v-btn class="button">EXPLORE</v-btn>
      </a>
      <a
        href="#"
        class="iduser"
        role="group"
        aria-label="4 / 5"
        style="width: 262.842px; margin-right: 24px"
      >
        <img
          src="https://avogtal.com/wp-content/themes/avogtal/assets/images/devops.svg"
          alt="devops"
        />

        <h3>DevOps Engineers</h3>

        <v-btn class="button">EXPLORE</v-btn>
      </a>
    </v-layout>
    <v-layout style="background-color: #f1ebeb" class="btm">
      <v-flex md6
        ><v-img
          style="margin-top: 15%; margin-left: 30%"
          src="@/assets/hw-img.png"
        ></v-img
      ></v-flex>
      <v-flex md6>
        <h3 style="margin-left: 15%; color: #cdc8c8; margin-top: 20%">
          How It Works
        </h3>
        <h1 style="margin-left: 15%">Talk, Choose, Deploy</h1>
        <div class="text">
          <h2 style="color: blue">Share Your Requirements</h2>
          <h3>
            We take a deep dive into your technical & cultural requirements, and
            your long term goals
          </h3>
          <br /><br />
          <h2 style="color: blue">Get Matched With Engineers</h2>
          <h3>
            We map your requirements to our network, and handpick resources that
            are a perfect fit for you.
          </h3>
          <br /><br />
          <h2 style="color: blue">Review Candidates And Start</h2>
          <h3>
            Vet the candidates with us to find the best cultural and technical
            fit for your organization.
          </h3>
          <v-btn style="margin-top: 15%" class="button">hire now</v-btn>
        </div>
      </v-flex>
      
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style>
.user {
  margin-left: 100px;
}
/* From cssbuttons.io by @adamgiebl */
.button {
  background: linear-gradient(-45deg, #3f00b5, #9f69fe, #27c8b7, #3f00b5);
  background-size: 800% 400%;
  padding: 1em 2em;
  display: inline-block;
  border: none;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 700;
  color: white;
  transition: all 0.5s ease-in-out;
  animation: gradient 10s infinite cubic-bezier(0.62, 0.28, 0.23, 0.99) both;
}

.button:hover {
  animation: gradient 3s infinite;
  transform: scale(1.05);
}

.button:active {
  animation: gradient 3s infinite;
  transform: scale(0.8);
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
.iduser {
  max-height: 100%;
  padding: 24px;
  background-color: #f1ebeb;
  border: 1px solid var(--body-bg);
  box-sizing: border-box;
  border-radius: 8px;
  margin-left: 45px;
}
.btm {
  width: 100%;
  margin-top: 7%;
}
.text {
  margin-left: 20%;
}
</style>