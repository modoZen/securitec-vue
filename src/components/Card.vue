<template lang="pug">
div
  router-link(:to="'/user/'+ id")
    .post(v-rainbow)
      p {{ name }}
</template>>

<script>
export default {
  name: "User",
  props: ["id","name"],
  directives: {
    rainbow: {
      bind(el) {
        el.style.color =
          "#" +
          Math.random()
            .toString()
            .slice(2, 8);
      }
    }
  }
};
</script>

<style>
.post {
  padding: 1rem;
  border: 1px solid whitesmoke;
  margin: 1rem 0;
}
.post:hover {
  border: 1px solid #3d2cc4;
  color: #3622c7 !important;
}

a {
  color: whitesmoke;
  text-decoration: none;
}
</style>