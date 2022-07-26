import { createStore } from "vuex";

export default createStore({
  state: {
    monday: {},
    tuesday: {},
    wednesday: {},
    thursday: {},
    friday: {},
    saturday: {},
    sunday: {},
  },
  getters: {
    monday(state) {
      return state.monday;
    },
    tuesday(state) {
      return state.tuesday;
    },
    wednesday(state) {
      return state.wednesday;
    },
    thursday(state) {
      return state.thursday;
    },
    friday(state) {
      return state.friday;
    },
    saturday(state) {
      return state.saturday;
    },
    sunday(state) {
      return state.sunday;
    },
  },
  mutations: {
    updateMonday(state, day) {
      state.monday = day;
    },
    updateTuesday(state, day) {
      state.tuesday = day;
    },
    updateWednesday(state, day) {
      state.wednesday = day;
    },
    updateThursday(state, day) {
      state.thursday = day;
    },
    updateFriday(state, day) {
      state.friday = day;
    },
    updateSaturday(state, day) {
      state.saturday = day;
    },
    updateSunday(state, day) {
      state.sunday = day;
    },
  },
  actions: {},
  modules: {},
});
