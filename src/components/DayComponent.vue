<template>
  <div class="day-component p-3 mt-2">
    <div class="fw-bold text-center fs-5">{{ title }}</div>
    <div class="times">
      <div class="mt-3">Start time</div>
      <div
        class="times-inputs"
        style="display: flex; flex-direction: row; align-items: center"
      >
        <select
          class="input-time hours form-control start-hours"
          required
          v-model="startHours"
          @change="updateHours"
        >
          <option value="0">00</option>
          <option value="1">01</option>
          <option value="2">02</option>
          <option value="3">03</option>
          <option value="4">04</option>
          <option value="5">05</option>
          <option value="6">06</option>
          <option value="7">07</option>
          <option value="8">08</option>
          <option value="9">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
        </select>
        <span class="ms-1">:</span>
        <select
          class="input-time ms-1 form-control"
          required
          v-model="startMins"
          @change="updateHours"
        >
          <option value="0">00</option>
          <option value="5">05</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
          <option value="35">35</option>
          <option value="40">40</option>
          <option value="45">45</option>
          <option value="50">50</option>
          <option value="55">55</option>
        </select>
      </div>
    </div>
    <div class="times">
      <div class="mt-3">Finish time</div>
      <div class="times-inputs">
        <select
          class="input-time form-control finish-hours"
          v-model="finishHours"
          @change="updateHours"
        >
          <option value="0">00</option>
          <option value="1">01</option>
          <option value="2">02</option>
          <option value="3">03</option>
          <option value="4">04</option>
          <option value="5">05</option>
          <option value="6">06</option>
          <option value="7">07</option>
          <option value="8">08</option>
          <option value="9">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
        </select>
        <span class="ms-1">:</span>
        <select
          class="input-time ms-1 form-control"
          v-model="finishMins"
          @change="updateHours"
        >
          <option value="0">00</option>
          <option value="5">05</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
          <option value="35">35</option>
          <option value="40">40</option>
          <option value="45">45</option>
          <option value="50">50</option>
          <option value="55">55</option>
        </select>
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
      let hours;
      let mins;
      if (this.finishMins < this.startMins) {
        mins = this.finishMins + 60;
      } else {
        mins = this.finishMins - this.startMins;
      }

      if (this.finishHours < this.startHours) {
        hours = this.finishHours + 24;
      } else {
        hours = this.finishHours - this.startHours;
      }

      this.$store.commit("update" + this.$props.title, {
        day: this.$props.title,
        hours: hours,
        mins: mins,
      });
    },
  },
};
</script>

<style>
.day-component {
  width: 170px;
  border: 1px solid #adb5bd;
  margin: 10px;
}

.times {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.times-inputs {
  display: flex;
  flex-direction: row;
  margin-top: 0.35rem;
}

.input-time {
  width: 63px;
}
</style>
