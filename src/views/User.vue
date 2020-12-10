<template lang="pug">
div
  h1.title Usuario
  .field
    router-link.button.is-link(
      to="/",
    )
      span.icon
        i.fa.fa-arrow-left
      span Regresar
  tableUser(
    :id="user.id",
    :name="user.employee_name",
    :age="user.employee_age",
    :salary="user.employee_salary"
  )
</template>

<script>
import mixinuser from '../mixins/_index'
import tableUser from "../components/TableUser";
export default {
  name: "UserId",
  data() {
    return {
      user: {}
    };
  },
  components: {
    tableUser
  },
  methods: {},
  mounted() {
    this.getUser();
  },
  mixins:[mixinuser]
};
</script>