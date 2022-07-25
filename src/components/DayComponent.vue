<template>
  <div class="day-component p-3 mt-2">
    <div class="fw-bold text-center fs-5">{{ title }}</div>
    <div class="times">
      <div class="mt-3">Start time</div>
      <div class="times-inputs">
        <input
          class="input-time"
          type="number"
          max="23"
          min="0"
          required
          v-model="startHours"
          @change="updateHours"
        />
        <span class="ms-1">:</span>
        <input
          class="input-time ms-1"
          type="number"
          max="59"
          min="0"
          required
          v-model="startMins"
          @change="updateHours"
        />
      </div>
    </div>
    <div class="times">
      <div class="mt-3">Finish time</div>
      <div class="times-inputs">
        <input
          class="input-time"
          type="number"
          max="23"
          min="00"
          v-model="finishHours"
          @change="updateHours"
        />
        <span class="ms-1">:</span>
        <input
          class="input-time ms-1"
          type="number"
          max="59"
          min="0"
          required
          v-model="finishMins"
          @change="updateHours"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  title: "DayComponent",
  props: {
    title: String,
  },
  data() {
    return {
      startHours: 0,
      startMins: 0,
      finishHours: 0,
      finishMins: 0,
    };
  },
  methods: {
    updateHours() {
      let dayHours;
      let dayMins;

      console.log(dayMins);

      if (this.finishHours < this.startHours) {
        dayHours = this.finishHours + 24 - this.startHours;
      } else {
        dayHours = this.finishHours - this.startHours;
      }

      if (this.finishMins - this.startMins < 0) {
        dayMins = this.finishMins + 60 - this.startMins;
        dayHours--;
      } else {
        dayMins = this.finishMins - this.startMins;
      }

      if (dayMins > 60) {
        dayHours++;
        dayMins = dayMins - 60;
      }

      dayHours = dayHours + dayMins / 100;
      Math.round(dayHours);

      switch (this.$props.title) {
        case "Monday":
          this.$store.commit("updateMondayHours", dayHours);
          break;

        case "Tuesday":
          this.$store.commit("updateTuesdayHours", dayHours);
          break;

        case "Wednesday":
          this.$store.commit("updateWednesdayHours", dayHours);
          break;

        case "Thursday":
          this.$store.commit("updateThursdayHours", dayHours);
          break;

        case "Friday":
          this.$store.commit("updateFridayHours", dayHours);
          break;

        case "Saturday":
          this.$store.commit("updateSaturdayHours", dayHours);
          break;

        case "Sunday":
          this.$store.commit("updateSundayHours", dayHours);
          break;
      }
    },
  },
};
</script>

<style>
.day-component {
  width: 150px;
  border: 1px solid #adb5bd;
}

.times {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.times-inputs {
  display: flex;
  flex-direction: row;
  margin-top: 0.35rem;
}

.input-time {
  width: 50px;
}
</style>
