import React from "react";

import "./Nav.scss";

export default function Nav({ sort, filter, genres }) {
    return (
        <div className="nav">
            <ul className="nav__links">
                <li>
                    <a href="#All" onClick={filter}>ALL</a>
                </li>
                {
                    genres.slice(0, 6).map((genre) => {
                        return (
                            <li key={genre}>
                                <a href={`#${genre}`} onClick={filter}>{genre}</a>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="dropdown">
                <span className="dropdown__heading">SORT BY</span>
                <select className="dropdown__options" onChange={sort} >
                    <option value="release_date">RELEASE DATE</option>
                    <option value="title">TITLE</option>
                    <option value="genres">GENRE</option>
                    <option value="vote_average">RATING</option>
                </select>
            </div>
        </div>
    );
}
