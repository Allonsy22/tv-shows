<template>
    <v-slide-group
      v-model="showId"
      class="pa-4"
      center-active
      show-arrows
    >
      <template v-slot:next>
        <v-icon
          color="white"
          class="text-shadow"
        >mdi-arrow-right-drop-circle-outline</v-icon>
      </template>

      <template v-slot:prev>
        <v-icon
          color="white"
          class="text-shadow"
        >mdi-arrow-left-drop-circle-outline</v-icon>
      </template>

      <v-slide-item
        v-for="(show, index) in shows"
        :key="index"
        v-slot="{ active, toggle }"
      >
        <v-card
          :class="active ? 'active' : 'disabled'"
          class="ma-4"
          heigth="100"
          width="100"
          @click="active ? null : selectShow(toggle)"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-img
              width="inherit"
              :src="show.image.medium"
            ></v-img>
            <div class="name">{{show.name}}</div>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BannerSlider',
  data: () => ({
    showId: 0
  }),
  computed: {
    ...mapGetters([
      'shows'
    ])
  },
  methods: {
    selectShow (func) {
      func()
      this.$store.dispatch('setCurrentShow', this.showId)
    }
  },
  watch: {
    shows () {
      this.showId = 0
    }
  }

}
</script>

<style scoped>
.name {
  position: absolute;
  bottom: 0;
  width: 100%;
  border-radius: 5px;
  background-color: #02060B;
  color: #fff;
  font-size: 10px;
  text-align: center;
  margin: 3px;
}

.active {
  transform: scale(1.2);
}

.disabled {
  transform: scale(0.9);
}

.text-shadow {
  text-shadow:
     1px  1px     #000,
    -1px  1px     #000,
     1px -1px     #000,
    -1px -1px     #000,
     1px  1px 5px #555;
}
</style>
