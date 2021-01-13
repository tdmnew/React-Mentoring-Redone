import React from "react";

import "../FormModal.scss";

export default function AddMovie({ movie, close, update, submit, reset }) {
    return (
        <div className="form-modal">
            <div className="form-modal container">
                <button className="container__close-btn" onClick={close}>
                    X
                </button>
                <form onSubmit={submit}>
                    <h2>ADD MOVIE</h2>
                    <label htmlFor="title">
                        <span>TITLE</span>
                        <input
                            name="title"
                            className="container__input"
                            placeholder="Movie Title"
                            value={movie.title || ''}
                            onChange={update}
                        />
                    </label>
                    <label htmlFor="releasedate">
                        <span>RELEASE DATE</span>
                        <input
                            name="releasedate"
                            className="container__date"
                            placeholder="Movie Release Date"
                            type="date"
                            value={movie.releasedate || ''}
                            onChange={update}
                        />
                    </label>
                    <label htmlFor="url">
                        <span>MOVIE URL</span>
                        <input
                            name="url"
                            className="container__input"
                            placeholder="Movie Website"
                            value={movie.url || ''}
                            onChange={update}
                        />
                    </label>
                    <label htmlFor="genre">
                        <span>GENRE</span>
                        <select
                            className="container__select"
                            name="genre"
                            value={movie.genre || ''}
                            onChange={update}
                        >
                            <option value="" selected disabled>
                                Select Genre
                            </option>
                            <option value="Action">
                                Action
                            </option>
                            <option value="Comedy">
                                Comedy 
                            </option>
                            <option value="Thriller">
                                Thriller
                            </option>
                            <option value="Sci-Fi">
                                Sci-Fi
                            </option>
                        </select>
                    </label>
                    <label htmlFor="overview">
                        <span>OVERVIEW</span>
                        <input
                            name="overview"
                            className="container__input"
                            placeholder="Movie Overview"
                            value={movie.overview || ''}
                            onChange={update}
                        />
                    </label>
                    <label htmlFor="runtime">
                        <span>RUNTIME</span>
                        <input
                            name="runtime"
                            className="container__input"
                            placeholder="Movie Runtime"
                            value={movie.runtime || ''}
                            onChange={update}
                        />
                    </label>
                    <div className="container buttons">
                        <button className="container buttons__reset" onClick={reset}>
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
