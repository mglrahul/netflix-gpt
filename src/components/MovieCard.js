import React from "react";
import { MOVIE_URL_CDN } from "../utils/constant";

const MovieCard = ({ movie }) => {
  const { poster_path } = movie;
  if (!poster_path) return null;
  return (
    <div className="w-36 p-2">
      <img src={MOVIE_URL_CDN + poster_path} alt="movie poster" />
    </div>
  );
};

export default MovieCard;
