import React from "react";
import propTypes from "prop-types";

import { ModalUpdaterContext } from "../../Context/ModalContext.js";
import { DetailsUpdaterContext } from "../../Context/DetailsContext.js";

import "./MovieCard.scss";

export default function MovieCard({ id, title, genre, releasedate, url, overview, runtime, image }) {
    const [menuToggled, setMenuToggled] = React.useState(false);

    const setModalOptions = React.useContext(ModalUpdaterContext);
    const setDetailsOptions = React.useContext(DetailsUpdaterContext);

    const toggleMovieDetails = (e) => {
        e.stopPropagation();
        setDetailsOptions({
            isOpen: true,
            detailsProps: { id, title, genre, releasedate, url, overview, runtime, image }
        });
    }

    const toggleEditModal = (e) => {
        e.stopPropagation();
        setModalOptions({
            isOpen: true,
            modalProps: { type: "Edit Movie", info: { id, title, genre, releasedate, url, overview, runtime } }
        });
    }

    const toggleDeleteModal = (e) => {
        e.stopPropagation();
        setModalOptions({
            isOpen: true,
            modalProps: { type: "Delete Movie", info: { id } }
        });
    }

    const toggleCardMenu = (e) => {
        e.stopPropagation();
        setMenuToggled(!menuToggled);
    }

    return (
        <div className="moviecard">
            <div className="moviecard poster" onClick={toggleMovieDetails}>
                <img
                    className="moviecard poster__img"
                    src={image}
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
                        {releasedate.substring(0, 4)}
                    </span>
                </div>
                <div className="moviecard details__bottom">
                    <span className="moviecard details__bottom--genre">
                        {genre}
                    </span>
                </div>
            </div>
        </div>
    );
}

MovieCard.propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    genre: propTypes.string.isRequired,
    releasedate: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
    overview: propTypes.string.isRequired,
    runtime: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
};

MovieCard.defaultProps = {
    id: 1,
    title: "Blade Runner",
    genre: "Sci-Fi",
    releasedate: "1982-01-01",
    url: "",
    overview: "",
    runtime: "120",
    image: "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/BR-titled.jpg",
};
