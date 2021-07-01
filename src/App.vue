<template>
  <v-app>
    <Toolbar />
    <router-view :key="$route.path"></router-view>
    <Snackbar />
  </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import Snackbar from '@/components/Snackbar'

export default {
  name: 'App',

  components: {
    Toolbar,
    Snackbar
  }
}
</script>

<style scoped>
</style>
