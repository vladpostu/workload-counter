import { createStore } from "vuex";

export default createStore({
  state: {
    monday: {
      title: "Monday",
      hours: 0,
      mins: 0,
    },
    tuesday: {
      title: "Tuesday",
      hours: 0,
      mins: 0,
    },
    wednesday: {
      title: "Wednesday",
      hours: 0,
      mins: 0,
    },
    thursday: {
      title: "Thursday",
      hours: 0,
      mins: 0,
    },
    friday: { title: "Friday", hours: 0, mins: 0 },
    saturday: { title: "Saturday", hours: 0, mins: 0 },
    sunday: { title: "Sunday", hours: 0, mins: 0 },
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
