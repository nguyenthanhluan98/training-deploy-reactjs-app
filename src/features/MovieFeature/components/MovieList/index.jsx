import PropTypes from "prop-types";
import React from "react";
import MovieItem from "../MovieItem";
import "./styles.css";

MovieList.propTypes = {
  data: PropTypes.array,
};

function MovieList({ data, onClick }) {
  const handleClick = (movieId) => {
    if (onClick) {
      onClick(movieId);
    }
  };

  return (
    <div className="movie-list">
      <div className="grid-container">
        {data.map((movie) => (
          <div className="grid-item">
            <MovieItem key={movie.id} movie={movie} />
            <button className="button" onClick={() => handleClick(movie.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
