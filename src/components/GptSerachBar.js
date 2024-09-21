import React, { useRef } from "react";
import lang from "../utils/langConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSerachBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const serachText = useRef(null);
  const dispatch = useDispatch();

  //Search movie in TMDb
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(serachText.current.value);
    // Make an API call to GPT API and get movie results.

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query :" +
      serachText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo"
    });

    if (!gptResults.choices) {
      console.log("error");
    }

    console.log(gptResults.choices?.[0].message?.content);

    const gptMovies = gptResults.choices?.[0].message?.content.split(", ");

    // For Each movie I will search TMDb API

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // searchMovieTMDB returns promices but not results, this promise will take some time to get the
    // results => Promise.all() converts promise to results

    const tmdbResults = await Promise.all(promiseArray);
    // console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[40%] md:pt-[9%] flex justify-center">
      <form
        className="w-full md:w-6/12 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={serachText}
          className="m-4 p-4 col-span-9 rounded-lg"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="m-4 py-2 px-4 bg-red-600 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSerachBar;
