import { useDispatch } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants";
import { client } from "../utils/openai";
import React, { useState } from "react";
import { addGptSearchMovies } from "../store/gptSlice";

export const GptSearchBar = () => {
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const searchMovieTMDB = (movie) => {
    const options = TMDB_OPTIONS;

    return fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => res.results);
  };

  const searchMovieGPT = async (e) => {
    if (!search) return;
    e.preventDefault();
    const gptQuery = `
    Act as a movies recommendation system and suggest movies for query: ${search}. Return only comma seprated names of the 5 movies, Example Result: Mother India, Mughal-E-Azam, Pyaasa, Sholay, Guide`;
    const completion = await client.chat.completions.create({
      model: "openrouter/horizon-beta",
      messages: [{ role: "user", content: gptQuery }],
    });

    let movieNames = completion.choices[0].message.content;
    movieNames = movieNames.split(",");

    const movieResults = await Promise.all(
      movieNames.map((movie) => searchMovieTMDB(movie))
    );
    dispatch(addGptSearchMovies({ movieResults, movieNames }));
  };

  return (
    <div className="p-4 pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black flex" onSubmit={searchMovieGPT}>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          className="p-4 rounded grow m-4"
          placeholder="What would you like to watch today?"
        />
        <button className="!bg-red-500 opacity-80 w-40 m-4 text-white">
          Search
        </button>
      </form>
    </div>
  );
};
