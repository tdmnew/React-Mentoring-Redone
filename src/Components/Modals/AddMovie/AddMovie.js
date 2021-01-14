import React from "react";
import { Multiselect } from "multiselect-react-dropdown";

import "../FormModal.scss";

export default function AddMovie({ formik, close, genres }) {
    const handleSelect = (value) => {
        formik.setFieldValue("genres", value);
    };

    return (
        <div className="form-modal">
            <div className="form-modal container">
                <button className="container__close-btn" title="close" onClick={close}>
                    X
                </button>
                <form onSubmit={formik.handleSubmit}>
                    <h2>ADD MOVIE</h2>
                    <label aria-labelledby="title">
                        <span>TITLE</span>
                        <input
                            name="title"
                            title="title"
                            className="container__input"
                            placeholder="Movie Title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                        />
                    </label>
                    {formik.errors.title ? (
                        <span className="container error">
                            {formik.errors.title}
                        </span>
                    ) : null}
                    <label aria-labelledby="release date">
                        <span>RELEASE DATE</span>
                        <input
                            name="release_date"
                            title="release_date"
                            className="container__date"
                            placeholder="Movie Release Date"
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
                        <span>MOVIE URL</span>
                        <input
                            name="url"
                            title="url"
                            className="container__input"
                            placeholder="Movie Website"
                            value={formik.values.url}
                            onChange={formik.handleChange}
                        />
                    </label>
                    {formik.errors.url ? (
                        <span className="container error">
                            {formik.errors.url}
                        </span>
                    ) : null}
                    <label aria-labelledby="genres">
                        <span>GENRE</span>
                        <Multiselect
                            className="container__select"
                            name="genres"
                            title="genres"
                            isObject={false}
                            onSelect={handleSelect}
                            selectedValues={formik.values.genres}
                            options={genres}
                        />
                    </label>
                    {formik.errors.genres ? (
                        <span className="container error">
                            {formik.errors.genres}
                        </span>
                    ) : null}
                    <label aria-labelledby="overview">
                        <span>OVERVIEW</span>
                        <input
                            name="overview"
                            title="overview"
                            className="container__input"
                            placeholder="Movie Overview"
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
                        <span>RUNTIME</span>
                        <input
                            name="runtime"
                            title="runtime"
                            type="number"
                            min="0"
                            className="container__input"
                            placeholder="Movie Runtime"
                            value={formik.values.runtime}
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
                            title="reset"
                            className="container buttons__reset"
                            onClick={formik.handleReset}
                        >
                            RESET
                        </button>
                        <button
                            title="submit"
                            className="container buttons__submit"
                            type="submit"
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
