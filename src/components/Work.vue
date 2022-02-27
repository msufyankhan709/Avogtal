<template>
  <div>
    <v-layout md7>
      <v-spacer></v-spacer>
      <v-flex md5 xs10>
        <v-img src="@/assets/work.png"> </v-img>
      </v-flex>
      <br/>
      <v-flex md5 class="wight">
        <div>
          <br />
          <p class="text-h4 font-weight-bold black--text text-center">
            Want To Join The Best Talent Network? Apply Here!
          </p>
        </div>
        <v-row class="mt-6">
          <v-spacer></v-spacer>
          <v-col cols="5">
            <v-text-field
              
              label="First Name"
              outlined
              style="width: 210px"
            ></v-text-field>
            <v-text-field
              
              label="Phone Number"
              outlined
              style="width: 210px"
            ></v-text-field>
            <v-text-field
              
              label="Company Name"
              outlined
              style="width: 210px"
            ></v-text-field>
            <v-select
            
              label="Level of Experities"
              outlined
              :items="options"
              style="width: 210px"
            >
            </v-select>
            <v-text-field
            
              label="Reference Name"
              outlined
              style="width: 210px"
            ></v-text-field>
          </v-col>

          <v-col cols="5">
            <v-text-field
            
              label="Last Name"
              outlined
              style="width: 210px"
            ></v-text-field>
            <v-text-field
              
              label="Email Address"
              outlined
              style="width: 210px"
            ></v-text-field>
            <v-text-field
              
              label="CV (Public link on Google Drive, etc)"
              outlined
              style="width: 210px"
            ></v-text-field>
            <v-select
              
              label="Most Proficient Technology"
              outlined
              :items="option"
              style="width: 210px"
            >
            </v-select>
            <v-text-field
            
              label="Reference Email"
              outlined
              style="width: 210px"
            ></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
          <v-col style="margin-left: 8%" class="mt-n8" cols="10">
            <v-checkbox
              v-model="checkbox"
          
              label="I agree to AVOGTAL's Talent Network Terms & Conditions?"
              required
            ></v-checkbox>
          </v-col>
          <v-btn
            class="mt-n4"
            depressed
            style="margin-left: 10%"
            color="font-weight-bold footerBg white--text"
            large
          >
            Submit
            <v-icon small>mdi-arrow-right</v-icon>
          </v-btn>
        </v-row>
      </v-flex>
      <v-spacer> </v-spacer>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "work",

  data() {
    return {
      checkbox: false,
      option: [
        "Front-End Engineers",
        "Back-End Engineers",
        "Full Stack Engineers",
        "QA",
        "DevOps Engineers",
        "UI/UX Engineers",
        "Mobile/Web Developer",
        "IT Project Manager",
      ],
      options: ["Begineer", "Intermediate", "Advanced"],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>