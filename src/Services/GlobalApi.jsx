import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "917d8050cbf6afe4c71144d7df5c8a88";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key="+api_key;

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
