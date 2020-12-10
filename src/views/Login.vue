<template lang="pug">
div
  h1.title Acceso al sistema
  div
    .columns.is-centered
      .column.is-4
        form.box(@submit.prevent="login")
          div.field
            input.input(
              v-model="nickname",
              type="text",
              name="nickname",
              requiered,
              placeholder="Ingrese su nombre, gracias",
              v-focus
            ) 
          div.field
            button.button.is-primary.is-rounded.is-normal(type="submit") Ingresar
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      nickname: null,
      error: null
    };
  },
  methods: {
    login() {
      if (this.nickname) {
        this.$store.state.isAuthenticated = true;
        this.$store.state.nickname = this.nickname;
        this.$router.push("/");
      }else{
        alert("No podra ingresar sin ingresar su nick jejeje")
      }
    }
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
</script>

<style>
</style>