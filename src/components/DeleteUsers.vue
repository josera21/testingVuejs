<template>
  <div class="users">
    <v-container>
      <h1>Usuarios eliminados</h1>
      <template v-for="(user, i) in deleteUsers">
        <v-list-tile avatar :key="i">
          <v-list-tile-avatar>
            <img src="https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-text="user.name"></v-list-tile-title>
            <v-list-tile-sub-title v-html="user.email"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
      <v-btn light>
        <router-link to="/users">Go to users</router-link>
      </v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'DeleteUsers',
  computed: {
    deleteUsers() {
      return this.$store.state.deleteUsers;
    }
  }
}
</script>

<style scoped>
  .contacted {
    text-decoration: line-through;
  }
</style>
