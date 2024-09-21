import React from "react";
import GptSerachBar from "./GptSerachBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-20">
        <img
          className="top-0 left-0 w-screen h-screen object-cover z-0"
          src={BG_IMG}
          alt="background-img"
        />
      </div>
      <GptSerachBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
