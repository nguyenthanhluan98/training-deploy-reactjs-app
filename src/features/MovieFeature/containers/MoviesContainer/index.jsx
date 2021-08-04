import React, { useEffect, useState } from "react";
import { STATIC_HOST } from "../../../../constants";

import MovieList from "../../components/MovieList";

function MoviesContainer() {
  const [movieList, setMovieList] = useState([]);
  const [flagChange, setFlagChange] = useState(false);

  useEffect(() => {
    fetchData();
  }, [flagChange]);

  const fetchData = async () => {
    try {
      const result = await fetch(STATIC_HOST);
      const data = await result.json();
      setMovieList(data);
    } catch (error) {
      console.log("Failed fetch data: ", error);
    }
  };

  const handleDeleteMovie = async (movieId) => {
    console.log("movie ID: ", movieId);
    try {
      const data = await fetch(`${STATIC_HOST}/${movieId}`, {
        method: "DELETE",
      });
      setFlagChange(!flagChange);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <MovieList data={movieList} onClick={handleDeleteMovie} />
    </div>
  );
}

export default MoviesContainer;
