import React from "react";
import { useSelector } from "react-redux";
import { getTrailerVideo } from "../store/moviesSlice";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

export const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector(getTrailerVideo);

  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};
