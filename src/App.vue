<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        Movie App

        
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <MovieList/>
    </v-main>
  </v-app>
</template>

<script>
import MovieList from './components/MovieList';

export default {
  name: 'App',

  components: {
    MovieList,
  },

  data: () => ({
    //
  }),
};
</script>
