import "./App.scss";
import React from "react";

import Header from "./Components/Header/Header.js";
import Nav from "./Components/Nav/Nav.js";
import MovieList from "./Components/MovieList/MovieList.js";
import Footer from "./Components/Footer/Footer.js";

import ErrorBoundary from "./Components/ErrorBoundary.js";

import mockMovies from "./movies.json";

//Modals
import Modal from "./Components/Modals/RootModal";
import { ModalContext } from "./Context/ModalContext.js";

//Movie Details
import { DetailsContext } from "./Context/DetailsContext.js";

export default function App() {
  const [movies, setMovies] = React.useState(mockMovies);

  React.useEffect(() => {
    sortBy("releasedate");
  }, []);

  //Sorting
  const sortBy = (type) => {
    setMovies([...movies.sort((a, b) => (a[type] > b[type] ? 1 : -1))]);
  };

  const sort = (e) => {
    e.preventDefault();
    sortBy(e.target.value);
  };

  //Movies Updates
  const addMovie = (movie) => {
    let movieList = movies;
    movieList.push({ ...movie });
    setMovies([...movieList]);
  };

  const deleteMovie = React.useCallback(
    (id) => {
      setMovies(movies.filter((movie) => movie.id !== id));
    },
    [movies]
  );

  const editMovie = (updatedMovie) => {
    setMovies(
      movies.map((movie) => {
        if (movie.id === updatedMovie.id) {
          return { ...movie, ...updatedMovie };
        }
        return movie;
      })
    );
  };

  return (
    <>
      <ModalContext>
        <DetailsContext>
          <Header />
          <Nav sort={sort} />
          <ErrorBoundary>
            <MovieList movies={movies} />
            <Modal
              addMovie={addMovie}
              editMovie={editMovie}
              deleteMovie={deleteMovie}
            />
          </ErrorBoundary>
          <Footer />
        </DetailsContext>
      </ModalContext>
    </>
  );
}
