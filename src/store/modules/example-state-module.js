const state = {
    foo: false,
  };
  
  const getters = {
      foo: state => state.foo,
  };
  
  const actions = {
      async setFoo({ commit }, data) {
          commit('setFooState', data);
      },
  };
  
  const mutations = {
      setFooState: (state, data) => {
          state.foo = data
      },      
  };
  
  export default {
    state,
    getters,
    actions,
    mutations
  };
  