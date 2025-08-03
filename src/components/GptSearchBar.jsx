import React from "react";

export const GptSearchBar = () => {
  return (
    <div className="p-4 pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black flex">
        <input
          type="text"
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
