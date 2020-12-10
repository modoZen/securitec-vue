<template lang="pug">
div
  section.hero.is-success.is-fullheight
    // Hero head: will stick at the top
    appHeader
    // Hero content: will be in the middle
    .hero-body
      .container
        router-view
</template>

<script>
import appHeader from "./components/AppHeader";
export default {
  name: "App",
  components: {
    appHeader
  }
};
</script>

<style>
#nav a.router-link-exact-active {
  color: #42b983;
}
.container {
  width: 100%;
}
</style>
