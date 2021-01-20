import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IMG_FALLBACK } from '../../Core/Constants';
import { actions } from '../../Store/actionTypes.js';
import './MovieDetails.scss';

export default function MovieDetails({ id }) {
  const dispatch = useDispatch();
  const fetchedMovie = useSelector((state) => state.selectedMovie);

  const [movie, setMovie] = useState({ ...fetchedMovie });

  React.useEffect(() => {
    dispatch({ type: actions.GET_MOVIE, payload: id });
  }, [id]);

  React.useEffect(() => {
    setMovie({ ...fetchedMovie });
  }, [fetchedMovie]);

  const fallbackImage = (e) => {
    e.target.src = IMG_FALLBACK;
  };

  const year =
    movie.release_date !== undefined
      ? movie.release_date.substring(0, 4)
      : null;

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
            <span className="text top__rating">{movie.vote_average}</span>
          </div>
          <span className="text genre">{movie.tagline}</span>
          <div className="text center">
            <span className="text center__year">{year}</span>
            <span className="text center__runtime">{movie.runtime} min</span>
            <br />
          </div>
          <div className="text bottom">
            <p className="text bottom__overview">{movie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}
