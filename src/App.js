import "./App.scss";
import React from "react";

import Header from "./Components/Header/Header.js";
import Nav from "./Components/Nav/Nav.js";
import MovieList from "./Components/MovieList/MovieList.js";
import Footer from "./Components/Footer/Footer.js";

import ErrorBoundary from "./Components/ErrorBoundary.js";

//Modals
import Modal from "./Components/Modals/RootModal";
import { ModalContext } from "./Context/ModalContext.js";

//Movie Details
import { DetailsContext } from "./Context/DetailsContext.js";

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { sagaActions } from "./Store/Sagas/sagaActions";
import { sortMovies } from "./Store/Slices/movies.js";

export default function App() {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies);
    const genres = movies.map((movie) => movie.genres).flat().filter((v, i, s) => s.indexOf(v) === i);

    React.useEffect(() => {
        dispatch({ type: sagaActions.FETCH_MOVIES })
    }, []);

    const sort = (e) => {
        dispatch(sortMovies(e.target.value))
    }
    
    const filter = (e) => {
        const genre = e.target.getAttribute('href').slice(1)
        if(genre === "All") {
            dispatch({ type: sagaActions.FETCH_MOVIES })
        } else {
            dispatch({ type: sagaActions.FILTER_MOVIES, payload: genre })
        }
    }

    return (
        <>
            <ModalContext>
                <DetailsContext>
                    <Header />
                    <Nav sort={sort} filter={filter} genres={genres} />
                    <ErrorBoundary>
                        <MovieList />
                        <Modal />
                    </ErrorBoundary>
                    <Footer />
                </DetailsContext>
            </ModalContext>
        </>
    );
}
