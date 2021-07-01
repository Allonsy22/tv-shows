import axios from 'axios'

const getData = (query) => {
  return new Promise((resolve, reject) => {
    axios.get(query)
      .then(data => resolve(data))
      .catch(error => reject(error))
  })
}

class ShowsAPI {
  constructor () {
    this.url = ' http://api.tvmaze.com/'
  }

  findByName (name) {
    const query = `http://api.tvmaze.com/search/shows?q=${name}`
    return getData(query)
  }

  getShowCast (showId) {
    const query = `http://api.tvmaze.com/shows/${showId}/cast`
    return getData(query)
  }

  getShowEpisodes (showId) {
    const query = `http://api.tvmaze.com/shows/${showId}/episodes`
    return getData(query)
  }
}

const showsAPI = new ShowsAPI()

export default showsAPI
