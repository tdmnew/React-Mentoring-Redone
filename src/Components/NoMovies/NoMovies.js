import React from 'react';
import { useTranslation } from 'react-i18next';

import { I18N_KEYS } from '../../Core/I18N';

import './NoMovies.scss';

export default function NoMovies() {
    const { t } = useTranslation();
    return (
        <div className="no-movies">
            <span className="no-movies__text">
                {t(I18N_KEYS.NO_MOVIE_FOUND)}
            </span>
        </div>
    );
}
