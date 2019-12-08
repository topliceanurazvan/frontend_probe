<template>
  <div class="login">
    <i class="far fa-address-card"></i>
    <form class="login-form">
      <b-field label="Name">
        <b-input></b-input>
      </b-field>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.login {
  height: 100%;

  &-form {
    display: grid;
  }
}

.far {
  color: #0ea5da;
  font-size: 2.6rem;
  background-color: #fff;
  border-radius: 50%;
  padding: 1.3rem;
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.3);
  transform: translateY(-50%);
}
</style>
