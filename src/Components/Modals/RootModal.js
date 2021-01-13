import React from "react";
import { ModalStateContext, ModalUpdaterContext } from "../../Context/ModalContext";

import AddMovie from "./AddMovie/AddMovie.js";
import EditMovie from "./EditMovie/EditMovie.js";
import DeleteMovie from "./DeleteMovie/DeleteMovie.js";

export default function Modal({ movies, setMovies }) {
    const { isOpen, modalProps } = React.useContext(ModalStateContext);
    const setModalOptions = React.useContext(ModalUpdaterContext);

    const defaultMovieInfo = {
        id: modalProps.type === "Edit Movie" ? modalProps.info.id : movies.length + 10,
        title: modalProps.type === "Edit Movie" ? modalProps.info.title : "",
        genre: modalProps.type === "Edit Movie" ? modalProps.info.genre : "",
        releasedate: modalProps.type === "Edit Movie" ? modalProps.info.releasedate : "",
        url: modalProps.type === "Edit Movie" ? modalProps.info.url : "",
        overview: modalProps.type === "Edit Movie" ? modalProps.info.overview : "",
        runtime: modalProps.type === "Edit Movie" ? modalProps.info.runtime : "",
    }

    const [movieInfo, setMovieInfo] = React.useState({...defaultMovieInfo});

    React.useEffect(() => {
        //Reset state for modal when it opens
        if (isOpen) {
            setMovieInfo({...defaultMovieInfo})
        }
    }, [modalProps]);

    function reset(e) {
        e.preventDefault();
        setMovieInfo({...defaultMovieInfo}); 
    }

    function closeModal() {
        setModalOptions({ isOpen: false });
    }

    function updateMovie(e) {
        e.preventDefault();
        setMovieInfo({ ...movieInfo, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (modalProps.type === "Add Movie") {
            let movieList = movies;
            movieList.push({ ...movieInfo });
            setMovies([...movieList]);
        } else if (modalProps.type === "Delete Movie") {
            let movieList = movies.filter((movie) => {
                return movie.id !== modalProps.info.id;
            });
            setMovies(movieList);
        } else {
            let movieList = movies.map((movie) => {
                if (movie.id === movieInfo.id) {
                    let newMovie = { ...movie, ...movieInfo };
                    return newMovie;
                }

                return movie;
            });
            setMovies(movieList);
        }
        
        closeModal();
    }

    function returnModalType() {
        let type = modalProps.type;
        switch (type) {
            case "Add Movie":
                return (
                    <AddMovie
                        movie={movieInfo}
                        update={updateMovie}
                        close={closeModal}
                        submit={handleSubmit}
                        reset={reset}
                    />
                );
            case "Edit Movie":
                return (
                    <EditMovie
                        movie={movieInfo}
                        update={updateMovie}
                        close={closeModal}
                        submit={handleSubmit}
                        reset={reset}
                    />
                );
            case "Delete Movie":
                return <DeleteMovie close={closeModal} submit={handleSubmit} />;
            default:
                throw new Error("No case match");
        }
    }

    return <>{isOpen ? returnModalType() : null}</>;
}
