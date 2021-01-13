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
            <div className="nav__dropdown">
                <span className="nav__dropdown heading">SORT BY</span>
                <select className="nav__dropdown options" onChange={sort} >
                    <option value="RELEASE DATE">RELEASE DATE</option>
                    <option value="TITLE">TITLE</option>
                    <option value="GENRE">GENRE</option>
                </select>
            </div>
        </div>
    );
}
