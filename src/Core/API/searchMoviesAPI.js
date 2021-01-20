import api from "./axiosInstance";

const searchMoviesAPI = async (payload) => {
    const term = payload.payload;

    return api.get(`/movies`, {
        params: {
            search: term,
            searchBy: "title"
        }
    })
    .then((res) => {
        return res.data.data;
    })
}

export default searchMoviesAPI;
