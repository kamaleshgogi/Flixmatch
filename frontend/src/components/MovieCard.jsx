import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";
import { useGenres } from "../contexts/GenreContext";
import { useState } from "react";
import { getRecommendations } from "../services/api";
import Recommendations from "./Recommendations";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorite, removeFromFavorites } = useMovieContext();
  const genres = useGenres();
  const favorite = isFavorite(movie.id);

  const genreNames = movie.genre_ids.map(
    (id) => genres.find((genre) => genre.id === id)?.name
  ).filter(Boolean).join(", ");

  const [showFullSynopsis, setShowFullSynopsis] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [loadingRecommendations, setLoadingRecommendations] = useState(false);

  const handleToggleSynopsis = () => {
    setShowFullSynopsis(!showFullSynopsis);
  };

  const handleFetchRecommendations = async () => {
    setLoadingRecommendations(true);
    const recommendedMovies = await getRecommendations(movie.id);
    recommendedMovies.sort((a, b) => b.vote_average - a.vote_average);
    setRecommendations(recommendedMovies);
    setLoadingRecommendations(false);
  };

  const truncatedSynopsis = movie.overview.length > 250
    ? movie.overview.substring(0, 250) + "..."
    : movie.overview;

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorite(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="movie-overlay">
          <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
            ❤︎
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
        <p><strong>Rating:</strong> {movie.vote_average.toFixed(1)}</p>
        <p>
          <strong>Synopsis:</strong> {showFullSynopsis ? movie.overview : truncatedSynopsis}
          {movie.overview.length > 250 && (
            <a href="#" onClick={handleToggleSynopsis}>
              {showFullSynopsis ? " See less" : " See more"}
            </a>
          )}
        </p>
        <p><strong>Genre:</strong> {genreNames}</p>
        <button onClick={handleFetchRecommendations}>
          {loadingRecommendations ? "Loading..." : "Get Recommendations"}
        </button>
        {recommendations.length > 0 && (
          <Recommendations recommendations={recommendations} />
        )}
      </div>
    </div>
  );
}

export default MovieCard;
