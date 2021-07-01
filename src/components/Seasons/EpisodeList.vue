<template>
  <v-simple-table dense>
    <template v-slot:default>
      <thead class="blue lighten-3">
        <tr>
          <th class="text-center">
            №
          </th>
          <th class="text-center">
            Date
          </th>
          <th class="text-center">
            Name
          </th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr
          v-for="(episode, index) in season"
          :key="index"
          :class="index % 2 === 0 ? 'blue lighten-5' : null"
        >
          <td>{{episode.seasonNumber}}x{{episode.episodeNumber}}</td>
          <td>{{episode.date}}</td>
          <td>{{episode.name}}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: 'EpisodeList',
  props: {
    season: Array
  }
}
</script>

<style scoped>
</style>
