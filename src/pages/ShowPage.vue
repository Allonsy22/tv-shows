<template>
  <div :class="pageStyle">
    <ShowInfoCard :currentShow="currentShow"/>
    <ActorList :showCast="showCast"/>
    <v-divider></v-divider>
    <SeasonsTab :showSeasons="showSeasons" />
  </div>
</template>

<script>
import ShowInfoCard from '@/components/ShowInfoCard'
import ActorList from '@/components/ActorList/ActorList'
import SeasonsTab from '@/components/Seasons/SeasonsTab'
import { mapGetters } from 'vuex'

export default {
  name: 'ShowPage',
  components: {
    ShowInfoCard,
    ActorList,
    SeasonsTab
  },
  data: () => ({
    largeScreen: 1264
  }),
  mounted () {
    this.getShowEpisodeInfo()
  },
  computed: {
    ...mapGetters([
      'currentShow',
      'showCast',
      'showSeasons'
    ]),
    pageStyle () {
      if (this.$vuetify.breakpoint.width > this.largeScreen) return 'show-page-container-large'
      return 'show-page-container'
    }
  },
  methods: {
    getShowEpisodeInfo () {
      const showId = this.currentShow?.id
      if (!showId) {
        this.$router.push({ name: 'Home' })
        return
      }
      this.$store.dispatch('getShowCast', showId)
      this.$store.dispatch('getShowSeasons', showId)
    }
  }

}
</script>

<style scoped>
.show-page-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 70px;
}

.show-page-container-large {
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 70px;
}
</style>
