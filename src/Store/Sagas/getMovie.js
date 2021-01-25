import { call, takeEvery, put } from 'redux-saga/effects';

import getMovieAPI from '../../Core/API/getMovieAPI';
import { getMovie } from '../Slices/movies.js';
import { actions } from '../actionTypes.js';

export function* getMovieSaga({ payload }) {
    try {
        const movie = yield call(getMovieAPI, { payload });
        yield put(getMovie(movie));
    } catch (e) {
        yield put({ type: actions.GET_MOVIE_FAILED });
    }
}

export function* watchGetMovie() {
    yield takeEvery(actions.GET_MOVIE, getMovieSaga);
}
