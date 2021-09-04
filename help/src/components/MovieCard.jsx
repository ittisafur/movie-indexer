import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt=""
      />
      <h1 className="text-xl text-gray-300">{movie.original_title}</h1>
    </div>
  );
};

export default MovieCard;
