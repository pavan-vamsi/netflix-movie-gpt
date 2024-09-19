import React from "react";
import lang from "../utils/langConstants";
import { useSelector } from "react-redux";

const GptSerachBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[9%] flex justify-center">
      <form className="w-6/12 bg-black grid grid-cols-12">
        <input
          className="m-4 p-4 col-span-9 rounded-lg"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="m-4 py-2 px-4 bg-red-600 text-white rounded-lg col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSerachBar;
