import api from "./axiosInstance";

const deleteMovieAPI = async (payload) => {
    const movieId = payload.payload;
    return api.delete(`/movies/${movieId}`)
}

export default deleteMovieAPI;
