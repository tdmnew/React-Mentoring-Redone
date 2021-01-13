import React from "react";
import { useDispatch } from "react-redux";

import {
    ModalStateContext,
    ModalUpdaterContext,
} from "../../Context/ModalContext";

import AddMovie from "./AddMovie/AddMovie.js";
import EditMovie from "./EditMovie/EditMovie.js";
import DeleteMovie from "./DeleteMovie/DeleteMovie.js";

import { editMovie, deleteMovie } from "../../Store/Slices/movies.js";

import { sagaActions } from "../../Store/Sagas/sagaActions.js";

export default function Modal() {
    const dispatch = useDispatch();

    const { isOpen, modalProps } = React.useContext(ModalStateContext);
    const setModalOptions = React.useContext(ModalUpdaterContext);

    const defaultValues = {
        title: "",
        tagline: "",
        vote_average: 0,
        vote_count: 0,
        genres: ["Action"],
        release_date: "",
        overview: "",
        budget: 0,
        revenue: 0,
        runtime: 0,
        poster_path:
            "https://linnea.com.ar/wp-content/uploads/2018/09/404PosterNotFound.jpg",
    };

    const [movieInfo, setMovieInfo] = React.useState({
        ...defaultValues,
    });

    React.useEffect(() => {
        //Reset state for modal when it opens
        if (modalProps.type === "Add Movie") {
            setMovieInfo({ ...defaultValues });
        } else {
            setMovieInfo({ ...modalProps.info });
        }
    }, [modalProps]);

    const reset = (e) => {
        e.preventDefault();
        if (modalProps.type === "Add Movie") {
            setMovieInfo({ ...defaultValues });
        } else {
            setMovieInfo({ ...modalProps.info });
        }
    };

    const closeModal = () => {
        setModalOptions({ isOpen: false });
    };

    const updateMovie = (e) => {
        e.preventDefault();
        setMovieInfo({ ...movieInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        switch (modalProps.type) {
            case "Add Movie":
                let title = movieInfo.title === "" ? "No Title" : movieInfo.title;
                let tagline = movieInfo.tagline === "" ? "No Tagline" : movieInfo.tagline;
                let release_date = movieInfo.release_date === "" ? "1990-01-01" : movieInfo.release_date;
                let overview = movieInfo.overview === "" ? "No Overview" : movieInfo.overview;
                let runtime = Number(movieInfo.runtime)

                dispatch({ type: sagaActions.ADD_MOVIE, payload: {...movieInfo, title, tagline, release_date, overview, runtime } });
                break;
            case "Edit Movie":
                dispatch({ type: sagaActions.EDIT_MOVIE, payload: movieInfo });
                break;
            case "Delete Movie":
                dispatch({ type: sagaActions.DELETE_MOVIE, payload: modalProps.info.id });
                break;
            default:
                throw new Error("No case found");
        }

        closeModal();
    };

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
