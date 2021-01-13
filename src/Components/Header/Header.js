import React from "react";
import { useParams, useHistory } from "react-router-dom";
import "./Header.scss";

import { ModalUpdaterContext } from "../../Context/ModalContext.js";
import MovieDetails from "../MovieDetails/MovieDetails.js";
import Search from "./Search.js";

export default function Header() {
    const { id } = useParams();
    const history = useHistory();
    const setModalOptions = React.useContext(ModalUpdaterContext);
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
        let path = history.location.pathname.split('/')[1]
        if(path === 'films') {
            console.log(path)
            setIsOpen(true);
        }
    }, [id])


    const toggleAddMovieModal = () => {
        setModalOptions({ isOpen: true, modalProps: { type: "Add Movie" } });
    };

    const toggleDetails = () => {
        setIsOpen(false);
    }

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
                            onClick={toggleDetails}
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
                {isOpen ? <MovieDetails id={id} /> : <Search />}
            </div>
        </>
    );
}
