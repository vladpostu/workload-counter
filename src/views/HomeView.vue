<template>
  <div class="home resized mt-5">
    <h2 class="fs-4">Calculate how much you have to work this week</h2>
    <form class="days mt-5">
      <DayComponent title="Monday" key="1" />
      <DayComponent title="Tuesday" key="2" />
      <DayComponent title="Wednesday" key="3" />
      <DayComponent title="Thursday" key="4" />
      <DayComponent title="Friday" key="5" />
      <DayComponent title="Saturday" key="6" />
      <DayComponent title="Sunday" key="7" />
    </form>
    <button
      class="btn btn-success mt-5"
      style="position: relative; left: 50%; transform: translateX(-50%)"
      @click="calculateTotalHours"
    >
      Calculate workload
    </button>
    <div class="fs-3 mt-5 text-center">{{ totalHours }}</div>
  </div>
</template>

<script>
import DayComponent from "@/components/DayComponent.vue";

export default {
  name: "HomeView",
  components: {
    DayComponent,
  },
  data() {
    return {
      totalHours: 0,
    };
  },
  methods: {
    calculateTotalHours() {
      console.log(this.$store.getters.monday);
      this.totalHours =
        this.$store.getters.monday.hours +
        this.$store.getters.tuesday.hours +
        this.$store.getters.wednesday.hours +
        this.$store.getters.thursday.hours +
        this.$store.getters.friday.hours +
        this.$store.getters.saturday.hours +
        this.$store.getters.sunday.hours;
    },
  },
};
</script>

<style>
.days {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}
</style>
