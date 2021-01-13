import React from "react";

import "./Nav.scss";

export default function Nav({ sort }) {
    return (
        <div className="nav">
            <ul className="nav__links">
                <li>
                    <a href="#">ALL</a>
                </li>
                <li>
                    <a href="#">DOCUMENTARY</a>
                </li>
                <li>
                    <a href="#">COMEDY</a>
                </li>
                <li>
                    <a href="#">HORROR</a>
                </li>
                <li>
                    <a href="#">CRIME</a>
                </li>
            </ul>
            <div className="dropdown">
                <span className="dropdown__heading">SORT BY</span>
                <select className="dropdown__options" onChange={sort} >
                    <option value="releasedate">RELEASE DATE</option>
                    <option value="title">TITLE</option>
                    <option value="genre">GENRE</option>
                </select>
            </div>
        </div>
    );
}
