import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const { searchMoviesResults, searchMovieNames } = useSelector(
    (store) => store.search
  );
  if (!searchMoviesResults) return null;

  console.log(searchMoviesResults, searchMovieNames)
  return (
    <div className="p-2 m-2 bg-black text-white bg-opacity-90">
      {searchMoviesResults?.map((movie, index) => (
        <MovieList key={index} title={searchMovieNames[index]} movies={movie} />
      ))}
    </div>
  );
};

export default GPTMovieSuggestions;
