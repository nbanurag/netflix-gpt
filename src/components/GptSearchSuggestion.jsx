import React from "react";
import { useSelector } from "react-redux";
import { getGptSearchMovies } from "../store/gptSlice";
import MovieList from "./MovieList";

export const GptSearchSuggestion = () => {
  const { movieResults, movieNames } = useSelector(getGptSearchMovies);
  if (!movieNames) return;
  
  return (
    <div className="bg-black opacity-90 mx-10 mb-10">
      {movieNames.map((movie, index) => (
        <MovieList key={movie} title={movie} movies={movieResults[index]} />
      ))}
    </div>
  );
};
