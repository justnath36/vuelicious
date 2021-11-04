import Vuex from 'vuex';
import Vue from 'vue';
import exampleStateModule from './modules/example-state-module';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    exampleStateModule,
  }
});