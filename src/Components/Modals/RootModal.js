import React from "react";
import { ModalStateContext, ModalUpdaterContext } from "../../Context/ModalContext";

import AddMovie from "./AddMovie/AddMovie.js";
import EditMovie from "./EditMovie/EditMovie.js";
import DeleteMovie from "./DeleteMovie/DeleteMovie.js";

export default function Modal({ addMovie, editMovie, deleteMovie }) {
    const { isOpen, modalProps } = React.useContext(ModalStateContext);
    const setModalOptions = React.useContext(ModalUpdaterContext);

    const defaultMovieInfo = {
        id: modalProps.type === "Edit Movie" ? modalProps.info.id : Math.random(),
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

    const reset = (e) => {
        e.preventDefault();
        setMovieInfo({...defaultMovieInfo}); 
    }

    const closeModal = () => {
        setModalOptions({ isOpen: false });
    }

    const updateMovie = (e) => {
        console.log(typeof e.target.value);
        e.preventDefault();
        setMovieInfo({ ...movieInfo, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        switch(modalProps.type) {
            case "Add Movie": 
                addMovie(movieInfo);
                break;
            case "Edit Movie":
                editMovie(movieInfo);
                break;
            case "Delete Movie":
                deleteMovie(modalProps.info.id);
                break;
            default:
                throw new Error('No case found');
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
