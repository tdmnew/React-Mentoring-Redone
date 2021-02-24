import React from 'react';
import { useTranslation } from 'react-i18next';

import { I18N_KEYS } from '../../../Core/I18N';

import '../MessageModal.scss';

export default function DeleteMovie({ close, submit }) {
    const { t } = useTranslation();
    return (
        <div className="message-modal">
            <div className="message-modal container">
                <button className="container__close-btn" onClick={close}>
                    X
                </button>
                <form onSubmit={submit}>
                    <h2>{t(I18N_KEYS.DELETE_MOVIE)}</h2>
                    <p>{t(I18N_KEYS.DELETE_MOVIE_CONFIRM)}</p>
                    <div className="container buttons">
                        <button
                            className="container buttons__confirm"
                            type="submit"
                        >
                            {t(I18N_KEYS.CONFIRM)}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
