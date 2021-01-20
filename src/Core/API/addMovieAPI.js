import api from "./axiosInstance";

const addMovieAPI = async (payload) => {
    const movie = payload.payload;
    delete movie.url;

    return api.post('/movies', {
        ...movie
    })
    .then((res) => {
        console.log(res)
        return res.data;
    })
}

export default addMovieAPI;
