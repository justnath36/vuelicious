<template>
  <div class="login__page">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="userName"
            :counter="15"
            label="Username"
            :rules="[rules.required, rules.spaces]"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="showPassword ? 'text' : 'password'"
            name="input-10-2"
            label="Password"
            hint="At least 8 characters"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="repeatPassword"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[
              rules.required,
              rules.min,
              (v) =>
                v == this.password ||
                `The passwords you have entered don't match`,
            ]"
            :type="showPassword ? 'text' : 'password'"
            name="input-10-2"
            label="Repeat Password"
            hint="At least 8 characters"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-col>
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit">
          Create Account
        </v-btn>
      </v-row>
    </v-form>
  </div>
</template>
<script>

import axios from "axios";

export default {
  name: "Register",
  data: () => ({
    valid: true,
    userName: "",
    email: "",
    password: "",
    repeatPassword: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    showPassword: false,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      spaces: (v) =>
        /^(?=.{6,15}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(v) ||
        "Must not contain spaces, special characters. Min 6 characters.",
      passwordMatch: (v) =>
        v != this.password || `The passwords you have entered don't match`,
    },
  }),
  methods: {
    submit() {
      var valid = this.$refs.form.validate();

      if (valid) {
        var formData = {
          email: this.email,
          password: this.password
        }
        this.submitForm(formData);
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    submitForm(data){
        this.createAccountApi(data)
    },
    createAccountApi(data){
      return axios
          .post("sign-up-api-url-goes-here", data, {
          })
          .then((response) => {
            console.log(response.data)
          })
          .catch((error) => {
            console.log(error);
          });
    }
  },
};
</script>