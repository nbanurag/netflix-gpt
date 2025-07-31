import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../store/moviesSlice";
import { TMDB_OPTIONS } from "../utils/constants";

export const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      TMDB_OPTIONS
    )
      .then((res) => res.json())
      .then(({ results }) => {
        let trailer = results.find(({ type }) => type === "Trailer");
        trailer = trailer || results[0];
        dispatch(addTrailerVideo(trailer));
      });
  }, [dispatch, movieId]);
};
