import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";
import PropTypes from 'prop-types';

MovieItem.propTypes = {
    movie: PropTypes.object,
};

function MovieItem({movie}) {
  const thumbnailURL = "https://via.placeholder.com/200";
  const history = useHistory();

  const handleClick = () => {
    history.push(`movies/${movie.id}`);
  };

  return (
    <div className="movie">
      <img
        style={{ cursor: "pointer", width: "100%", height: "200px" }}
        src={thumbnailURL}
        alt="test"
        onClick={handleClick}
      />
      <h4>{movie.title}</h4>
      Release year: {movie.releaseYear}
    </div>
  );
}

export default MovieItem;
