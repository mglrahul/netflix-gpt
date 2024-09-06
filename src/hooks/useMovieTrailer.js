import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailer } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    if (!movieId) return;
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const trailerDetails = json.results.filter(
      (item) => item.type === "Trailer"
    );
    const trailer = trailerDetails.length > 0 ? trailerDetails[0].key : json.results[0].key;
    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    getMovieTrailer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useMovieTrailer;
