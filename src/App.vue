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
    <div class="main">
      <login-form />
      <header-info />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import LoginForm from "./components/LoginForm.vue";
import HeaderInfo from "./components/HeaderInfo.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Navbar,
    LoginForm,
    HeaderInfo,
    Footer
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

.header {
  background-color: #0ea5da;
  height: 15rem;
  padding-bottom: 2rem;

  display: grid;
  justify-items: center;
  align-content: center;

  &-text {
    color: rgba(255, 255, 255, 0.5);
    font-size: 1rem;
  }
}

.main {
  display: grid;
  grid-template-columns: 30rem 23rem;
  grid-column-gap: 3rem;
  justify-content: center;
  justify-items: center;

  background-color: #f7f7f7;
  height: 30rem;
}

h1 {
  color: #fff;
  font-size: 2rem !important;
  font-weight: 500;
  margin-bottom: 1rem;
}

@media only screen and (max-width: 950px) {
  html {
    font-size: 75% !important;
  }

  .main {
    height: 44rem;
  }
}
@media only screen and (min-width: 1700px) {
  html {
    font-size: 125% !important;
  }
}

@media only screen and (max-width: 720px) {
  .main {
    grid-template-columns: 1fr;
    grid-row-gap: 6rem;
    height: 50rem;
  }
}
</style>
