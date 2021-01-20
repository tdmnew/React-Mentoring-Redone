import api from "./axiosInstance";

const editMovieAPI = async (payload) => {
    const movie = payload.payload;
    delete movie.url;

    return api.put('/movies', {
        ...movie
    })
    .then((res) => {
        return res.data;
    })
}

export default editMovieAPI;
