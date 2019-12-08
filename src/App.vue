<template>
  <div id="app">
    <Navbar />
    <div class="header">
      <h1>Create organization</h1>
      <p class="header-text">
        Small or large, any team will increase productivity with Hubgets.
      </p>
      <p class="header-text">
        It allows teams to filter noise and focus on results.
      </p>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%; /* 1rem = 10px */
}

.header {
  background-color: #0ea5da;
  height: 23.5rem;
  padding-bottom: 4rem;

  display: grid;
  justify-items: center;
  align-content: center;

  &-text {
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.4rem;
  }
}

h1 {
  color: #fff;
  font-size: 2.8rem;
  font-weight: 500;
  margin-bottom: 1rem;
}
</style>
