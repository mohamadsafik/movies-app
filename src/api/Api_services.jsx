import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGQ4NGRjYTgzZTg3YzU5MTI4ZmRhMDdiOTEyYTVjYSIsInN1YiI6IjY1NjU4MTZhM2Q3NDU0MDEwYmUwYjNjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qwz4YrF1oTAMRFiYHCTgHMScJJ7lR76w0xJw5ARgKdw"; // Replace with your actual API key

const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
});

const getPopularTVShows = (language = "en-US", page = 1) => {
  return instance.get(`/movie/popular?language=${language}&page=${page}`);
};

const searchMovies = (search = "") => {
  return instance.get(
    `/search/movie?query=${search}&include_adult=false&language=en-US&page=1`
  );
};

export const ApiService = {
  getPopularTVShows,
  searchMovies,
};
