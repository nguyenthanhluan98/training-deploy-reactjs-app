import React from "react";
import { useRouteMatch } from "react-router-dom";

function MovieDetailsContainer() {
  const {
    params: { movieId },
  } = useRouteMatch();

  return (
    <div>
      <h2>Details movie page</h2>
      <p>Movie ID: {movieId}</p>
    </div>
  );
}

export default MovieDetailsContainer;
