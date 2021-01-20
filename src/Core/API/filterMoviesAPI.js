import api from "./axiosInstance";

const filterMoviesAPI = async (payload) => {
    const genre = payload.payload;

    return api.get('/movies', {
        params: { filter: genre }
    })
    .then((res) => {
        return res.data.data;
    })
}

export default filterMoviesAPI;
