import axios from "axios";
import { API_KEY, API_URL } from "../constants/config";

export const api = axios.create({
  baseURL: API_URL,
});


api.interceptors.response.use((config) => {
  config.headers.Authorization = `Bearer ${API_KEY}`;
  config.headers.accept = "application/json";
  return config;
})