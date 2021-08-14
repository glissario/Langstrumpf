<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  title: "Projekt Langstrumpf",
  components: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
#app {
  font-family: "Atkinson Hyperlegible", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 2rem;
  background-color: #f4f1de;
}
html {
  background-color: #f4f1de;
  font-family: "Lato", sans-serif;
  font-size: 20px;
  min-width: 360px;
  margin: auto;
}

@media screen and (max-width: 1024px) {
  html {
    font-size: 16px;
  }
}
@media screen and (max-width: 768px) {
  html {
    font-size: 14px;
  }
}
</style>
