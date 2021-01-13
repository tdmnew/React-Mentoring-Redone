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

export default function App() {
    const [movies, setMovies] = React.useState(mockMovies);
    
    React.useEffect(() => {
        setMovies([...movies.sort((a, b) => (a.releasedate > b.releasedate) ? 1 : -1)])
    },[])

    function sort(e) {
        e.preventDefault();
        const sortBy = e.target.value;

        switch(sortBy) {
            case 'TITLE':
                setMovies([...movies.sort((a, b) => (a.title > b.title) ? 1 : -1)])
                break;
            case 'GENRE':
                setMovies([...movies.sort((a, b) => (a.genre > b.genre) ? 1 : -1)])
                break;
            case 'RELEASE DATE':
                setMovies([...movies.sort((a, b) => (a.releasedate > b.releasedate) ? 1 : -1)])
                break;
            default:
                throw new Error('No case found');
        }
    }

    return (
        <>
            <ModalContext>
                <Header />
                <Nav sort={sort} />
                <ErrorBoundary>
                    <MovieList movies={movies} />
                    <Modal movies={movies} setMovies={setMovies} />
                </ErrorBoundary>
                <Footer />
            </ModalContext>
        </>
    );
}

