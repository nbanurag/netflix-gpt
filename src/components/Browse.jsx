import React from "react";
import { Header } from "./Header";
import { TMDB_OPTIONS } from "../utils/constants";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { MainContainer } from "./MainContainer";
import { SeconderyContainer } from "./SeconderyContainer";

export const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SeconderyContainer/>
    </div>
  );
};
