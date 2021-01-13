import React from "react";
import ReactDOM from "react-dom";

import "./MovieDetails.scss";

import { DetailsStateContext } from "../../Context/DetailsContext.js";

export default function MovieDetails() {
    const { detailsProps } = React.useContext(DetailsStateContext);

    return (
        <div className="moviedetails">
            <img className="moviedetails__poster" src={detailsProps.image} />
            <div className="moviedetails text">
                <div className="text top">
                    <h2 className="text top__title">{detailsProps.title}</h2>
                    <span className="text top__rating">4.3</span>
                </div>
                <span className="text genre">
                    {detailsProps.genre}
                </span>
                <div className="text center">
                    <span className="text center__year">
                        {detailsProps.releasedate.substring(0, 4)}
                    </span>
                    <span className="text center__runtime">
                        {detailsProps.runtime} min
                    </span>
                    <br/>

                </div>

                <div className="text bottom">

                    <p className="text bottom__overview">
                        {detailsProps.overview}
                    </p>
                </div>
            </div>
        </div>
    );
}
