import React, { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useHistory } from 'react-router-dom';

import { ADD_MOVIE, FILMS_PATH } from '../../../Core/Constants';
import { I18N_KEYS } from '../../../Core/I18N';
import { ModalUpdaterContext } from '../../../HOCs/Context/ModalContext.js';

import MovieDetails from '../MovieDetails.js';
import Search from './Search.js';

import './Header.scss';

export default function Header() {
    const { t } = useTranslation();
    const { id } = useParams();
    const history = useHistory();
    const setModalOptions = useContext(ModalUpdaterContext);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const path = history.location.pathname.split('/')[1];
        if (path === FILMS_PATH) {
            setIsOpen(true);
        }
    }, [id]);

    const toggleAddMovieModal = () => {
        setModalOptions({ isOpen: true, modalProps: { type: ADD_MOVIE } });
    };

    const toggleDetails = () => {
        setIsOpen(false);
    };

    const title = t(I18N_KEYS.APP_NAME).split(' ');

    return (
        <>
            <div className="header">
                <div className="header__top">
                    <h1 className="header__top logo">
                        <span className="header__top logo--left">
                            {title[0]}
                        </span>
                        <span className="header__top logo--right">
                            {title[1]}
                        </span>
                    </h1>
                    {isOpen ? (
                        <button
                            className="header__top btn--search"
                            onClick={toggleDetails}
                        />
                    ) : (
                        <button
                            className="header__top btn"
                            onClick={toggleAddMovieModal}
                        >
                            {t(I18N_KEYS.ADD_MOVIE)} +
                        </button>
                    )}
                </div>
                {isOpen ? <MovieDetails id={id} /> : <Search />}
            </div>
        </>
    );
}
