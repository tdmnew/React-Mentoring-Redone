import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  selectedMovie: {},
  movies: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
    editMovie: (state, action) => {
      const updatedMovie = action.payload;
      // Update movie details if the film is edited
      if (state.selectedMovie.id === updatedMovie.id) {
        state.selectedMovie = action.payload;
      }
      // Add the updated movie to the array
      state.movies = state.movies.map((movie) => {
        if (movie.id === updatedMovie.id) {
          return { ...movie, ...updatedMovie };
        }
        return movie;
      });
    },
    deleteMovie: (state, action) => {
      const id = action.payload;
      state.movies = state.movies.filter((movie) => movie.id !== id);
    },
    getMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    fetchMovies: (state, action) => {
      state.movies = action.payload;
    },
    searchMovies: (state, action) => {
      state.movies = action.payload;
    },
    filterMovies: (state, action) => {
      state.movies = action.payload;
    },
    sortMovies: (state, action) => {
      const field = action.payload;
      const oldMovies = state.movies;
      state.movies = oldMovies.sort((a, b) => (a[field] > b[field] ? 1 : -1));
    },
  },
});

export const {
  fetchMovies,
  searchMovies,
  sortMovies,
  filterMovies,
  addMovie,
  getMovie,
  editMovie,
  deleteMovie,
} = moviesSlice.actions;

export default moviesSlice;
