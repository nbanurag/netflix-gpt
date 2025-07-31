import React from "react";
import { Header } from "./Header";
import { TMDB_OPTIONS } from "../utils/constants";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { MainContainer } from "./MainContainer";
import { SeconderyContainer } from "./SeconderyContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

export const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SeconderyContainer />
    </div>
  );
};
