<template>
  <div>
    <h1>Hello world from VueJs</h1>
    <h3>{{autor}}</h3>
    <h2>My projects</h2>
    <ul>
      <template v-for="(project, i) in projects">
        <li :key="i">
          {{project.name}} - {{project.role}}
        </li>
      </template>
    </ul>
    <router-link to="/users">Go to Users</router-link>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      autor: 'José Camacaro',
      projects: [
        {name: "CryptoPOS", role: "Frontend developer"},
        {name: "PartnerGood", role: "Fullstack developer"}
      ]
    }
  }
}
</script>
