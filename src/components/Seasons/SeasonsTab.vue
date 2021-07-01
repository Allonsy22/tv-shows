<template>
  <div class="main-container mt-4 mb-4">
    <v-card v-if="showSeasons">
      <template>
          <v-tabs
            v-model="tab"
            align-with-title
            background-color="blue lighten-1"
            center-active
            dark
            hide-slider
            show-arrows
          >
            <v-tabs-slider color="yellow"></v-tabs-slider>

            <v-tab
              v-for="season in showSeasons.length"
              :key="season"
            >
              Season: {{season}}
            </v-tab>
          </v-tabs>
        </template>

        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="(season, index) in showSeasons"
            :key="index"
          >
            <EpisodeList :season="season"/>
          </v-tab-item>
        </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import EpisodeList from './EpisodeList'

export default {
  name: 'SeasonsTab',
  props: {
    showSeasons: Array
  },
  components: {
    EpisodeList
  },
  data: () => ({
    tab: 0
  })
}
</script>

<style scoped>
.main-container {
  width: 80%;
  margin: 0 auto;
}
</style>
