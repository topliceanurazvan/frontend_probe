<template>
  <div class="footer">
    <div class="footer-title">
      <h2>hubgets</h2>
      <i class="fas fa-comments"></i>
    </div>
    <div>
      <h3>Our company</h3>
      <a v-for="link in company_links" :key="link" href="#">{{ link }}</a>
    </div>
    <div>
      <h3>Hubgets</h3>
      <a v-for="link in hubgets_links" :key="link" href="#">{{ link }}</a>
    </div>
    <div>
      <h3>Social</h3>
      <a href="#" v-for="link in social_links" :key="link.text"
        ><i :class="link.icon"></i>{{ link.text }}</a
      >
    </div>
    <p class="copyright">&copy; Copyrights 2015 Hubgets, Inc</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      company_links: [
        "About us",
        "Blog",
        "We are hiring",
        "Terms of Service",
        "Contact us"
      ],
      hubgets_links: ["Join the program", "Features", "Current status"],
      social_links: [
        { icon: "fab fa-twitter", text: "Twitter" },
        { icon: "fab fa-youtube", text: "Youtube" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #0980ab;

  width: 100%;
  padding: 2.2rem;

  display: grid;
  grid-template-columns: repeat(4, 15rem);
  grid-row-gap: 1rem;
  justify-content: center;
}

.fas {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.5);
}

.fab {
  font-size: 1rem;
  color: #fff;
  margin-right: 0.8rem;
}

a {
  text-transform: none !important;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8rem;
  display: block;
  margin-bottom: 0.4rem;
}

a:hover {
  color: #fff;
}

h2 {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.2rem;
  display: inline-block;
  margin-right: 0.7rem;
}

h3 {
  color: #fff;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 0.7rem;
}

p {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.7rem;
}

@media only screen and (max-width: 720px) {
  .footer {
    grid-template-columns: repeat(3, 15rem);

    &-title {
      display: none;
    }
  }
}

@media only screen and (max-width: 550px) {
  .footer {
    grid-template-columns: repeat(2, 15rem);
    justify-items: center;
  }

  .copyright {
    grid-column: 1 / 3;
  }
}
</style>
