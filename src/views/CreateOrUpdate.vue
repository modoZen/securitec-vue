<template lang="pug">
  div
    h1.title {{ isUpdate ? 'Actualizar usuario' : 'Agregar usuario' }}
    h2.subtitle {{ isUpdate ? 'Formulario de actualizacion ' : 'Formulario de creación' }}  
    form.box(@submit.prevent="save")
      .field
        label(for="name") Nombres
        input#name.input(
          v-model="user.employee_name",
          type="text",
          name="firstname",
          requiered,
          placeholder="Ingrese un nombre"
        )
      .field
        label(for="age") Edad
        input#age.input(
          v-model="user.employee_age",
          type="text",
          name="apellido",
          placeholder="Ingrese su edad",
          required
        )
      .field
        label(for="salary") Salario
        input#salary.input(
          v-model="user.employee_salary",
          type="text",
          name="correo",
          placeholder="Ingrese el salario",
          required
        )
      .field
        button.button.is-primary.is-rounded(type="submit") Guardar
</template>

<script>
import mixinuser from "../mixins/_index";
export default {
  name: "CreateOrUpdate",
  data() {
    return {
      user: {
        employee_name: "",
        employee_age: null,
        employee_salary: null
      }
    };
  },
  computed: {
    isUpdate() {
      return this.$route.params.id != undefined;
    }
  },
  methods: {
    save() {
      this.loading = true;
      if (this.isUpdate) {
        this.$service.userService
          .update(this.$route.params.id, this.user)
          .then(() => {
            this.$router.push("/");
          })
          .catch(() => {
            console.log("Algo salió mal ..");
          });
      } else {
        this.$service.userService
          .create(this.user)
          .then(() => {
            this.$router.push("/");
          })
          .catch(() => {
            console.log("Algo salió mal ..");
          });
      }
    }
  },
  mixins: [mixinuser],
  mounted() {
    if (this.isUpdate) {
      this.getUser(this.$route.params.id);
    }
  }
};
</script>