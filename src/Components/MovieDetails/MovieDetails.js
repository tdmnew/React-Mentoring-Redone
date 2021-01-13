import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./MovieDetails.scss";
import { sagaActions } from "../../Store/Sagas/sagaActions.js";

export default function MovieDetails({ id }) {
    const dispatch = useDispatch();
    const fetchedMovie = useSelector((state) => state.selectedMovie);

    const [movie, setMovie] = React.useState({ ...fetchedMovie });

    React.useEffect(() => {
        dispatch({ type: sagaActions.GET_MOVIE, payload: id });
    }, [id]);

    React.useEffect(() => {
        setMovie({ ...fetchedMovie });
    }, [fetchedMovie]);

    const fallbackImage = (e) => {
        e.target.src =
            "https://linnea.com.ar/wp-content/uploads/2018/09/404PosterNotFound.jpg";
    };

    return (
        <>
            <div className="moviedetails">
                <img
                    className="moviedetails__poster"
                    onError={fallbackImage}
                    src={movie.poster_path}
                />
                <div className="moviedetails text">
                    <div className="text top">
                        <h2 className="text top__title">{movie.title}</h2>
                        <span className="text top__rating">
                            {movie.vote_average}
                        </span>
                    </div>
                    <span className="text genre">{movie.tagline}</span>
                    <div className="text center">
                        <span className="text center__year">
                            {movie.release_date !== undefined
                                ? movie.release_date.substring(0, 4)
                                : null}
                        </span>
                        <span className="text center__runtime">
                            {movie.runtime} min
                        </span>
                        <br />
                    </div>
                    <div className="text bottom">
                        <p className="text bottom__overview">
                            {movie.overview}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
