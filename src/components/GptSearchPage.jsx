import React from "react";
import { GptSearchBar } from "./GptSearchBar";
import { netflixBg } from "../utils/constants";

export const GptSearchPage = () => {
  return (
    <div className="!w-screen">
      <img
        className="absolute max-h-screen !w-screen !-z-10"
        src={netflixBg}
        alt="logo"
      />
      <GptSearchBar />
    </div>
  );
};
