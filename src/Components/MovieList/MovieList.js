import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./MovieList.scss";

import MovieCard from "../MovieCard/MovieCard.js";
import { sagaActions } from "../../Store/Sagas/sagaActions.js";

export default function MovieList() {
    const history = useHistory();
    const { id } = useParams();
    const dispatch = useDispatch();

    const movies = useSelector((state) => state.movies);

    React.useEffect(() => {
        let path = history.location.pathname.split('/')[1]
        if(path !== 'films') {
            dispatch({ type: sagaActions.SEARCH_MOVIES, payload: id });
        }
    }, [id])

    return (
        <>
            <div className="total">
                <span className="total__number">{movies.length}</span>
                <span className="total__text"> movies found</span>
            </div>
            <div className="movielist">
                {movies.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie} />;
                })}
            </div>
        </>
    );
}
