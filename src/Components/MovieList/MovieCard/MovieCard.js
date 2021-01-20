import React, { useState, useContext } from 'react';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { IMG_FALLBACK } from '../../../Core/Constants';
import { I18N_KEYS } from '../../../Core/I18N';
import { ModalUpdaterContext } from '../../../HOCs/Context/ModalContext.js';

import './MovieCard.scss';

export default function MovieCard({ movie }) {
  const { t } = useTranslation();
  const [menuToggled, setMenuToggled] = useState(false);
  const setModalOptions = useContext(ModalUpdaterContext);

  const toggleEditModal = (e) => {
    e.preventDefault();
    setModalOptions({
      isOpen: true,
      modalProps: {
        type: 'Edit Movie',
        info: { ...movie },
      },
    });
    setMenuToggled(!menuToggled);
  };

  const toggleDeleteModal = (e) => {
    const { id } = movie;
    e.preventDefault();
    setModalOptions({
      isOpen: true,
      modalProps: { type: 'Delete Movie', info: { id } },
    });
    setMenuToggled(!menuToggled);
  };

  const toggleCardMenu = (e) => {
    e.preventDefault();
    setMenuToggled(!menuToggled);
  };

  const fallbackImage = (e) => {
    e.target.src = IMG_FALLBACK;
  };

  const year =
    movie.release_date !== undefined
      ? movie.release_date.substring(0, 4)
      : null;

  const genres =
    movie.genres.length > 1 ? movie.genres.join(', ') : movie.genres;

  return (
    <>
      <NavLink className="link" to={`/films/${movie.id}`}>
        <div className="moviecard">
          <div className="moviecard poster">
            <img
              className="moviecard poster__img"
              src={movie.poster_path}
              onError={fallbackImage}
              alt={`${movie.title} poster`}
            />
            <button
              title="menu"
              className="moviecard poster__btn"
              onClick={toggleCardMenu}
              style={{
                display: menuToggled ? 'none' : 'inherit',
              }}
            >
              &#8942;
            </button>
            <div
              className="moviecard poster menu"
              style={{
                display: menuToggled ? 'inherit' : 'none',
              }}
            >
              <button
                className="moviecard poster menu__close"
                value="close"
                onClick={toggleCardMenu}
              >
                X
              </button>
              <button
                className="moviecard poster menu__edit"
                title="edit"
                value="edit"
                onClick={toggleEditModal}
              >
                {t(I18N_KEYS.EDIT)}
              </button>
              <button
                className="moviecard poster menu__delete"
                title="delete"
                value="delete"
                onClick={toggleDeleteModal}
              >
                {t(I18N_KEYS.DELETE)}
              </button>
            </div>
          </div>
          <div className="moviecard details">
            <div className="moviecard details__top">
              <h3 className="moviecard details__top--title">{movie.title}</h3>
              <span className="moviecard details__top--year">{year}</span>
            </div>
            <div className="moviecard details__bottom">
              <span className="moviecard details__bottom--genre">{genres}</span>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
}

MovieCard.propTypes = {
  movie: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    tagline: propTypes.string.isRequired,
    vote_average: propTypes.number.isRequired,
    vote_count: propTypes.number.isRequired,
    genres: propTypes.array.isRequired,
    release_date: propTypes.string.isRequired,
    overview: propTypes.string.isRequired,
    budget: propTypes.number.isRequired,
    revenue: propTypes.number.isRequired,
    runtime: propTypes.number,
    poster_path: propTypes.string.isRequired,
  }),
};

MovieCard.defaultProps = {
  movie: propTypes.shape({
    id: 1,
    title: 'Blade Runner',
    tagline: '',
    vote_average: 4.3,
    vote_count: 100,
    genres: ['Sci-Fi'],
    release_date: '1982-01-01',
    overview: '',
    budget: 100000,
    revenue: 200000,
    runtime: 120,
    poster_path:
      'https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/BR-titled.jpg',
  }),
};
