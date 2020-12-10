<template lang="pug">
div
  h1.title Lista de usuarios
  .field.has-text-right
    router-link.button.is-link(
      to="/Create",
    )
      span.icon
        i.fa.fa-plus
      span Crear nuevo
  div.columns
    card.column.is-6(
      v-for="user in users"
      :key="user.id"
      :id="user.id"
      :name="user.employee_name"
    )
</template>

<script>
import card from '../components/Card'
export default {
  name: "Index",
  data() {
    return {
      users: [],
    };
  },
  components: {
    card
  },
  methods: {
    getAllUser() {
      this.$service.userService.getAll().then((r) => {
        this.users=r.data.data
        console.log(r.data.data)
      });
    },
  },
  
  mounted() {
    this.getAllUser();
  },
};
</script>

<style>
.columns{
  flex-wrap: wrap;
}
</style>
