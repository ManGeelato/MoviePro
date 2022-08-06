import React from "react";
import MovieCard from "./MovieCard";

const Popular = ({ movies }) => {
  return (
    <div className="bg-gray-600 container max-w-7xl mx-auto pb-10 px-4">
      <h1 className="text-orange-600 text-2xl mt-8 mb-5 tracking-widest font-bold p-4">
        Popular Movies
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
