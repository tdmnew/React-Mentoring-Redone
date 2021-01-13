import React from "react";

import "./MovieList.scss";

import MovieCard from "../MovieCard/MovieCard.js";
import EditMovie from "../Modals/EditMovie/EditMovie.js";
import DeleteMovie from "../Modals/DeleteMovie/DeleteMovie.js";

export default function MovieList({ movies }) {
    return (
        <>
            <div className="total">
                <span className="total__number">
                    {movies?.length}
                </span>
                <span className="total__text"> movies found</span>
            </div>
            <div className="movielist">
                {movies?.map((movie) => {
                    return (
                        <MovieCard
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            genre={movie.genre}
                            releasedate={movie.releasedate}
                            url={movie.url}
                            overview={movie.overview}
                            runtime={movie.runtime}
                            image={movie.image}
                        />
                    );
                })}
            </div>
        </>
    );
}
