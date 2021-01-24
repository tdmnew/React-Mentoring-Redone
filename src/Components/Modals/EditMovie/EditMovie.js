import React from 'react';
import { useTranslation } from 'react-i18next';
import propTypes from 'prop-types';

import Dropdown from '../Dropdown.js';
import { GENRES } from '../../../Core/Constants';
import { I18N_KEYS } from '../../../Core/I18N';

import '../FormModal.scss';

export default function EditMovie({ formik, close }) {
    const { t } = useTranslation();

    const handleSelect = (e) => {
        let newGenres;
        const { value } = e.target;
        const { genres } = formik.values;

        // Check if value is not present
        if (genres.includes(value)) {
            newGenres = genres.filter((item) => item !== value);
        } else {
            newGenres = [...genres, value];
        }

        formik.setFieldValue('genres', newGenres);
    };

    return (
        <div className="form-modal">
            <div className="form-modal container">
                <button
                    className="container__close-btn"
                    title="close"
                    onClick={close}
                >
                    X
                </button>
                <form onSubmit={formik.handleSubmit}>
                    <h2>{t(I18N_KEYS.EDIT_MOVIE)}</h2>
                    <label aria-labelledby="movieid">
                        <span>{t(I18N_KEYS.MOVIE_ID)}</span>
                        <input
                            name="movieid"
                            className="container__movieid"
                            value={formik.values.id}
                            placeholder="Movie ID"
                            disabled
                        />
                    </label>
                    <label aria-labelledby="title">
                        <span>{t(I18N_KEYS.TITLE)}</span>
                        <input
                            name="title"
                            className="container__input"
                            placeholder={t(I18N_KEYS.MOVIE_TITLE)}
                            value={formik.values.title}
                            onChange={formik.handleChange}
                        />
                    </label>
                    {formik.errors.title ? (
                        <span className="container error">
                            {formik.errors.title}
                        </span>
                    ) : null}
                    <label aria-labelledby="release_date">
                        <span>{t(I18N_KEYS.RELEASE_DATE)}</span>
                        <input
                            name="release_date"
                            className="container__date"
                            placeholder={t(I18N_KEYS.MOVIE_RELEASE_DATE)}
                            type="date"
                            value={formik.values.release_date}
                            onChange={formik.handleChange}
                        />
                    </label>
                    {formik.errors.release_date ? (
                        <span className="container error">
                            {formik.errors.release_date}
                        </span>
                    ) : null}
                    <label aria-labelledby="url">
                        <span>{t(I18N_KEYS.MOVIE_URL)}</span>
                        <input
                            name="url"
                            className="container__input"
                            placeholder={t(I18N_KEYS.MOVIE_WEBSITE)}
                            value={formik.values.url}
                            onChange={formik.handleChange}
                        />
                    </label>
                    {formik.errors.url ? (
                        <span className="container error">
                            {formik.errors.url}
                        </span>
                    ) : null}
                    <label aria-labelledby="genre">
                        <span>{t(I18N_KEYS.GENRE)}</span>
                        <Dropdown
                            options={GENRES}
                            checked={formik.values.genres}
                            handleSelect={handleSelect}
                        />
                    </label>
                    {formik.errors.genres ? (
                        <span className="container error">
                            {formik.errors.genres}
                        </span>
                    ) : null}
                    <label aria-labelledby="overview">
                        <span>{t(I18N_KEYS.OVERVIEW)}</span>
                        <input
                            name="overview"
                            className="container__input"
                            placeholder={t(I18N_KEYS.MOVIE_OVERVIEW)}
                            value={formik.values.overview}
                            onChange={formik.handleChange}
                        />
                    </label>
                    {formik.errors.overview ? (
                        <span className="container error">
                            {formik.errors.overview}
                        </span>
                    ) : null}
                    <label aria-labelledby="runtime">
                        <span>{t(I18N_KEYS.RUNTIME)}</span>
                        <input
                            name="runtime"
                            type="number"
                            className="container__input"
                            value={formik.values.runtime}
                            min="0"
                            placeholder={t(I18N_KEYS.MOVIE_RUNTIME)}
                            onChange={formik.handleChange}
                        />
                    </label>
                    {formik.errors.runtime ? (
                        <span className="container error">
                            {formik.errors.runtime}
                        </span>
                    ) : null}
                    <div className="container buttons">
                        <button
                            className="container buttons__reset"
                            title="reset"
                            onClick={formik.handleReset}
                        >
                            {t(I18N_KEYS.RESET)}
                        </button>
                        <button
                            className="container buttons__submit"
                            title="submit"
                            type="submit"
                        >
                            {t(I18N_KEYS.SUBMIT)}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
