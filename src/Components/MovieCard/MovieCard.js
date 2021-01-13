import React from "react";
import propTypes from "prop-types";

import { ModalUpdaterContext } from "../../Context/ModalContext.js";
import { DetailsUpdaterContext } from "../../Context/DetailsContext.js";

import "./MovieCard.scss";

export default function MovieCard({
    id,
    title,
    tagline,
    vote_average,
    vote_count,
    genres,
    release_date,
    url,
    overview,
    budget,
    revenue,
    runtime,
    poster_path,
}) {
    const [menuToggled, setMenuToggled] = React.useState(false);

    const setModalOptions = React.useContext(ModalUpdaterContext);
    const setDetailsOptions = React.useContext(DetailsUpdaterContext);

    const toggleMovieDetails = (e) => {
        e.stopPropagation();
        setDetailsOptions({
            isOpen: true,
            detailsProps: {
                id,
                title,
                tagline,
                vote_average,
                vote_count,
                genres,
                release_date,
                url,
                overview,
                budget,
                revenue,
                runtime,
                poster_path,
            },
        });
    };

    const toggleEditModal = (e) => {
        e.stopPropagation();
        setModalOptions({
            isOpen: true,
            modalProps: {
                type: "Edit Movie",
                info: {
                    id,
                    title,
                    tagline,
                    vote_average,
                    vote_count,
                    genres,
                    release_date,
                    url,
                    overview,
                    budget,
                    revenue,
                    runtime,
                    poster_path,
                },
            },
        });
    };

    const toggleDeleteModal = (e) => {
        e.stopPropagation();
        setModalOptions({
            isOpen: true,
            modalProps: { type: "Delete Movie", info: { id } },
        });
    };

    const toggleCardMenu = (e) => {
        e.stopPropagation();
        setMenuToggled(!menuToggled);
    };

    const fallbackImage = (e) => {
        e.target.src =
            "https://linnea.com.ar/wp-content/uploads/2018/09/404PosterNotFound.jpg";
    };

    return (
        <div className="moviecard">
            <div className="moviecard poster" onClick={toggleMovieDetails}>
                <img
                    className="moviecard poster__img"
                    src={poster_path}
                    onError={fallbackImage}
                    alt={`${title} poster`}
                />
                <button
                    className="moviecard poster__btn"
                    onClick={toggleCardMenu}
                    style={{ display: menuToggled ? "none" : "inherit" }}
                >
                    &#8942;
                </button>
                <div
                    className="moviecard poster menu"
                    style={{ display: menuToggled ? "inherit" : "none" }}
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
                        value="edit"
                        onClick={toggleEditModal}
                    >
                        Edit
                    </button>
                    <button
                        className="moviecard poster menu__delete"
                        value="delete"
                        onClick={toggleDeleteModal}
                    >
                        Delete
                    </button>
                </div>
            </div>
            <div className="moviecard details">
                <div className="moviecard details__top">
                    <h3 className="moviecard details__top--title">{title}</h3>
                    <span className="moviecard details__top--year">
                        {release_date.substring(0, 4)}
                    </span>
                </div>
                <div className="moviecard details__bottom">
                    <span className="moviecard details__bottom--genre">
                        {genres.length > 1 ? genres.join(", ") : genres}
                    </span>
                </div>
            </div>
        </div>
    );
}

MovieCard.propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    tagline: propTypes.string.isRequired,
    vote_average: propTypes.number.isRequired,
    vote_count: propTypes.number.isRequired,
    genres: propTypes.array.isRequired,
    release_date: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
    overview: propTypes.string.isRequired,
    budget: propTypes.number.isRequired,
    revenue: propTypes.number.isRequired,
    runtime: propTypes.number.isRequired,
    poster_path: propTypes.string.isRequired,
};

MovieCard.defaultProps = {
    id: 1,
    title: "Blade Runner",
    tagline: "",
    vote_average: 4.3,
    vote_count: 100,
    genres: ["Sci-Fi"],
    release_date: "1982-01-01",
    url: "",
    overview: "",
    budget: 100000,
    revenue: 200000,
    runtime: 120,
    poster_path: "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/BR-titled.jpg",
};
