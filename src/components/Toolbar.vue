<template>
  <v-app-bar
    dense
    max-height="50"
    color="transparent"
    class="toolbar-container">
    <v-toolbar-title>
      <router-link to="/" class="link">
        <v-icon size="40">mdi-filmstrip</v-icon>
      </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <div class="test">
      <v-text-field
        v-model="name"
        background-color="grey lighten-2"
        color="black"
        append-icon="mdi-magnify"
        hide-details
        rounded
        @click:append="findShowByName"
        @keydown.enter="findShowByName"
      ></v-text-field>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Toolbar',
  data: () => ({
    name: ''
  }),
  methods: {
    findShowByName () {
      if (this.name.trim().length !== 0) {
        this.$store.dispatch('findShowByName', this.name)
        if (this.$route.name !== 'Home') this.$router.push({ name: 'Home' })
        this.clearName()
      }
    },
    clearName () {
      this.name = ''
    }
  }
}
</script>

<style scoped>
.toolbar-container {
  position: absolute;
  z-index: 9999;
}

.link {
  text-decoration: none;
}
</style>
