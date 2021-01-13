import { all } from "redux-saga/effects";

import { watchMovies } from "./fetchMovies.js";
import { watchMoviesFilter } from "./filterMovies.js";
import { watchAddMovie } from "./addMovie.js";
import { watchEditMovie } from "./editMovie.js";
import { watchDeleteMovie } from "./deleteMovie.js";

export default function* rootSaga() {
    yield all([
        watchMovies(),
        watchMoviesFilter(),
        watchAddMovie(),
        watchEditMovie(),
        watchDeleteMovie()
    ]);
}
