<template>
  <v-container v-if="loading">
    <div class="text-center">
      <v-progress-circular
        :size="70"
        class="mt-4"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
  </v-container>

  <v-container v-else grid-list-xl class="pt-10">
    <v-card color="grey lighten-4" flat class="mb-5" tile>
      <v-toolbar dense>
        <v-text-field v-model="title"></v-text-field>

        <v-spacer></v-spacer>

        <v-btn id="searchButton" icon @click="getMovies(1)">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon @click="showFavorites()">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
    <v-row class="mb-6" xl="2" no-gutters>
      <v-col
        cols="12"
        sm="6"
        md="4"
        xl="3"
        v-for="(item, index) in movieList"
        :key="index"
      >
        <v-card class="ma-1">
          <v-card-title>
            <div>
              <h5 class="">{{ item.Title }}</h5>
              <v-btn x-small color="primary" class="mr-2" disabled>{{
                item.Year
              }}</v-btn>
            </div>
          </v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-card-actions class="text-center">
            <v-btn @click="addToFav(item)">
              <v-icon v-if="!item.favorite">mdi-heart-box-outline</v-icon>
              <v-icon v-if="item.favorite" color="blue darken-2">mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <div class="text-center" v-if="!farorite">
      <v-pagination
        v-model="moviePage"
        :length="totalPages"
        :total-visible="7"
        @input="getMovies"
      ></v-pagination>
    </div>
  </v-container>
</template>
<script>
import { reactive, toRefs } from "@vue/composition-api";
import movieService from "@/services/MovieService";

export default {
  name: "ReactiveMethod",
  setup() {
    const state = reactive({
      movieList: [],
      moviePage: 1,
      totalPages: 0,
      title: "",
      loading: false,
      farorite: false
    });
    function getMovies(moviePage) {
      state.movieList = [];
      movieService
        .fetchMovieCollection(moviePage, state.title)
        .then((response) => {
          Object.values(response.data).forEach((movie) => {
            movie.favorite = false;
            state.movieList.push(movie);
          });
          
          state.moviePage = response.page;
          state.totalPages = response.total_pages;
          state.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    }
    function addToFav(movie) {
      movie.favorite = movie.favorite ? false : true;
    }
    function showFavorites() {
      state.farorite = true;
      state.movieList = state.movieList.filter( movie => {
        return movie.favorite == true;
      });
    }
    getMovies(state.moviePage);
    return {
      ...toRefs(state),
      addToFav,
      getMovies,
      showFavorites
    };
  },
};
</script>