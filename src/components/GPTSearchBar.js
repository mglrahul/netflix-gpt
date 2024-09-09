import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import SUPPORTED_LANGUAGE from "../utils/languageConstant";
import openAi from "../utils/openAi";
import { API_OPTIONS } from "../utils/constant";
import { addSearchMovies } from "../utils/searchGptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const appLanguage = useSelector((store) => store.lang.appLang);
  const inputRef = useRef(null);

  const handleSearchBar = async () => {

    const searchMovieTMDB = async (movieName) => {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movieName +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      return json.results;
    };

    // const gptQuery =
    //   "Act as movie recommendation system and suggest some movies for the query: " +
    //   inputRef.current.value +
    //   ". Only give me name of 5 movies, comma separated like the example result given ahead. Example result: Gadar, Sholay, Golmaal, Don, Koi mil gaya";

    // const chatCompletion = await openAi.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    const apiResult = [
      "Chupke Chupke",
      "Padosan",
      "Gol Maal",
      "Chashme Buddoor",
      "Jaane Bhi Do Yaaro",
    ];

    const resultArr = apiResult.map((movie) => searchMovieTMDB(movie));

    const tmdbResult = await Promise.all(resultArr);

    dispatch(addSearchMovies({ movieNames: apiResult, movieResults: tmdbResult }));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={inputRef}
          placeholder={SUPPORTED_LANGUAGE[appLanguage].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
        />
        <button
          className="bg-red-700 text-white rounded-lg py-2 m-4 px-4 col-span-3"
          onClick={handleSearchBar}
        >
          {SUPPORTED_LANGUAGE[appLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
