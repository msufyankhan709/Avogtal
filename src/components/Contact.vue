<template>
  <div>
    <v-layout md12>
      <v-spacer></v-spacer>
      <v-flex md5 xs12>
        <v-img src="@/assets/dialog.png"> </v-img>
      </v-flex>
      <v-flex md5 class="white">
        <div>
          <br />
          <p
          class="text-center text-md-h4 font-weight-bold black--text"
              >Hire Talent
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
              
              label="Job Title"
              outlined
              style="width: 210px"
            ></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
          <v-col style="margin-left: 8%" class="mt-n8" cols="10">
            <p class="black--text">What Role Are You Looking To Hire?</p>
            <v-select
    
              :items="option"
              label="Select Item"
              dense
              outlined
            ></v-select>
            <p class="black--text">Talent Requirements</p>
            <v-textarea  outlined dense label="Write Something">
            </v-textarea>
          </v-col>
          <v-btn
            class="mt-n4"
            depressed
            dialog.value="false"
            style="margin-left: 10%"
            color="font-weight-bold footerBg white--text"
            large
          >
            Submit
            <v-icon small>mdi-arrow-right</v-icon>
          </v-btn>
        </v-row>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "Conntect",
  props: {
    dialog: Object,
  },
  data() {
    return {
      checkbox: false,
      option: [
        "Front-End Engineers",
        "Back-End Engineers",
        "Full Stack Engineers",
        "DevOps Engineers",
        "UI/UX Engineers",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>