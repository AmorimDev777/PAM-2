import { api } from "../../../services/api"

export const getMovies = async () => {
    const response = await api.get("/filmes")
    console.log(response)
    return response.data;
};