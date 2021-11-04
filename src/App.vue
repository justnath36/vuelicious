<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app class="deep-purple accent-4" dark>
      <v-list>
        <v-list-item v-for="link in links" :key="link.title" link :to="link.url">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-spacer></v-spacer>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="deep-purple accent-4" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title></v-toolbar-title>
    </v-app-bar>

    <v-main>
    <v-container>
    <router-view :key="$route.fullPath"></router-view>
    </v-container>
    </v-main>
  </v-app>
</template>

<script>
//import axios from "axios";
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    drawer: false,
    links: [
      { title: "Home", icon: "mdi-home", url:"/" },
      { title: "Register", icon: "mdi-account", url:"register"}
    ],
  }),
  mounted() {
    
  },
  watch: {},
  async created() {

    //example of setting state
    this.setFoo('Im a state variable example');

  },
  //defined in src/store/modules
  computed: mapGetters(["foo"]),
  methods: {
    //defined in src/store/modules
    ...mapActions(["setFoo"]),
  },
};
</script> 
