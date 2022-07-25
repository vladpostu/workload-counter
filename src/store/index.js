import { createStore } from "vuex";

export default createStore({
  state: {
    totalHours: 0,
    mondayHours: 0,
    tuesdayHours: 0,
    wednesdayHours: 0,
    thursdayHours: 0,
    fridayHours: 0,
    saturdayHours: 0,
    sundayHours: 0,
  },
  getters: {
    mondayHours(state) {
      return state.mondayHours;
    },
    tuesdayHours(state) {
      return state.tuesdayHours;
    },
    wednesdayHours(state) {
      return state.wednesdayHours;
    },
    thursdayHours(state) {
      return state.thursdayHours;
    },
    fridayHours(state) {
      return state.fridayHours;
    },
    saturdayHours(state) {
      return state.saturdayHours;
    },
    sundayHours(state) {
      return state.sundayHours;
    },
  },
  mutations: {
    updateMondayHours(state, hours) {
      state.mondayHours = hours;
    },
    updateTuesdayHours(state, hours) {
      state.tuesdayHours = hours;
    },
    updateWednesdayHours(state, hours) {
      state.wednesdayHours = hours;
    },
    updateThursdayHours(state, hours) {
      state.thursdayHours = hours;
    },
    updateFridayHours(state, hours) {
      state.fridayHours = hours;
    },
    updateSaturdayHours(state, hours) {
      state.saturdayHours = hours;
    },
    updateSundayHours(state, hours) {
      state.sundayHours = hours;
    },
  },
  actions: {},
  modules: {},
});
