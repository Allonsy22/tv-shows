import showsAPI from '@/utils/showsAPI'
import { getSeasons } from '@/utils/utils'

const state = {
  shows: [],
  currentShow: null,
  showCast: null,
  showSeasons: null,
  snackbar: false
}

const mutations = {
  SET_SHOWS_DATA (state, payload) {
    state.shows = payload
  },
  SET_CURRENT_SHOW (state, payload) {
    state.currentShow = payload
  },
  SET_SHOW_CAST (state, payload) {
    state.showCast = payload
  },
  SET_SHOW_SEASONS (state, payload) {
    state.showSeasons = payload
  },
  SET_SNACKBAR_STATUS (state, payload) {
    state.snackbar = payload
  }
}

const actions = {
  findShowByName ({ dispatch, commit }, name) {
    showsAPI.findByName(name)
      .then(result => {
        const shows = result.data
          .filter(item => {
            return item?.show?.image // return if a image exist
          })
          .map(item => item.show)
        if (shows.length) {
          commit('SET_SHOWS_DATA', shows)
          commit('SET_CURRENT_SHOW', shows[0])
          dispatch('closeSnackbar')
        } else {
          dispatch('openSnackbar')
        }
      })
      .catch(error => console.log(error))
  },
  setCurrentShow ({ commit, state }, id) {
    commit('SET_CURRENT_SHOW', state.shows[id])
  },
  getShowCast ({ commit }, showId) {
    showsAPI.getShowCast(showId)
      .then(result => {
        const showCast = result.data
          .filter(item => {
            return item?.character?.image
          })
        commit('SET_SHOW_CAST', showCast)
      })
      .catch(error => console.log(error))
  },
  getShowSeasons ({ commit }, showId) {
    showsAPI.getShowEpisodes(showId)
      .then(result => {
        const seasons = getSeasons(result.data)
        commit('SET_SHOW_SEASONS', seasons)
      })
      .catch(error => console.log(error))
  },
  openSnackbar ({ commit }) {
    commit('SET_SNACKBAR_STATUS', true)
  },
  closeSnackbar ({ commit }) {
    commit('SET_SNACKBAR_STATUS', false)
  }
}

const getters = {
  shows: state => state.shows,
  currentShow: state => state.currentShow,
  showCast: state => state.showCast,
  showSeasons: state => state.showSeasons,
  snackbar: state => state.snackbar
}

const showModule = {
  state,
  mutations,
  actions,
  getters
}

export default showModule
