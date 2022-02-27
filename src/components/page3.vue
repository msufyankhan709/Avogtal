<template>
  <div>
    <v-layout style="background-color: #f1ebeb">
      <v-flex md6 style="margin-top: 10%">
        <div class="user">
          <h1>
            Grow Your Career With The<br />
            Best Global Companies
          </h1>

          <h3>
            Connect, Network, Get On Board With Innovative <br />
            Brands, And Excel At Your Craft
          </h3>
          <span>
            <v-btn
              style="
                background-color: blue;
                margin-top: 10%;
                width: 35%;
                height: 20%;
              "
            >
              <p style="margin-top: 15px; color: white">Get Started</p>
              <v-icon style="color: white" small>mdi-arrow-right</v-icon>
            </v-btn>
          </span>
        </div>
      </v-flex>
      <v-flex md5>
        <v-img
          style="margin-top: 15%; margin-left: 30px; width: 95%"
          src="https://avogtal.com/wp-content/themes/avogtal/assets/images/engineer-banner.png"
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
    <h3 style="text-align: center; margin-top: 7%; color: #cdc8c8">
      How It Works
    </h3>
    <h1 style="text-align: center">Talent Network</h1>
    <h4 style="text-align: center; color: #cdc8c8">
      Everyone wants to show what they can contribute to their profession, and
      we can help you do <br />
      that. Participate in an assessment to match your qualifications and
      skillsets with ideal, career- <br />
      defining opportunities where you can make a difference.
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
          style="margin-top: 2%; margin-left: 30%"
          src="https://avogtal.com/wp-content/themes/avogtal/assets/images/eng-wfa.png"
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
        <h3 style="margin-left: 15%; color: #cdc8c8; margin-top: 10%">
          Technical & Cultural Fit
        </h3>

        <h1 style="margin-left: 1%">Data-Driven Screening</h1>
        <div class="text">
          <h2 style="color: blue">Share Your Requirements</h2>
          <h3>
            Before shortlisting and recommending candidates based on their
            professional profiles, we check if they are a good match for your
            unique tech needs, culture, and organizational values.
          </h3>
          <span>
            <v-btn
              style="
                background-color: blue;
                margin-top: 5%;
                width: 35%;
                height: 20%;
              "
            >
              <p style="margin-top: 15px; color: white">Get Started</p>
              <v-icon style="color: white" small>mdi-arrow-right</v-icon>
            </v-btn>
          </span>
        </div>
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
    <v-layout class="btm">
      <v-flex md6>
        <div style="margin-top: 13%; margin-left: 10%" class="text">
          <h1 style="color: blue">Extend Your Reach</h1>
          <h3 style="color: #cdc8c8">
            Whether you are a newcomer or senior, the possibilities are endless
            when you connect to a global community of software engineering
            talent like yourself. Network with peers, attend virtual events,
            learn from industry leaders, level up your skills, and so much more.
          </h3>
          <span>
            <v-btn
              style="
                background-color: blue;
                margin-top: 5%;
                width: 35%;
                height: 20%;
              "
            >
              <p style="margin-top: 15px; color: white">Get Started</p>
              <v-icon style="color: white" small>mdi-arrow-right</v-icon>
            </v-btn>
          </span>
        </div>
      </v-flex>
      <div class="line">
        <v-timeline class="">
          <v-timeline-item></v-timeline-item>
          <v-timeline-item class="text-right"> </v-timeline-item>
          <v-timeline-item></v-timeline-item>
        </v-timeline>
      </div>
      <v-flex md6
        ><v-img
          style="margin-top: 5%; margin-left: 20%"
          src="https://avogtal.com/wp-content/themes/avogtal/assets/images/eng-eyr.png"
        ></v-img
      ></v-flex>
    </v-layout>
    <v-layout style="background-color: #f1ebeb" class="btm">
      <v-flex md6
        ><v-img
          style="margin-top: 5%; margin-left: 30%"
          src="https://avogtal.com/wp-content/themes/avogtal/assets/images/eng-sfm.png"
        ></v-img
      ></v-flex>
      <div class="line">
        <v-timeline class="">
          <v-timeline-item></v-timeline-item>
          <v-timeline-item class="text-right"> </v-timeline-item>
          <v-timeline-item></v-timeline-item>
        </v-timeline>
      </div>
      <v-flex md6>
        <div style="margin-top: 14%" class="text">
          <h1 style="color: blue">Strive For Mastery</h1>
          <h3 style="color: #cdc8c8">
            The sky’s the limit as you take on opportunities that challenge you
            to perform at your best. Implement the latest practices in software
            engineering, participate in training sessions and mentorship
            programs, and add to your technical expertise.
          </h3>
          <span>
            <v-btn
              style="
                background-color: blue;
                margin-top: 5%;
                width: 35%;
                height: 20%;
              "
            >
              <p style="margin-top: 15px; color: white">Get Started</p>
              <v-icon style="color: white" small>mdi-arrow-right</v-icon>
            </v-btn>
          </span>
        </div>
      </v-flex>
    </v-layout>
    <v-layout class="btm">
      <v-flex md6>
        <div style="margin-top: 13%; margin-left: 10%" class="text">
          <h1 style="color: blue">Rewarding Career</h1>
          <h3 style="color: #cdc8c8">
            Your success is our success. Many exceptional engineers have started
            and grown their careers with Avogtal. We drive you towards long-term
            success with client projects that encourage you to learn and put
            your skills to good use.
          </h3>
          <span>
            <v-btn
              style="
                background-color: blue;
                margin-top: 5%;
                width: 35%;
                height: 20%;
              "
            >
              <p style="margin-top: 15px; color: white">Get Started</p>
              <v-icon style="color: white" small>mdi-arrow-right</v-icon>
            </v-btn>
          </span>
        </div>
      </v-flex>
      <div class="line">
        <v-timeline class="">
          <v-timeline-item></v-timeline-item>
          <v-timeline-item class="text-right"> </v-timeline-item>
          <v-timeline-item></v-timeline-item>
        </v-timeline>
      </div>
      <v-flex md6
        ><v-img
          style="margin-top: 5%; margin-left: 20%;"
          src="https://avogtal.com/wp-content/themes/avogtal/assets/images/same-page.png"
        ></v-img
      ></v-flex>
    </v-layout>
    <v-layout style="background-color: #e2dddd">
      <v-flex style="text-align: center">
        <section class="h-works">
          <h3 style="color: blue">Your Career, Our Promise</h3>

          <p>Don’t hesitate to join our talent network and grow your career.</p>
        </section>

        <v-btn class="mt-n16 blue white--text" large>
          Get Started
          <v-icon style="color: white" small>mdi-arrow-right</v-icon>
        </v-btn>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "page3",
  data() {
    return {
      cards: [
        {
          id: 0,
          image:
            "https://avogtal.com/wp-content/themes/avogtal/assets/images/network-professionals.svg",
          title: "Network With Professionals",
          text: "Showcase your capabilities, past projects, hands-on industry experience, and the leadership roles you displayed in a competitive assessment program designed for dynamic professionals just like you.",
          link: "",
          cls: "Grey",
          flat: false,
        },
        {
          id: 1,
          image:
            "https://avogtal.com/wp-content/themes/avogtal/assets/images/in-depth.svg",
          title: "In-Depth Assessment Program",
          text: "We not only match candidate qualifications to a job. Our team factors in your willingness to be a team player and your ability to step up to challenges so you can be at your best from day one.",
          link: "",
          cls: "Grey",
          flat: false,
        },
        {
          id: 2,
          image:
            "https://avogtal.com/wp-content/themes/avogtal/assets/images/trusted-matching.svg",
          title: "Trusted, Personalized Matching",
          text: "You want to discover your true potential, we’ll make it happen. Get connected to exciting startups, growing SMBs, and world-class enterprises without any hassle. If one of our job posts interests you, contact us to match your skills and preferences.",
          link: "",
          cls: "Grey",
          flat: false,
        },
        {
          id: 3,
          image:
            "https://avogtal.com/wp-content/themes/avogtal/assets/images/define-terms.svg",
          title: "Define Your Own Terms",
          text: "We will never bother you with micro-management, red tape, and stringent terms. Remain in your comfort zone as you decide where, when, and how you want to work. All you need is a laptop, a fast and secure WiFi connection, and you’re ready to begin.",
          link: "",
          cls: "Grey",
          flat: false,
        },
        {
          id: 4,
          image:
            "https://avogtal.com/wp-content/themes/avogtal/assets/images/on-time.svg",
          title: "On-Time Compensation",
          text: "You deserve a handsome, on-time paycheck that mirrors all the hard work you put into your job, and we make transform this into reality. We offer the best rates based on your experience, and our team takes care of the billing as well as invoicing.",
          link: "",
          cls: "Grey",
          flat: false,
        },
      ],
    };
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
  margin-top: 5%;
}
.h-works {
  padding: 100px 0;
  background: var(--color-bg);
}
</style>