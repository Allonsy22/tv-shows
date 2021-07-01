<template>
  <div class="main-container">
    <Banner />
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import { getRandomIntInclusive } from '@/utils/utils'

export default {
  name: 'StartPage',
  components: {
    Banner
  },
  mounted () {
    this.findShowByName()
  },
  methods: {
    findShowByName () {
      const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
      const lenght = letters.length
      const randomIndex = getRandomIntInclusive(0, lenght - 1)
      this.$store.dispatch('findShowByName', letters[randomIndex])
    }
  }

}
</script>

<style scoped>

</style>
