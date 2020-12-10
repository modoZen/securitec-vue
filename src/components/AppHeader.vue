<template lang="pug">
.hero-head
  header.navbar
    .container
      .navbar-brand
        a.navbar-item.title Securitec-Task
      #navbarMenuHeroC.navbar-menu(v-if="$store.state.isAuthenticated")
        .navbar-end
          a.navbar-item
            span.icon
              i.fa.fa-user
            span Hola {{ $store.state.nickname }}
          span.navbar-item
            a.button.is-success.is-inverted(href="#")
              span.icon
                i.fab.fa-github
              span Download
          span.navbar-item
            button.button.is-danger.is-inverted(@click="logout")
              span.icon
                i.fa.fa-sign-out-alt
              span Desconectar
</template>

<script>
export default {
  name: "AppHeader",
  components: {},
  methods: {
    logout() {
      this.$store.state.isAuthenticated = false;
      this.$router.push("/login");
    },
  },
};
</script>