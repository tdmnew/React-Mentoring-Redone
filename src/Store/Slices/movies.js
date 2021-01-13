import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
};

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovie: (state, action) => {
            state.movies.push(action.payload);
        },
        editMovie: (state, action) => {
            let updatedMovie = action.payload;
            state.movies = state.movies.map((movie) => {
                if (movie.id === updatedMovie.id) {
                    return { ...movie, ...updatedMovie };
                }
                return movie;
            });
        },
        deleteMovie: (state, action) => {
            let id = action.payload;
            state.movies = state.movies.filter((movie) => {
                return movie.id !== id;
            });
        },
        fetchMovies: (state, action) => {
            state.movies = action.payload;
        },
        filterMovies: (state, action) => {
            state.movies = action.payload;
        },
        sortMovies: (state, action) => {
            let field = action.payload;
            let oldMovies = state.movies;
            state.movies = oldMovies.sort((a, b) =>
                a[field] > b[field] ? 1 : -1
            );
        },
    },
});

export const {
    fetchMovies,
    sortMovies,
    filterMovies,
    addMovie,
    editMovie,
    deleteMovie,
} = moviesSlice.actions;

export default moviesSlice;
