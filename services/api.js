import { API_KEY } from "@env";
import axios from "axios";

export const getMovies = async () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`
    )
    .then((res) => res.data);
};

export const getGenres = () => {
  return axios
    .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
    .then((res) => res.data);
};

export const getMoviesByCategory = (category) => {
  const data = axios.get(
    `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}`
  );
  return data;
};

export const getDetail = (id) => {
  const data = axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  return data;
};
