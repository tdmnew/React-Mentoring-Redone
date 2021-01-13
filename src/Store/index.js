import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./Sagas";
import movies from "./Slices/movies.js";

let sagaMiddleware = createSagaMiddleware();
let middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
    reducer: movies.reducer,
    middleware
});

sagaMiddleware.run(rootSaga);

export default store;
