<template>
  <v-snackbar
      v-model="snackbar"
      timeout="-1"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="close"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Snackbar',
  data: () => ({
    text: 'Oops, it looks like the show doesn\'t exist'
  }),
  computed: {
    ...mapGetters(['snackbar'])
  },
  methods: {
    close () {
      this.$store.dispatch('closeSnackbar')
    }
  }
}
</script>

<style scoped>

</style>
