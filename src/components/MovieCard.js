import React from "react";
import { MOVIE_URL_CDN } from "../utils/constant";

const MovieCard = ({ movie }) => {
  console.log("MovieCard:", movie);
  return (
    <div className="w-36 p-2">
      <img 
      src={MOVIE_URL_CDN + movie?.poster_path} alt="movie poster" />
    </div>
  );
};

export default MovieCard;
