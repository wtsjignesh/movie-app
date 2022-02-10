<template>
  <v-container v-if="state.loading">
    <div class="text-center">
      <v-progress-circular :size="70" class="mt-4" color="primary" indeterminate></v-progress-circular>
    </div>
  </v-container>

  <v-container v-else grid-list-xl class="pt-10">
    <v-card color="grey lighten-4" flat class="mb-5" tile>
      <v-toolbar dense>
        

        <v-text-field v-model="state.title"></v-text-field>

        <v-spacer></v-spacer>

        <v-btn icon @click="next(1)">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon @click="showFavorites()">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
    <v-row class="mb-6" xl="2" no-gutters>
      <v-col cols="12" sm="6" md="4" xl="3" v-for="(item, index) in state.movieList" :key="index">
        {{item}}
        <v-card class="ma-1">
          <v-card-title>
            <div>
              <h5 class="">{{item.Title}}</h5>
              <v-btn x-small color="primary" class="mr-2" disabled>{{item.Year}}</v-btn>
            </div>
          </v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-card-actions class="text-center">
            <v-btn @click="addToFav(item)">
              <v-icon v-if="!item.favorite">mdi-heart-box-outline</v-icon>
              <v-icon v-if="item.favorite">mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <div class="text-center">
      <v-pagination
        v-model="state.moviePage"
        :length="state.totalPages"
        :total-visible="7"
        @input="next"
      ></v-pagination>
    </div>
  </v-container>
</template>

<script>
  import { useMovieApi } from '@/composition/movieHook';

  export default {
    name: 'HelloWorld',
    setup () {
      const { state, next, addToFav } = useMovieApi();
      return {state, next, addToFav};
    },
    // data () {
    //   return {
    //     movieList: [],
    //     moviePage: 1,
    //     totalPages: '',
    //     title: '',
    //     loading: true
    //   }
    // },
    
    // methods: {
    //   next (moviePage) {
    //     movieService.fetchMovieCollection(moviePage, this.title)
    //       .then(response => {
    //         this.movieList = response.data
    //         this.moviePage = response.page;
    //         this.totalPages = response.total_pages;
    //         this.loading = false
    //       })
    //       .catch(error => {
    //         console.log(error)
    //       })
    //   },
    //   addToFav (obj) {
    //     // imdbID
    //     console.log(obj);
    //     obj.favorite = true;
    //   }
    // }
  }
</script>
