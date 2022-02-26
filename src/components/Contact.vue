<template>
  <div>
    <v-layout class="modal" justify-space-around>
      <v-flex md6>
        <v-img src="@/assets/dialog.png"> </v-img>
      </v-flex>
      <v-flex md6 class="blue">
        <div>
          <br />
          <p
          class="text-center text-md-h4 font-weight-bold white--text"
              >Hire Talent
          </p>
        </div>
        <v-row class="mt-6">
          <v-spacer></v-spacer>
          <v-col cols="5">
            <v-text-field
              dark
              label="First Name"
              outlined
              style="width: 210px"
            ></v-text-field>
            <v-text-field
              dark
              label="Phone Number"
              outlined
              style="width: 210px"
            ></v-text-field>
            <v-text-field
              dark
              label="Company Name"
              outlined
              style="width: 210px"
            ></v-text-field>
          </v-col>

          <v-col cols="5">
            <v-text-field
              dark
              label="Last Name"
              outlined
              style="width: 210px"
            ></v-text-field>
            <v-text-field
              dark
              label="Email Address"
              outlined
              style="width: 210px"
            ></v-text-field>
            <v-text-field
              dark
              label="Job Title"
              outlined
              style="width: 210px"
            ></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
          <v-col style="margin-left: 8%" class="mt-n8" cols="10">
            <p class="white--text">What Role Are You Looking To Hire?</p>
            <v-select
              dark
              :items="option"
              label="Select Item"
              dense
              outlined
            ></v-select>
            <p class="white--text">Talent Requirements</p>
            <v-textarea dark outlined dense label="Write Something">
            </v-textarea>
          </v-col>
          <v-btn
            class="mt-n4"
            depressed
            dialog.value="false"
            style="margin-left: 10%"
            color="font-weight-bold myClass white--text"
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
.modal {
  max-width: 86%;
  margin-left: 7%;
}
</style>