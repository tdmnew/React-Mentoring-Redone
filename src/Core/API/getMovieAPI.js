import api from "./axiosInstance";

const getMovieAPI = async (payload) => {
    const movieId = payload.payload;

    return api.get(`/movies/${movieId}`)
    .then((res) => {
        return res.data;
    })
}

export default getMovieAPI;
