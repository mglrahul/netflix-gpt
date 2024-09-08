import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { LOGIN_BG_IMAGE } from "../utils/constant";

const GPTSearch = () => {
  return (
    <div className="">
      <div className="absolute -z-10">
        <img src={LOGIN_BG_IMAGE} alt="background" />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
