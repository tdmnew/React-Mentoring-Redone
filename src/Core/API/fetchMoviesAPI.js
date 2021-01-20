import api from "./axiosInstance.js";

const fetchMoviesAPI = async () => {
    return api.get('/movies')
    .then((res) => {
        return res.data.data;
    })
}

export default fetchMoviesAPI;
