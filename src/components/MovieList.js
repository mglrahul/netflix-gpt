import React from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const { title, movies } = props;
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-xl py-2 px-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
