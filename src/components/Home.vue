<template>
  <div>
      <h1>{{foo}}</h1>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
//import axios from "axios";

export default {
  name: "Home",
  data: () => ({
    
  }),
  computed: mapGetters(["foo"]),
  methods: {
    ...mapActions(["setFoo"]),
  },  
};
</script>