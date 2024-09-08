import React from "react";
import { useSelector } from "react-redux";
import SUPPORTED_LANGUAGE from "../utils/languageConstant"

const GPTSearchBar = () => {
  const appLanguage = useSelector((store) => store.lang.appLang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder={SUPPORTED_LANGUAGE[appLanguage].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
        />
        <button className="bg-red-700 text-white rounded-lg py-2 m-4 px-4 col-span-3">
          {SUPPORTED_LANGUAGE[appLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
