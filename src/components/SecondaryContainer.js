import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="pl-12 -mt-52 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
        <MovieList title={"Popular"} movies={movies.popular} />
        <MovieList title={"Airing Today"} movies={movies.airingToday} />
        <MovieList title={"Top Rated"} movies={movies.topRated} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcoming} />
        <MovieList title={"On The Air"} movies={movies.onTheAir} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
