const getSeasons = (episodes) => {
  // return array of the seasons that contains the episodes
  const seasons = []
  let season = []
  let firstSeasonNumber = episodes[0].season
  while (episodes.length) {
    const episode = episodes.shift()
    const currentSeasonNumber = episode.season
    const { season: seasonNumber, number: episodeNumber, airdate: date, name } = episode
    if (currentSeasonNumber > firstSeasonNumber) {
      firstSeasonNumber = currentSeasonNumber
      seasons.push(season)
      season = []
    }
    season.push({
      episodeNumber,
      name,
      seasonNumber,
      date
    })
  }
  seasons.push(season) // push last season
  return seasons
}

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export {
  getSeasons,
  getRandomIntInclusive
}
