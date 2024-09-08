import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movie?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movie?.topRatedMovies);
  const upComingMovies = useSelector((store) => store.movie?.upComingMovies);

  return (
    <div className="bg-black">
      <div className="-mt-40 px-4 relative z-20">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Upcoming Movies"} movies={upComingMovies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Top Rated Movies"} movies={topRatedMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
