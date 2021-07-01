<template>
  <div
    class="ma-5"
    v-if="showCast && showCast.length">
    <h3>Cast and characters</h3>
    <v-slide-group
      v-model="slideModel"
      class="pa-4"
      center-active
      show-arrows
    >
      <v-slide-item
        v-for="(cast, index) in showCast"
        :key="index"
        v-slot="{ toggle }"
      >
        <v-card
          class="ma-4"
          heigth="100"
          width="100"
          @click="toggle"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <ActorCard
              :actor="cast.person.name"
              :character="cast.character.name"
              :img="cast.character.image.medium"
            />
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
import ActorCard from './ActorCard'

export default {
  name: 'ActorList',
  props: {
    showCast: Array
  },
  components: {
    ActorCard
  },
  data: () => ({
    slideModel: 0
  })
}
</script>
