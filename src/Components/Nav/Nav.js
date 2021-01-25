import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { I18N_KEYS } from "../../Core/I18N";
import { sagaActions } from "../../Store/Sagas/sagaActions";
import { sortMovies } from "../../Store/Slices/movies.js";

import "./Nav.scss";

export default function Nav() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies);

    const genres = movies
        .map((movie) => movie.genres)
        .flat()
        .filter((v, i, s) => s.indexOf(v) === i)
        .slice(0, 6);

    const sort = (e) => {
        dispatch(sortMovies(e.target.value));
    };

    const filter = (e) => {
        const genre = e.target.getAttribute("href").slice(1);
        if (genre === "All") {
            dispatch({ type: sagaActions.FETCH_MOVIES });
        } else {
            dispatch({ type: sagaActions.FILTER_MOVIES, payload: genre });
        }
    };

    const returnGenres = useCallback((genres) => genres.map(returnGenre), [
        genres,
    ]);

    const returnGenre = (genre) => {
        return (
            <li key={genre}>
                <a href={`#${genre}`} onClick={filter}>
                    {genre}
                </a>
            </li>
        );
    };

    return (
        <div className="nav">
            <ul className="nav__links">
                <li>
                    <a href="#All" onClick={filter}>
                        {t(I18N_KEYS.ALL)}
                    </a>
                </li>
                {returnGenres(genres)}
            </ul>
            <div className="dropdown">
                <span className="dropdown__heading">
                    {t(I18N_KEYS.SORT_BY)}
                </span>
                <select className="dropdown__options" onChange={sort}>
                    <option value="release_date">
                        {t(I18N_KEYS.RELEASE_DATE)}
                    </option>
                    <option value="title">{t(I18N_KEYS.TITLE)}</option>
                    <option value="genres">{t(I18N_KEYS.GENRE)}</option>
                    <option value="vote_average">{t(I18N_KEYS.RATING)}</option>
                </select>
            </div>
        </div>
    );
}
