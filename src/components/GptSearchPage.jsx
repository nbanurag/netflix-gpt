import React from "react";
import { GptSearchBar } from "./GptSearchBar";
import { netflixBg } from "../utils/constants";
import { GptSearchSuggestion } from "./GptSearchSuggestion";

export const GptSearchPage = () => {
  return (
    <div className="!w-screen">
      <img
        className="fixed max-h-screen !w-screen !-z-10"
        src={netflixBg}
        alt="logo"
      />
      <GptSearchBar />
      <GptSearchSuggestion/>
    </div>
  );
};
