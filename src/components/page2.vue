<template>
  <div>
    <v-layout style="background-color: #f1ebeb">
      <v-flex md6 style="margin-top: 10%">
        <div class="user">
          <h1>
            Onboard Top Engineering <br />
            Talent In A Fraction Of The Time
          </h1>

          <h3>
            Promising Startups, Rising SMBs, And Top Enterprises Trust <br />
            Avogtal To Deliver Real Results
          </h3>
          <span>
            <v-btn @click="HireTalent" class="mt-6 pa-5 btnClass white--text">
              hire now
              <v-icon style="color: white" small>mdi-arrow-right</v-icon>
            </v-btn>
          </span>
        </div>
      </v-flex>
      <v-flex md5>
        <v-img
          style="margin-top: 15%; margin-left: 30px; width: 70%"
          src="https://avogtal.com/wp-content/themes/avogtal/assets/images/companies-banner.png"
        ></v-img>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex md1 class="ml-6"><h3 class="mt-5 blue--text">trusted by:</h3></v-flex>
      <v-flex md2
        ><v-img
          style="width: 200px; margin-left: 10%"
          src="@/assets/log.png"
        ></v-img
      ></v-flex>
    </v-layout>
    <v-divider class="mt-7"> </v-divider>
    <v-layout class="btm">
      <v-flex md6
        ><v-img
          style="margin-left: 25%"
          src="https://avogtal.com/wp-content/themes/avogtal/assets/images/company-wwd.png"
        ></v-img
      ></v-flex>

      <v-flex md6>
        <h3 style="margin-left: 15%; margin-top: 15%; color: #cdc8c8">
          Talent Network
        </h3>

        <h1 style="margin-left: 15%; margin-top: 2%"></h1>
        <div class="text">
          <h4 style="margin-left: 15%; margin-top: 3%; color: #cdc8c8">
            We know you have a business to run, so why focus on the
            technicalities when <br />
            you have us to help? Let us find the perfect tech sources for you at
            the right time and price.
          </h4>
        </div>
      </v-flex>
    </v-layout>
    <h3 style="text-align: center; margin-top: 7%; color: #cdc8c8">
      In-Depth Assessment Program
    </h3>
    <h1 style="text-align: center">Vetted Engineers</h1>
    <h4 style="text-align: center; color: #cdc8c8">
      We not only match candidate qualifications to a job, but we also factor in
      the willingness to be <br />
      team players and their ability to step up to challenges so you access only
      the very best from <br />
      day one.
    </h4>
    <v-layout row wrap justify-space-between justify-space-around mt-6>
      <v-flex v-for="card in cards" :key="card.id" md5 class="mt-5">
        <v-card :class="card.cls" tile :flat="card.flat" hover>
          <v-img style="width: 100px" :src="card.image"></v-img>
          <v-card-title>{{ card.title }}</v-card-title>
          <v-card-text>{{ card.text }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout style="background-color: #f1ebeb" class="btm">
      <v-flex md6
        ><v-img
          style="margin-top: 10%; margin-left: 30%"
          src="https://avogtal.com/wp-content/themes/avogtal/assets/images/company-dds.png"
        ></v-img
      ></v-flex>
      <div class="line">
        <v-timeline>
          <v-timeline-item></v-timeline-item>
          <v-timeline-item class="text-right"> </v-timeline-item>
          <v-timeline-item></v-timeline-item>
        </v-timeline>
      </div>
      <v-flex md6>
        <h3 style="margin-left: 5%; color: #cdc8c8; margin-top: 20%">
          Technical & Cultural Fit
        </h3>

        <h1 style="margin-left: 5%">Data-Driven Screening</h1>
        <div class="text">
          <h2 style="color: blue">Share Your Requirements</h2>
          <h3>
            Before shortlisting and recommending candidates based on their
            professional profiles, we check if they are a good match for your
            unique tech needs, culture, and organizational values.
          </h3>
          <span>
            <v-btn @click="HireTalent" class="mt-6 pa-5 btnClass white--text">
              hire now
              <v-icon style="color: white" small>mdi-arrow-right</v-icon>
            </v-btn>
          </span>
        </div>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <h2 style="text-align: center; color: #cdc8c8; margin-top: 7%">
          What Makes Us Different?
        </h2>
        <h1 style="text-align: center">
          As-Needed Vetted Engineers At Your Service
        </h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-space-between justify-space-around>
      <v-flex v-for="card in cards1" :key="card.id" md5 class="mt-5">
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
      <v-flex style="background-color: #f1ebeb; margin-top: 10%;text-align: center">
        <section class="h-works">
          
                <h3 style="color: blue">Our Engineering Talent, Your Success</h3>

                <p>Just tell us what you need, and we’ll do the hard work.</p>
        </section>
             <span>
            <v-btn @click="HireTalent" class="mt-n16 pa-5 btnClass white--text">
              hire now
              <v-icon style="color: white" small>mdi-arrow-right</v-icon>
            </v-btn>
          </span>
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
                <li>>  Backend Engineers</li>

                <li>>  UIUX Engineers</li>

                <li>>  DevOps Engineers</li>
 
                <li>>  Ember.Js Engineers</li>

                <li>>  Full Stack Engineers</li>
              </ul>
            </div>

            <div class="exprt-column">
              <ul>
                <li>>  Frontend Engineers</li>

                <li>>  Magento Engineers</li>

                <li>>  Machine Learning Engineers</li>

                <li>>  Jquery Engineers</li>

                <li>>  React Native Engineers</li>
              </ul>
            </div>

            <div class="exprt-column">
              <ul>
                <li>>  NET Engineers</li>

                <li>>  Node.JS Engineers</li>

                <li>>  Backbone.JS Engineers</li>

                <li>>  Web Engineers</li>

                <li>>  Ionic Engineers</li>
              </ul>
            </div>

            <div class="exprt-column">
              <ul>
                <li>>  Python Engineers</li>

                <li>>  Salesforce Engineers</li>

                <li>>  Software Engineers</li>

                <li>>  Scala Engineers</li>

                <li>>  Kotlin Engineers</li>
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
  name: "page2",
   components: {
    Work,
  },
  data() {
    return {
            dialog: false,
      cards: [
        {
          id: 0,
          image:
            "https://avogtal.com/wp-content/themes/avogtal/assets/images/english-company.svg",
          title: "English Proficiency",
          text: "Rest assured that there will be no language barriers when it comes to basic and business English communication skills from your handpicked team of experts.",
          link: "",
          cls: "Grey",
          flat: false,
        },
        {
          id: 1,
          image:
            "https://avogtal.com/wp-content/themes/avogtal/assets/images/technical-company.svg",
          title: "Technical Interview",
          text: "lWe put candidates to the test with critical-thinking exercises that evaluate hands-on experience, communication, collaboration, and quick decision-making capabilities.",
          link: "",
          cls: "Grey",
          flat: false,
        },
        {
          id: 2,
          image:
            "https://avogtal.com/wp-content/themes/avogtal/assets/images/coding-company.svg",
          title: "Coding Aptitude",
          text: "We conduct thorough coding tests that reflect the real-world experience of candidates so you can measure their performance and employ them for the right job.",
          link: "",
          cls: "Grey",
          flat: false,
        },
        {
          id: 3,
          image:
            "https://avogtal.com/wp-content/themes/avogtal/assets/images/talent-company.svg",
          title: "Talent Calibration Sessions",
          text: "We organize future-focused talent calibration sessions to provide you with candidates who can accelerate your software development projects without compromising.",
          link: "",
          cls: "Grey",
          flat: false,
        },
      ],
      cards1: [
        {
          id: 0,
          image:
            "https://avogtal.com/wp-content/themes/avogtal/assets/images/vatted.png",
          title: "Vetted Engineers",
          text: "Get access to experienced engineers who we have assessed and chosen just for you transparency of work no matter where they are located",
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
      test: "",
      num: 0,
    };
  },
   methods: {
    HireTalent() {
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

.iduser {
  background-color: #e2dddd;
}
.btm {
  width: 100%;
  margin-top: 7%;
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
  margin-top: 10%;
}
.h-works {
    padding: 80px 0;
    background: var(--color-bg);
}

</style>