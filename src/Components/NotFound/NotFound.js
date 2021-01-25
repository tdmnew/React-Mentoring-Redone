import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { I18N_KEYS } from '../../Core/I18N';

import './NotFound.scss';

export default function NotFound() {
    const { t } = useTranslation();
    const title = t(I18N_KEYS.APP_NAME).split(' ');

    return (
        <div className="not-found">
            <div className="not-found heading">
                <p className="heading logo">
                    <span className="heading logo--left">{title[0]}</span>
                    <span className="heading logo--right">{title[1]}</span>
                </p>
            </div>
            <div className="not-found body">
                <h3 className="not-found body__text--top">
                    {t(I18N_KEYS.PAGE_NOT_FOUND)}
                </h3>
                <h4 className="not-found body__text--bottom">
                    {t(I18N_KEYS.FOUR_OH_FOUR)}
                </h4>
                <NavLink className="not-found body__btn" to="/">
                    {t(I18N_KEYS.GO_HOME)}
                </NavLink>
            </div>
        </div>
    );
}
