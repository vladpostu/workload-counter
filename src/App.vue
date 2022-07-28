<template>
  <nav class="navbar">
    <div class="navbar-wrapper">
      <h1>workload-counter</h1>
      <a href="https://github.com/vladpostu/workload-counter">GitHub Repo</a>
    </div>
  </nav>
  <router-view />
</template>

<style>
.navbar {
  height: 50px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.navbar-wrapper {
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.navbar-wrapper > h1 {
  font-size: 1rem;
  margin: 0;
}

.resized {
  width: 80%;
  margin: auto;
}
</style>
