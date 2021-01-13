import React from "react";
import propTypes from "prop-types";

import { ModalUpdaterContext } from "../../Context/ModalContext.js";

import "./MovieCard.scss";

export default function MovieCard({ id, title, genre, releasedate, url, overview, runtime, image }) {
    const [menuToggled, setMenuToggled] = React.useState(false);
    const setModalOptions = React.useContext(ModalUpdaterContext);

    function toggleModal(e) {
        e.preventDefault();
        toggleMenu(e);

        let type = e.target.value;
        switch (type) {
            case "edit":
                setModalOptions({
                    isOpen: true,
                    modalProps: { type: "Edit Movie", info: { id, title, genre, releasedate, url, overview, runtime } }
                });
                break;
            case "delete":
                setModalOptions({
                    isOpen: true,
                    modalProps: { type: "Delete Movie", info: { id } }
                });
                break;
            default:
                throw new Error("No case match");
        }
    }

    function toggleMenu(e) {
        setMenuToggled(!menuToggled);
    }

    return (
        <div className="moviecard">
            <div className="moviecard poster">
                <img
                    className="moviecard poster__img"
                    src={image}
                    alt={`${title} poster`}
                />
                <button
                    className="moviecard poster__btn"
                    onClick={toggleMenu}
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
                        onClick={toggleMenu}
                    >
                        X
                    </button>
                    <button
                        className="moviecard poster menu__edit"
                        value="edit"
                        onClick={toggleModal}
                    >
                        Edit
                    </button>
                    <button
                        className="moviecard poster menu__delete"
                        value="delete"
                        onClick={toggleModal}
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
    runtime: "",
    image: "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/BR-titled.jpg",
};
