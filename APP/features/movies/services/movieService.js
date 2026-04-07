import { api } from "../../../services/api";

export async function getPopularMovies() {
  const response = await api.get("/movies/popular", {
    params: {
      language: "pt-BR",
      page: 1,
    },
  });
  return response.data.results;
};