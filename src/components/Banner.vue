<template>
  <div
    v-if="currentShow"
    class="banner-container">
    <v-img
      :src="currentShow.image.original"
      :contain="imageContain"
      height="inherit">
      <div :class="imageContentStyle">
        <v-img
          class="background-img"
          :src="currentShow.image.medium"></v-img>
        <div :class="descriptionStyle">
          <h1
            @click="navigateToShowInfo"
            class="name text-shadow"
          >
            {{currentShow.name}}
          </h1>
          <div
            class="description text-shadow"
            v-html="getDescriptionText(currentShow)"></div>
          <p
            class="genres text-shadow"
            v-if="currentShow.genres.length">
              Genres: <span class="genre">{{getGenres(currentShow)}}</span>
            </p>
          <div class="rating text-shadow" v-if="currentShow.rating.average">
            <v-icon color="yellow">mdi-star</v-icon>
            {{currentShow.rating.average}} <span class="total-rating">/ 10</span>
          </div>
        </div>
        <div :class="sliderStyle">
          <BannerSlider />
        </div>
      </div>
    </v-img>
  </div>
</template>

<script>
import BannerSlider from '@/components/BannerSlider'
import { mapGetters } from 'vuex'

export default {
  name: 'Banner',
  components: {
    BannerSlider
  },
  data: () => ({
    tablet: 960,
    mobile: 600,
    firstColor: '',
    secondColor: ''
  }),

  computed: {
    ...mapGetters([
      'currentShow'
    ]),
    imageContentStyle () {
      if (this.$vuetify.breakpoint.width < this.tablet) return 'image-content-mobile'
      return 'image-content'
    },
    descriptionStyle () {
      if (this.$vuetify.breakpoint.width < this.tablet) return 'description-container-mobile'
      return 'description-container'
    },
    sliderStyle () {
      if (this.$vuetify.breakpoint.width < this.tablet) return 'slider-container-mobile'
      return 'slider-container'
    },
    imageContain () {
      if (this.$vuetify.breakpoint.width < this.mobile) return false
      return true
    }
  },
  methods: {
    navigateToShowInfo () {
      const showId = this.currentShow?.id
      this.$router.push({ name: 'Show', params: { id: showId } })
    },
    getDescriptionText (show) {
      if (show?.summary?.length > 500) return show.summary.slice(0, 500) + '...'
      return show.summary
    },
    getGenres (show) {
      if (show) return show.genres.join(', ')
      return ''
    }
  }
}
</script>

<style scoped>
.banner-container {
  width: 100%;
  height: 100vh;
}

.background-img {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-filter: blur(10px);
  -moz-filter: blur(10px);
  -o-filter: blur(10px);
  -ms-filter: blur(10px);
  filter: blur(10px);
  z-index: -2;
}

.image-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
}

.image-content-mobile {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.description-container {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 0 0 30px;
}

.description-container-mobile {
  width: 90%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
  margin-top: 30px;
}

.slider-container {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider-container-mobile {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-shadow {
  text-shadow:
     1px  1px     #000,
    -1px  1px     #000,
     1px -1px     #000,
    -1px -1px     #000,
     1px  1px 5px #555;
}

.name {
  color: #fff;
  font-size: 25px;
  text-align: left;
  margin: 0;
  text-decoration: underline;
  cursor: pointer;
}

.description {
  width: 100%;
  color: rgb(207, 207, 207);
  font-size: 12px;
  text-align: left;
  margin: 0;
}

.genres {
  color: #fff;
  font-size: 12px;
  margin: 5px 0 0 0;
}

.genre {
  color: rgb(207, 207, 207);
}

.rating {
  color: #fff;
  font-size: 19px;
  text-align: left;
}

.total-rating {
  color: rgb(207, 207, 207);
  font-size: 11px;
}
</style>
