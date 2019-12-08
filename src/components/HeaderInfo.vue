<template>
  <div class="header-info">
    <div>
      <div v-for="info in main_text" :key="info.text" class="header-info-main">
        <i :class="info.icon"></i>
        <p>{{ info.text }}</p>
      </div>
    </div>
    <div class="header-info-contact">
      <i class="far fa-life-ring"></i>
      <div>
        <span>+1 845 894 123</span>
        <a href="#">help@hubgets.com</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      main_text: [
        {
          icon: "fas fa-code-branch",
          text: "Centralizes communication channels and reduces overhead."
        },
        {
          icon: "far fa-comments",
          text:
            "Brings together instant messaging, voice and video communications in the browser."
        },
        {
          icon: "fas fa-cogs",
          text:
            "Captures information across the organization, retains the knowledge, analyzes and improves it."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.header-info {
  display: grid;
  align-content: center;
  grid-row-gap: 3rem;
  height: 90%;

  &-main {
    display: grid;
    grid-template-columns: 2.5rem 1fr;
    align-items: center;
    grid-column-gap: 1rem;

    margin-bottom: 1rem;
  }

  &-contact {
    display: grid;
    grid-template-columns: 3rem 1fr;
    align-items: center;
    grid-column-gap: 1rem;
  }
}

p {
  font-size: 0.9rem;
}

span {
  font-weight: 500;
  display: block;
}

a {
  color: #0ea5da;
}

i {
  font-size: 2rem;
  display: inline-block;
  color: #0ea5da;
}

.fa-life-ring {
  color: #000;
  font-size: 3.5rem;
}
</style>
