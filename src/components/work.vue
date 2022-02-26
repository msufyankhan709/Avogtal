<template>
  <div>
    <v-layout class="modal" justify-space-around>
      <v-flex md6>
        <v-img src="@/assets/work.png"> </v-img>
      </v-flex>
      <v-flex md6 class="blue">
        <div>
          <br />
          <p>
            <span class="text-h4 font-weight-bold white--text" style="margin-left: 170px"
              >Want To Join The Best Talent Network? Apply Here!</span
            >
          </p>
        </div>
        <v-row class="mt-6">
          <v-spacer></v-spacer>
          <v-col cols="5">
            <v-text-field dark
              label="First Name"
              outlined
              style="width: 210px"
            ></v-text-field>
            <v-text-field dark
              label="Phone Number"
              outlined
              style="width: 210px"
            ></v-text-field>
            <v-text-field dark
              label="Company Name"
              outlined
              style="width: 210px"
            ></v-text-field>
            
      <v-col
        class="d-flex"
      >
        <v-select
          :items="items"
          label="Outlined style"
          outlined
        ></v-select>
      </v-col>
             <v-text-field dark
              label="Email Address"
              outlined
              style="width: 210px"
            ></v-text-field>
          </v-col>

          <v-col cols="5">
            <v-text-field dark
              label="Last Name"
              outlined
              style="width: 210px"
            ></v-text-field>
            <v-text-field dark
              label="Email Address"
              outlined
              style="width: 210px"
            ></v-text-field>
            <v-text-field dark
              label="CV (Public link on Google Drive, etc"
              outlined
              style="width: 210px"
            ></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
          <v-col style="margin-left: 46%" class="mt-n8" cols="6">
            <p class="white--text">What Role Are You Looking To Hire?</p>
            <v-select dark
              :items="option"
              label="Select Item"
              dense
              outlined
            ></v-select>
             <v-text-field dark
              label="Reference Email"
              outlined
              style="width: 210px"
            ></v-text-field>
            <p class="white--text">Talent Requirements</p>
            <v-textarea dark outlined dense label="Write Something"> </v-textarea>
          </v-col>
          <v-btn class="mt-n4"
            depressed style="margin-left:10%"
            color="font-weight-bold myClass white--text"
            large
          >
            Primary
            <v-icon small>mdi-arrow-right</v-icon>
          </v-btn>
        </v-row>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "Work",

  data() {
    return {
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
  height: 750px;
  margin-left: 7%;
}
</style>