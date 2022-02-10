import { reactive } from '@vue/composition-api';
import movieService from '@/services/MovieService'

export const useMovieApi = () => {
    const state = reactive({
        movieList: [],
        moviePage: 1,
        totalPages: '',
        title: '',
        loading: false
    });

    const next = async (moviePage) => {
        movieService.fetchMovieCollection(moviePage, state.title)
          .then(response => {
            state.movieList = response.data
            state.moviePage = response.page;
            state.totalPages = response.total_pages;
            state.loading = false
          })
          .catch(error => {
            console.log(error)
          })
    };

    const addToFav = async (item) => {
        console.log(item);
        item.favorite = true;
    };
  
    return {next, addToFav, state};
  };