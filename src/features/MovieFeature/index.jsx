import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MovieDetailsContainer from "./containers/MovieDetailsContainer";
import MoviesContainer from "./containers/MoviesContainer";

function MovieFeature() {
  const match = useRouteMatch();

  return (
    <div style={{ margin: "" }}>
      <Switch>
        <Route path={match.url} exact component={MoviesContainer} />
        <Route
          path={`${match.url}/:movieId`}
          component={MovieDetailsContainer}
        />
      </Switch>
    </div>
  );
}

export default MovieFeature;
