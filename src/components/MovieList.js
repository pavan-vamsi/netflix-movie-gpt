import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-xl md:text-3xl py-4 text-white">{title}</h1>
      <div
        className="flex overflow-x-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex" style={{ whiteSpace: "nowrap" }}>
          {/* Check if movies exists and is an array */}
          {Array.isArray(movies) && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))
          ) : (
            <p>No movies available</p> // Fallback if no movies
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
