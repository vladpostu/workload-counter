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
      console.log(this.totalHours);
      this.totalHours =
        this.$store.getters.mondayHours +
        this.$store.getters.tuesdayHours +
        this.$store.getters.wednesdayHours +
        this.$store.getters.thursdayHours +
        this.$store.getters.fridayHours +
        this.$store.getters.saturdayHours +
        this.$store.getters.sundayHours;
    },
  },
};
</script>

<style>
.days {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
