import React from "react"; 
import { NavLink } from "react-router-dom";

import "./NotFound.scss";

export default function NotFound() {
    return (
        <div className="not-found">
            <div className="not-found heading">
                <p className="heading logo">
                <span className="heading logo--left">netflix</span>
                <span className="heading logo--right">roulette</span>
                </p>
            </div>
            <div className="not-found body">
            <h3 className="not-found body__text--top">Page Not Found</h3>
            <h4 className="not-found body__text--bottom">404</h4>
            <NavLink className="not-found body__btn" to="/">GO BACK TO HOME</NavLink>
            </div>
        </div>
    )
}