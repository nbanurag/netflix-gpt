import React from "react";
import { imageCDNUrl } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 flex-shrink-0">
      <img
        alt={"movieCard"}
        src={imageCDNUrl + posterPath}
      />
    </div>
  );
};

export default MovieCard;