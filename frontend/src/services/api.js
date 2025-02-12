const API_KEY = "6d679b08725ffd7173dc717bab097ebb";
const DEEPSEEK_API_KEY = "sk-de3eab1f76a94fd0a6601a3668b2273a";
const BASE_URL = "https://api.themoviedb.org/3";
const DEEPSEEK_URL = "https://api.deepseek.com/v1";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.results;
};

export const getGenres = async () => {
  const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
  const data = await response.json();
  return data.genres;
};

export const getRecommendations = async (movieId) => {
  const response = await fetch(`${DEEPSEEK_URL}/recommendations?api_key=${DEEPSEEK_API_KEY}&movie_id=${movieId}`);
  const data = await response.json();
  return data.recommendations;
};
