import React from "react";
import { Multiselect } from "multiselect-react-dropdown";
import propTypes from "prop-types";

import "../FormModal.scss";

export default function EditMovie({ formik, close, genres }) {
    const handleSelect = (value) => {
        formik.setFieldValue("genres", value);
    };

    return (
        <div className="form-modal">
            <div className="form-modal container">
                <button className="container__close-btn" onClick={close}>
                    X
                </button>
                <form onSubmit={formik.handleSubmit}>
                    <h2>EDIT MOVIE</h2>
                    <label htmlFor="movieid">
                        <span>MOVIE ID</span>
                        <input
                            name="movieid"
                            className="container__movieid"
                            value={formik.values.id}
                            placeholder="Movie ID"
                            disabled
                        />
                    </label>
                    <label htmlFor="title">
                        <span>TITLE</span>
                        <input
                            name="title"
                            className="container__input"
                            placeholder="Movie Title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                        />
                    </label>
                    { formik.errors.title ? <span className="container error">{formik.errors.title}</span> : null }
                    <label htmlFor="release_date">
                        <span>RELEASE DATE</span>
                        <input
                            name="release_date"
                            className="container__date"
                            placeholder="Movie Release Date"
                            type="date"
                            value={formik.values.release_date}
                            onChange={formik.handleChange}
                        />
                    </label>
                    { formik.errors.release_date ? <span className="container error">{formik.errors.release_date}</span> : null }
                    <label htmlFor="url">
                        <span>MOVIE URL</span>
                        <input
                            name="url"
                            className="container__input"
                            placeholder="Movie Website"
                            value={formik.values.url}
                            onChange={formik.handleChange}
                        />
                    </label>
                    { formik.errors.url ? <span className="container error">{formik.errors.url}</span> : null }
                    <label htmlFor="genre">
                        <span>GENRE</span>
                        <Multiselect
                            className="container__select"
                            name="genres"
                            isObject={false}
                            onSelect={handleSelect}
                            onRemove={handleSelect}
                            selectedValues={formik.values.genres}
                            options={genres}
                        />
                    </label>
                    { formik.errors.genres ? <span className="container error">{formik.errors.genres}</span> : null }
                    <label htmlFor="overview">
                        <span>OVERVIEW</span>
                        <input
                            name="overview"
                            className="container__input"
                            placeholder="Movie Overview"
                            value={formik.values.overview}
                            onChange={formik.handleChange}
                        />
                    </label>
                    { formik.errors.overview ? <span className="container error">{formik.errors.overview}</span> : null }
                    <label htmlFor="runtime">
                        <span>RUNTIME</span>
                        <input
                            name="runtime"
                            type="number"
                            className="container__input"
                            value={formik.values.runtime}
                            min="0"
                            placeholder="Movie Runtime"
                            onChange={formik.handleChange}
                        />
                    </label>
                    { formik.errors.runtime ? <span className="container error">{formik.errors.runtime}</span> : null }
                    <div className="container buttons">
                        <button className="container buttons__reset" onClick={formik.handleReset}>
                            RESET
                        </button>
                        <button className="container buttons__submit" type="submit">
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
