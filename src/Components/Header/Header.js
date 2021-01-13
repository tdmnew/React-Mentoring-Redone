import React from "react";
import { ModalUpdaterContext } from "../../Context/ModalContext.js";
import {
    DetailsUpdaterContext,
    DetailsStateContext,
} from "../../Context/DetailsContext.js";

import MovieDetails from "../MovieDetails/MovieDetails.js";

import "./Header.scss";

export default function Header() {
    const setModalOptions = React.useContext(ModalUpdaterContext);

    const { isOpen } = React.useContext(DetailsStateContext);
    const setDetailsOptions = React.useContext(DetailsUpdaterContext);

    const toggleAddMovieModal = () => {
        setModalOptions({ isOpen: true, modalProps: { type: "Add Movie" } });
    }

    const closeMovieDetails = () => {
        setDetailsOptions({
            isOpen: false,
        });
    }

    const Search = () => {
        return (
            <div className="search">
                <h2 className="search title">FIND YOUR MOVIE</h2>
                <div className="search search-bar">
                    <input
                        className="search search-bar__input"
                        placeholder="What do you want to watch?"
                    />
                    <button className="search search-bar__btn">SEARCH</button>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="header">
                <div className="header__top">
                    <h1 className="header__top logo">
                        <span className="header__top logo--left">netflix</span>
                        <span className="header__top logo--right">
                            roulette
                        </span>
                    </h1>
                    {isOpen ? (
                        <button
                            className="header__top btn--search"
                            onClick={closeMovieDetails}
                        >
                        </button>
                    ) : (
                        <button
                            className="header__top btn"
                            onClick={toggleAddMovieModal}
                        >
                            + ADD MOVIE
                        </button>
                    )}
                </div>
                {isOpen ? <MovieDetails /> : <Search />}
            </div>
        </>
    );
}
