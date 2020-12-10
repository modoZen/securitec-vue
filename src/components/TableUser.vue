<template lang="pug">
.table__wrapper
  table.table.is-fullwidth
    thead
      tr
        td.has-text-centered Nombre
        td.has-text-centered Años
        td.has-text-centered Salario
        td.has-text-centered Editar
        td.has-text-centered Eliminar
    tbody
      tr
        td.has-text-centered {{ name | toUppercase }}
        td.has-text-centered {{ age }}
        td.has-text-centered {{ salary | currency}}
        td.has-text-centered
          router-link(:to="`/Update/${id}`")
            span.icon
              i.far.fa-edit
        td.has-text-centered
          a(@click="eliminate(id)")
            span.icon 
              i.fas.fa-trash-alt
</template>

<script>
import mixinuser from "../mixins/_index";
export default {
  name: "TableUser",
  props: {
    id: null,
    name: null,
    age: null,
    salary: {
      type: Number,
      default: null
    }
  },
  methods: {
    eliminate(id) {
      this.$service.userService.eliminate(id).then(() => {
        this.$router.push("/");
      });
    }
  },
  mixins: [mixinuser]
};
</script>

<style>
a {
  color: black;
}
a:hover {
  color: gray;
}
</style>