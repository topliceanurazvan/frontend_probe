<template>
  <div class="login">
    <i class="far fa-address-card"></i>
    <form class="login-form" v-on:submit.prevent>
      <b-field label="First name" custom-class="has-text-grey-light">
        <b-input></b-input>
      </b-field>
      <b-field label="Last name" custom-class="has-text-grey-light">
        <b-input></b-input>
      </b-field>
      <b-field
        label="Company"
        class="login-form-full-column"
        custom-class="has-text-grey-light"
      >
        <b-input></b-input>
      </b-field>
      <b-field
        label="E-mail address"
        class="login-form-full-column"
        custom-class="has-text-grey-light"
      >
        <b-input
          type="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}"
          validation-message="Invalid e-mail address"
        ></b-input>
      </b-field>
      <button>Register</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.login {
  height: 90%;
  background-color: #fff;
  padding: 1rem;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);

  &-form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;

    &-full-column {
      grid-column: 1 / 3;
    }
  }
}

.far {
  color: #0ea5da;
  font-size: 2.6rem;
  background-color: #fff;
  border-radius: 50%;
  padding: 1.3rem;
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.3);
  transform: translateY(-70%) translateX(10rem);
}

button {
  color: white;
  background-color: #1599d4;
  text-transform: uppercase;
  border: none;
  padding: 0.6rem;
  font-size: 1rem;
  width: 10rem;
  letter-spacing: 0.05rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s;
  border-radius: 0.2rem;
}

button:hover {
  letter-spacing: 0.15rem;
}
</style>
