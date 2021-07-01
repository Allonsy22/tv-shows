<template>
  <div
    v-if="currentShow"
    :class="mainContainerStyle">
    <v-img
      v-if="currentShow.image"
      :src="currentShow.image.medium"
      height="200"
      contain
    ></v-img>
    <div class="description-container">
      <h1>{{currentShow.name}}</h1>
      <div class="small" v-html="currentShow.summary"></div>
    </div>
    <!--info container -->
    <div
      class="info-container"
      :style="infoContainerStyle"
    >
      <h3>Show Info</h3>
      <div class="rating" v-if="currentShow.rating.average">
        <v-icon color="yellow">mdi-star</v-icon>
        {{currentShow.rating.average}} <span class="total-rating">/ 10</span>
      </div>
      <p class="small">
        <b>Status: </b>{{statusInfo}}
      </p>
      <p class="small">
        <b>Network: </b>{{networkInfo}}
      </p>
      <p
        v-if="currentShow.genres.length"
        class="small">
          <b>Genres: </b> <span class="genre">{{getGenres(currentShow)}}</span>
      </p>
      <p class="small">
          <a
            v-if="currentShow.officialSite"
            :href="currentShow.officialSite"
            target="_blank">Official site</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowInfoCard',
  props: {
    currentShow: Object
  },
  data: () => ({
    tablet: 960,
    mobile: 600
  }),
  computed: {
    mainContainerStyle () {
      if (this.$vuetify.breakpoint.width < this.mobile) return 'main-container mobile'
      return 'main-container'
    },
    infoContainerStyle () {
      if (this.$vuetify.breakpoint.width < this.mobile) return 'width: 60%'
      return ''
    },
    statusInfo () {
      const status = this.currentShow?.status
      return status
    },
    networkInfo () {
      const name = this.currentShow?.network?.name
      const country = this.currentShow?.network?.country?.name
      return `${name}, ${country}`
    }
  },
  methods: {
    getGenres (show) {
      return show.genres.join(', ')
    }
  }

}
</script>

<style scoped>
.main-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
}

.mobile {
  flex-direction: column;
}

.description-container {
  width: 60%;
  margin-right: 10px;
}

.info-container {
  width: 20%;
  display: flex;
  flex-direction: column;
  background-color: #F7F7F7;
  margin: 5px;
  padding: 10px;
}

.small {
  font-size: 12px;
  margin: 0;
}

.total-rating {
  color: rgb(0, 0, 0);
  font-size: 11px;
}
</style>
