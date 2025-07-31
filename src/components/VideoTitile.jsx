import React from "react";

export const VideoTitile = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[30%] px-24 absolute text-white">
      <h1 className="font-semibold ">{title}</h1>
      <p className="text-lg w-1/2 py-6 font-medium ">{overview}</p>
      <div className="flex gap-2">
        <button className="!bg-white w-30 text-black hover:opacity-60">▶ Play</button>
        <button className="!bg-gray-500 opacity-80 w-40">🛈︎ More Info</button>
      </div>
    </div>
  );
};
