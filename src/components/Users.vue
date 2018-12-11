<template>
  <div class="users">
    <v-container>
      <h1>Usuarios</h1>
      <v-form v-on:submit="addUser">
        <v-text-field
        v-model="newUser.name"
        label="Nombre"
        required
        >
        </v-text-field>
        <v-text-field
        v-model="newUser.email"
        label="Correo"
        required
        >
        </v-text-field>
        <v-btn dark @click="addUser">
          Agregar
        </v-btn>
      </v-form>
      <template v-for="(user, i) in users">
        <v-list-tile avatar :key="i">
          <v-list-tile-avatar>
            <img src="https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-text="user.name"></v-list-tile-title>
            <v-list-tile-sub-title v-html="user.email"></v-list-tile-sub-title>
          </v-list-tile-content>
          <v-btn fab dark color="red" @click="deleteUser(user)">
            X
          </v-btn>
        </v-list-tile>
      </template>
      <v-btn light>
        <router-link to="/deleteUsers">Go to eliminate users</router-link>
      </v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Users',
  data () {
    return {
      newUser: {},
      users: []
    }
  },
  methods: {
    addUser: function(e) {
      this.users.push({
        name: this.newUser.name,
        email: this.newUser.email,
        contacted: false
      });
      e.preventDefault();
    },
    deleteUser: function(user) {
      this.$store.state.deleteUsers.push(user);
      this.users.splice(this.users.indexOf(user), 1);
    }
  },
  created: function() {
    this.$http.get("https://jsonplaceholder.typicode.com/users").then(function(response) {
      this.users = response.data;
    })
  }
}
</script>

<style scoped>
  .contacted {
    text-decoration: line-through;
  }
</style>
