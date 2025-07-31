import React from "react";
import { useSelector } from "react-redux";
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "../store/moviesSlice";
import MovieList from "./MovieList";

export const SeconderyContainer = () => {
  const nowPlaying = useSelector(getNowPlayingMovies);
  const popular = useSelector(getPopularMovies);
  const upComing = useSelector(getUpcomingMovies);
  const topRated = useSelector(getTopRatedMovies);

  return (
    <div className="bg-black -mt-60">
      <MovieList title={"Now Playing"} movies={nowPlaying} />
      <MovieList title={"Top Rated"} movies={topRated} />
      <MovieList title={"Popular"} movies={popular} />
      <MovieList title={"Upcoming Movies"} movies={upComing} />
    </div>
  );
};
