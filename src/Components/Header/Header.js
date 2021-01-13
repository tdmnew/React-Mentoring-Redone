import React from "react";
import { ModalUpdaterContext } from "../../Context/ModalContext.js";

import "./Header.scss";

export default function Header() {
    const setModalOptions = React.useContext(ModalUpdaterContext);

    function toggleModal(e) {
        e.preventDefault();
        setModalOptions({ isOpen: true, modalProps: { type: 'Add Movie' } })
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
                    <button
                        className="header__top btn"
                        onClick={toggleModal}
                    >
                        + ADD MOVIE
                    </button>
                </div>
                <div className="header__bottom">
                    <h2 className="header__bottom title">FIND YOUR MOVIE</h2>
                    <div className="header__bottom search">
                        <input
                            className="header__bottom search__input"
                            placeholder="What do you want to watch?"
                        />
                        <button className="header__bottom search__btn">
                            SEARCH
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
