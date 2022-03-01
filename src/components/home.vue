<template>
  <div>
    <v-layout class="darkgrey">
      <v-flex md6 class="mt-16 pt-16 hidden-sm-and-down">
        <div class="user">
          <h1>Build Your Software</h1>
          <h1>Development Dream Team Now</h1>
          <h3>
            We are the development partner of choice for over 300 <br />
            clients.
          </h3>
          <span>
            <v-btn @click="HireTalent" class="mt-6 pa-5 btnClass white--text">
              hire now

              <v-icon style="color: white" small>mdi-arrow-right</v-icon>
            </v-btn>
          </span>
        </div>
      </v-flex>
      <v-flex class="hidden-sm-and-down">
        <v-img
          style="margin-top: 70px; margin-left: 30px; width: 80%"
          src="@/assets/app.png"
        ></v-img>
      </v-flex>
    </v-layout>
     <v-layout row wrap class="darkgrey">
      <v-flex xs12 class="mt-16 pt-16 hidden-md-and-up">
        <div align="center">
          <h1>Build Your Software</h1>
          <h1>Development Dream Team Now</h1>
          <h3>
            We are the development partner of choice for over 300 <br />
            clients.
          </h3>
          <span>
            <v-btn @click="HireTalent" class="mt-6 pa-5 btnClass white--text">
              hire now

              <v-icon style="color: white" small>mdi-arrow-right</v-icon>
            </v-btn>
          </span>
        </div>
      </v-flex>
      <v-flex xs12 class="hidden-md-and-up">
        <v-img
          style="margin-top: 70px; margin-left: 30px; width: 80%"
          src="@/assets/app.png"
        ></v-img>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex md1 class="mt-6 ml-10">
        <span class="text-h6 blue--text">Trusted by: </span>
      </v-flex>
      <v-flex md2>
        <v-img width="200px" class="mt-3 ml-8" src="@/assets/log.png"> </v-img
      ></v-flex>
    </v-layout>
    <v-divider class="mt-7"> </v-divider>
    <v-layout>
      <div class="radio">
        <v-container fluid>
          <v-radio-group v-model="row" row>
            <v-radio label="" value="radio-1"></v-radio>
            <v-radio label="" value="radio-2"></v-radio>
            <v-radio label="" value="radio-3"></v-radio>
          </v-radio-group>
        </v-container>
      </div>
    </v-layout>
    <v-layout row wrap justify-space-around justify-space-between>
      <v-flex md12 sm12 class="text-center mb-6">
        <h3 class="DarkGrey--text">What We Offer</h3>
        <span class="text-h4 font-weight-black shadow white--text"
          >Talent You Can Hire</span
        >
      </v-flex>
      <v-flex md3 sm4 class="text-center">
        <v-card
          class="iduser darkgrey"
          role="group"
          aria-label="1 / 5"
          style="text-decoration: none"
        >
          <img
            src="https://avogtal.com/wp-content/themes/avogtal/assets/images/web-development-.svg"
            alt="web development"
          />

          <h3>Front-End Engineers</h3>
          <span class="btn" style="display: block">
            <v-btn text plain medium>
              explore
              <v-icon small>mdi-arrow-right</v-icon>
            </v-btn>
          </span>
        </v-card>
      </v-flex>
      <v-flex md3 sm4 class="text-center">
        <v-card
          class="iduser darkgrey"
          role="group"
          aria-label="2 / 5"
          style="text-decoration: none"
        >
          <img
            src="https://avogtal.com/wp-content/themes/avogtal/assets/images/web-backend.svg"
            alt="back-end"
          />
          <h3>Back-End Engineers</h3>
          <span class="btn" style="display: block">
            <v-btn text plain medium>
              explore
              <v-icon small>mdi-arrow-right</v-icon>
            </v-btn>
          </span>
        </v-card>
      </v-flex>
      <v-flex md3 sm4 class="text-center">
        <v-card
          class="iduser darkgrey"
          role="group"
          aria-label="3 / 5"
          style="text-decoration: none"
        >
          <img
            src="https://avogtal.com/wp-content/themes/avogtal/assets/images/full-stack.svg"
            alt="full-stack"
          />

          <h3>Full-Stack Engineers</h3>

          <span class="btn" style="display: block">
            <v-btn text plain medium>
              explore
              <v-icon small>mdi-arrow-right</v-icon>
            </v-btn>
          </span>
        </v-card>
      </v-flex>
      <v-flex md3 sm4 class="text-center">
        <v-card
          class="iduser darkgrey"
          role="group"
          aria-label="4 / 5"
          style="text-decoration: none"
        >
          <img
            src="https://avogtal.com/wp-content/themes/avogtal/assets/images/devops.svg"
            alt="devops"
          />

          <h3>DevOps Engineers</h3>

          <span class="btn" style="display: block">
            <v-btn text plain medium>
              explore
              <v-icon small>mdi-arrow-right</v-icon>
            </v-btn>
          </span>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout align-content-space-around class="darkgrey">
      <v-flex md5 sm12>
        <p class="ma-5">
          <v-img width="100%" src="@/assets/hw-img.png"> </v-img>
        </p>
      </v-flex>
      <v-flex md7 sm12>
        <div class="text-center my-5">
          <h3>How It Works</h3>
          <h1>Talk, Choose, Deploy</h1>
        </div>
        <div class="pr-16">
          <v-timeline>
            <v-timeline-item color="btnClass" right>
              <span class="title btnClass--text"> Share Your Requirements </span
              ><br />
              <span class="subheading">
                We take a deep dive into your technical & cultural requirements,
                and your long term goals
              </span>
            </v-timeline-item>
            <v-timeline-item color="btnClass" right>
              <span class="title btnClass--text">
                Get Matched With Engineers </span
              ><br />
              <span class="subheading">
                We map your requirements to our network, and handpick resources
                that are a perfect fit for you.
              </span></v-timeline-item
            >
            <v-timeline-item color="btnClass" right>
              <span class="title btnClass--text"
                >Review Candidates And Start</span
              ><br />
              <span class="subheading">
                Vet the candidates with us to find the best cultural and
                technical fit for your organization.
              </span></v-timeline-item
            >
          </v-timeline>
          <v-btn @click="HireTalent" class="btnClass white--text">
            hire now
            <v-icon style="color: white" small>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <h2
          class="
            row
            wrap
            justify-space-around justify-space-between
            mt-16
            text-h4
            font-weight-black
            shadow
            white--text
          "
        >
          What Makes Us Different?
        </h2>
        <h1 style="text-align: center">
          As-Needed Vetted Engineers At Your Service
        </h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-space-between justify-space-around mt-6>
      <v-flex v-for="card in cards" :key="card.id" md5 class="mt-5">
        <v-card :class="card.cls" tile :flat="card.flat" hover>
          <v-img style="width: 100px" :src="card.image"></v-img>
          <v-card-title>{{ card.title }}</v-card-title>
          <v-card-text>{{ card.text }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex class="foter">
        <h3 style="color: green; margin-top: 5%">
          Top 2% Of Engineering Talent
        </h3>
        <h1 style="color: white">
          Focus on your tech, while we manage <br />
          everything else
        </h1>
        <h3 style="color: gray">
          We find, hire, and train top engineering talent so you don't have to.
          All you need to worry <br />
          about is achieving your business goals using our pre-vetted engineers.
        </h3>
        <div class="mt-16">
          <div
            class="
              hm-cards
              pb-5
              d-flex
              justify-space-between justify-space-around
            "
          >
            <div class="hm-card">
              <div class="d-flex justify-space-between" style="color: white">
                <img
                  src="https://avogtal.com/wp-content/themes/avogtal/assets/images/finding.svg"
                  alt="Finding"
                />
                <span style="display: block" class="pl-16 text-left">
                  <h3>Finding</h3>
                  <ul>
                    <li>Recruitment</li>
                    <li>Onboarding</li>
                    <li>Checks and Balances</li>
                  </ul>
                </span>
              </div>
            </div>
            <div class="vl"></div>
            <div class="hm-card">
              <div class="d-flex justify-space-between" style="color: white">
                <img
                  src="https://avogtal.com/wp-content/themes/avogtal/assets/images/training.svg"
                  alt="Training"
                />

                <span class="text-left span">
                  <h3>Training</h3>
                  <ul>
                    <li>Technical</li>
                    <li>Communication</li>
                    <li>Cultural</li>
                  </ul>
                </span>
              </div>
            </div>
            <div class="vl"></div>
            <div class="hm-card">
              <div class="d-flex justify-space-between" style="color: white">
                <img
                  src="https://avogtal.com/wp-content/themes/avogtal/assets/images/hr.svg"
                  alt="HR"
                />
                <span class="text-left span">
                  <h3>HR</h3>
                  <ul>
                    <li>Payroll</li>
                    <li>Retention</li>
                    <li>Workspaces</li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <h3 style="color: #a19a9a; margin-top: 6%; margin-left: 43%">
          Testimonials
        </h3>
        <h1 style="margin-left: 35%">Hear From Our Clients</h1>
        <v-img
          style="width: 100px; margin-left: 43%"
          src="https://avogtal.com/wp-content/themes/avogtal/assets/images/Michelle-Duval.svg"
        ></v-img>
        <h4 style="margin-top: 2%; margin-left: 43%">Michelle Duval</h4>
        <h6 style="margin-left: 40%">
          Founder + CEO - Fingerprint for Success
        </h6>
        <p style="margin-top: 1%; margin-left: 30%">
          Avogtal has proven to be our single reliable Software Development
          <br />
          Partner who has helped us scale up our platform from ground up. Their
          <br />
          development resources have been integral members of our team and
          <br />
          have contributed immensely in making this venture a success.
        </p>
      </v-flex>
    </v-layout>
    <div class="text2">
      <h3 style="color: #a19a9a" class="pt-5">Avogtal Talent</h3>
      <h1>Handpick The Resources You Need</h1>
      <section class="h-works">
        <div class="container">
          <div class="ht-title"></div>

          <div class="exprt-logos">
            <img
              src="https://avogtal.com/wp-content/themes/avogtal/assets/images/tech-logos/wordpress-logo.svg"
              alt="WORDPRESS"
            />

            <img
              src="https://avogtal.com/wp-content/themes/avogtal/assets/images/tech-logos/java-logo.svg"
              alt="JAVA"
            />

            <img
              src="https://avogtal.com/wp-content/themes/avogtal/assets/images/tech-logos/php-logo.svg"
              alt="PHP"
            />

            <img
              src="https://avogtal.com/wp-content/themes/avogtal/assets/images/tech-logos/angular-logo.svg"
              alt="ANGULAR"
            />

            <img
              src="https://avogtal.com/wp-content/themes/avogtal/assets/images/tech-logos/ror-logo.svg"
              alt="ROR"
            />

            <img
              src="https://avogtal.com/wp-content/themes/avogtal/assets/images/tech-logos/android-logo.svg"
              alt="ANDROID"
            />

            <img
              src="https://avogtal.com/wp-content/themes/avogtal/assets/images/tech-logos/react-logo.svg"
              alt="REACT"
            />

            <img
              src="https://avogtal.com/wp-content/themes/avogtal/assets/images/tech-logos/apple-logo.svg"
              alt="APPLE"
            />

            <img
              src="https://avogtal.com/wp-content/themes/avogtal/assets/images/tech-logos/html-logo.svg"
              alt="HTML"
            />

            <img
              src="https://avogtal.com/wp-content/themes/avogtal/assets/images/tech-logos/xarmarir-logo.svg"
              alt="XAMARIN"
            />
          </div>

          <div class="underline d-flex text-left justify-space-between">
            <div class="exprt-column">
              <ul>
                <li>> Backend Engineers</li>

                <li>> UIUX Engineers</li>

                <li>> DevOps Engineers</li>

                <li>> Ember.Js Engineers</li>

                <li>> Full Stack Engineers</li>
              </ul>
            </div>

            <div class="exprt-column">
              <ul>
                <li>> Frontend Engineers</li>

                <li>> Magento Engineers</li>

                <li>> Machine Learning Engineers</li>

                <li>> Jquery Engineers</li>

                <li>> React Native Engineers</li>
              </ul>
            </div>

            <div class="exprt-column">
              <ul>
                <li>> NET Engineers</li>

                <li>> Node.JS Engineers</li>

                <li>> Backbone.JS Engineers</li>

                <li>> Web Engineers</li>

                <li>> Ionic Engineers</li>
              </ul>
            </div>

            <div class="exprt-column">
              <ul>
                <li>> Python Engineers</li>

                <li>> Salesforce Engineers</li>

                <li>> Software Engineers</li>

                <li>> Scala Engineers</li>

                <li>> Kotlin Engineers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
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
            <v-row>
              <v-col>
                <Work />
              </v-col>
            </v-row>
          </v-card>
        </template>
      </v-dialog>
    </div>
  </div>
</template>
<script>
import Work from "./Work.vue";
export default {
  name: "home",
  components: {
    Work,
  },
  data() {
    return {
      dialog: false,
      row: 0,
      cards: [
        {
          id: 0,
          image:
            "https://avogtal.com/wp-content/themes/avogtal/assets/images/vatted.png",
          title: "Vetted Engineers",
          text: "Get access to experienced engineers who we have assessed and chosen just for you ensure the best fit for you..",
          link: "",
          cls: "Grey",
          flat: false,
        },
        {
          id: 1,
          image:
            "https://avogtal.com/wp-content/themes/avogtal/assets/images/painless.png",
          title: "Painless Communication",
          text: "Don’t worry, our engineers use project management tools to ensure complete transparency of work no matter where they are located",
          link: "",
          cls: "Grey",
          flat: false,
        },
        {
          id: 2,
          image:
            "https://avogtal.com/wp-content/themes/avogtal/assets/images/sun-model.png",
          title: "Follow The Sun Model",
          text: "Having dev centers across the globe, our engineers can work on your time zones, or even around the clock if need be.",
          link: "",
          cls: "Grey",
          flat: false,
        },
        {
          id: 3,
          image:
            "https://avogtal.com/wp-content/themes/avogtal/assets/images/zero-risk.png",
          title: "Zero Risk",
          text: "Get a risk free one week trial where you get to work with our engineers directly to ensure the best fit for you.",
          link: "",
          cls: "Grey",
          flat: false,
        },
        {
          id: 4,
          image:
            "https://avogtal.com/wp-content/themes/avogtal/assets/images/scalable.png",
          title: "Scalable Teams",
          text: "Whether you need a one person staff augmentation or a twenty person development army, we have you covered.",
          link: "",
          cls: "Grey",
          flat: false,
        },
        {
          id: 5,
          image:
            "https://avogtal.com/wp-content/themes/avogtal/assets/images/no-hiring.png",
          title: "No Hiring Woes",
          text: "We will manage hiring and resource retention, so you can focus on growing your business while we take care of the rest.",
          link: "",
          cls: "Grey",
          flat: false,
        },
      ],
    };
  },
  methods: {
    HireTalent() {
      console.log("Working");
      this.dialog = true;
      this.show2nd = false;
    },
  },
};
</script>

<style>
.user {
  margin-left: 100px;
}
.shadow {
  text-shadow: 0px 0px 7px rgba(15, 0, 37, 0.411);
}
.button {
  width: max-content;
  display: inline-block;
  background: blue;
  border-radius: 4px;
  padding: 15px 30px;
  color: white font-style normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  transition: 0.3s ease-in-out;
  text-transform: uppercase;
}
.iduser {
  max-height: 100%;
  padding: 24px;
  background-color: #dbd7d7;
  border: 1px solid var(--body-bg);
  box-sizing: border-box;
  border-radius: 8px;
  margin-left: 45px;
}
.btn {
  opacity: 0;
}
.btn:hover {
  opacity: 100;
  box-shadow: #3f00b5;
}
.card {
  margin-right: 60%;
}
.radio {
  margin-left: 45%;
}
.span {
  width: 33%;
  height: 100%;
}
.foter {
  background-color: #180638;
  margin-top: 5%;
  text-align: center;
}

.text2 {
  background-color: #dbd7d7;
  margin-top: 10%;
  text-align: center;
}
.exprt-column ul {
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  margin-top: 45px;
  opacity: 0.9;
}
.underline {
  grid-template-columns: 1fr 1fr;
}
.vl {
  border: 1px dashed rgba(245, 245, 245, 0.418);
  height: 150px;
}
ul {
  list-style-type: none;
}
.line {
  margin-top: 22%;
}
</style>