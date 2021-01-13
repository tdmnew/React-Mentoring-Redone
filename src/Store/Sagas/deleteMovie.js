import axios from "axios";
import { call, takeEvery, put } from "redux-saga/effects";

import { deleteMovie } from "../Slices/movies.js";
import { sagaActions } from "../Sagas/sagaActions";

let API = async (payload) => {
    let movieId = payload.payload
    return axios({
        method: "delete",
        url: `http://localhost:4000/movies/${movieId}`,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    })
    .then((res) => {
        return res.data;
    })
};

function* deleteMovieSaga({ payload }) {
    try {
        let movie = yield call(API, { payload });
        yield put(deleteMovie(payload));
    } catch (e) {
        yield put({ type: "FETCH_FAILED" });
    }
}

export function* watchDeleteMovie() {
    yield takeEvery(sagaActions.DELETE_MOVIE, deleteMovieSaga);
}
