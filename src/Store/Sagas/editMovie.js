import { call, takeEvery, put } from 'redux-saga/effects';

import editMovieAPI from '../../Core/API/editMovieAPI';
import { editMovie } from '../Slices/movies.js';
import { actions } from '../actionTypes.js';

export function* editMovieSaga({ payload }) {
  try {
    delete payload.url;
    const movie = yield call(editMovieAPI, { payload });
    yield put(editMovie(movie));
  } catch (e) {
    yield put({ type: actions.EDIT_MOVIE_FAILED });
  }
}

export function* watchEditMovie() {
  yield takeEvery(actions.EDIT_MOVIE, editMovieSaga);
}
