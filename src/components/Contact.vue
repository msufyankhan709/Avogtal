<template>
  <div>
    <v-layout md12>
      <v-spacer></v-spacer>
      <v-flex md5 xs12>
        <v-img src="@/assets/dialog.png"> </v-img>
      </v-flex>
      <v-flex md5 class="purple6">
        <div>
          <br />
          <p class="text-center text-md-h4 font-weight-bold white--text">
            Hire Talent
          </p>
        </div>
        <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="validate">
          <v-row class="mt-6">
            <v-spacer></v-spacer>
            <v-col cols="5">
              <v-text-field
                dark
                label="First Name"
                outlined
                :rules="[(v) => !!v || 'First Name is required']"
                style="width: 210px"
              ></v-text-field>
              <v-text-field
                dark
                label="Phone Number"
                outlined
                :rules="[(v) => !!v || 'Phone Number is required']"
                style="width: 210px"
              ></v-text-field>
              <v-text-field
                dark
                label="Company Name"
                outlined
                :rules="[(v) => !!v || 'Company Name is required']"
                style="width: 210px"
              ></v-text-field>
            </v-col>

            <v-col cols="5">
              <v-text-field
                dark
                label="Last Name"
                outlined
                :rules="[(v) => !!v || 'Last Name is required']"
                style="width: 210px"
              ></v-text-field>
              <v-text-field
                dark
                label="Email Address"
                outlined
                :rules="[(v) => !!v || 'Email Address is required']"
                style="width: 210px"
              ></v-text-field>
              <v-text-field
                dark
                label="Job Title"
                outlined
                :rules="[(v) => !!v || 'Job Title is required']"
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
                :rules="[(v) => !!v || 'Role is required']"
                outlined
              ></v-select>
              <p class="white--text">Talent Requirements</p>
              <v-textarea dark outlined dense label="Write Something">
              </v-textarea>
            </v-col>
            <v-row>
              <v-spacer></v-spacer>
              <v-col cols="8">
                <v-btn
              depressed
              type="submit"
              color="font-weight-bold lightGrey black--text"
              large
            >
              Submit
              <v-icon small>mdi-arrow-right</v-icon>
            </v-btn>
            <v-btn depressed large class="ml-3" @click="resetValidation">Cancel</v-btn>
              </v-col>
            </v-row>
          </v-row>
        </v-form>
      </v-flex>
      <v-spacer></v-spacer>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "Conntect",
  props: {
    btn: Boolean,
  },
  data() {
    return {
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      dialog: this.btn,
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
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>