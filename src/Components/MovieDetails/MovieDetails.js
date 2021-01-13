import React from "react";
import ReactDOM from "react-dom";

import "./MovieDetails.scss";

import { DetailsStateContext } from "../../Context/DetailsContext.js";

export default function MovieDetails() {
    const { detailsProps } = React.useContext(DetailsStateContext);

    const fallbackImage = (e) => {
        e.target.src = "https://linnea.com.ar/wp-content/uploads/2018/09/404PosterNotFound.jpg"
    }
    
    return (
        <div className="moviedetails">
            <img className="moviedetails__poster" onError={fallbackImage} src={detailsProps.poster_path} />
            <div className="moviedetails text">
                <div className="text top">
                    <h2 className="text top__title">{detailsProps.title}</h2>
                    <span className="text top__rating">{detailsProps.vote_average}</span>
                </div>
                <span className="text genre">
                    {detailsProps.tagline}
                </span>
                <div className="text center">
                    <span className="text center__year">
                        {detailsProps.release_date.substring(0, 4)}
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
