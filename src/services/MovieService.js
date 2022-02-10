import axios from 'axios'

export default {

  fetchMovieCollection (page, title) {
    let uri = title ? 'movies/search/?Title='+title+'&page='+page : '/movies?page='+page;
      
    return axios.get(uri)
      .then(response => {
        return response.data
      })
  },
}