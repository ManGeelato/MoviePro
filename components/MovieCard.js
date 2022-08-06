import React from "react";
import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ movie }) => {
  const originalLink = "https://image.tmdb.org/t/p/w500/";

  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="bg-orange-600 shadow-sm rounded-bottom cursor-pointer">
        <Image
          src={`${originalLink}${movie.poster_path}`}
          width={700}
          height={800}
          className="rounded-t-md"
          layout="responsive"
          alt={movie.title}
        />
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-1">{movie.title}</div>
          <p className="text-gray-700 text-base mb-1">{movie.release_date}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
