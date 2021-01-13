import React from "react";
import { useSelector } from "react-redux";

import "./MovieList.scss";

import MovieCard from "../MovieCard/MovieCard.js";

export default function MovieList() {

    const movies = useSelector((state) => state.movies)

    return (
        <>
            <div className="total">
                <span className="total__number">
                    {movies.length}
                </span>
                <span className="total__text"> movies found</span>
            </div>
            <div className="movielist">
                {movies.map((movie) => {
                    return (
                        <MovieCard
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            tagline={movie.tagline}
                            vote_average={movie.vote_average}
                            vote_count={movie.vote_count}
                            release_date={movie.release_date}
                            poster_path={movie.poster_path}
                            overview={movie.overview}
                            budget={movie.budget}
                            revenue={movie.revenue}
                            genres={movie.genres}
                            runtime={movie.runtime}
                            url={movie.url}
                        />
                    );
                })}
            </div>
        </>
    );
}
