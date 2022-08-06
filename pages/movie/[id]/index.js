import React from "react";
import axios from "axios";
import { movieServer } from "../../../config/index";
import Image from "next/image";
import PageTitle from "../../../components/PageTitle";

const Movie = ({ movie }) => {
  const originalLink = "https://image.tmdb.org/t/p/original";
  return (
    <div className="container max-w-4xl mx-auto pt-6 bg-orange-600">
        <PageTitle title={movie.title} />
      <div className="px-3">
        <Image
          src={`${originalLink}${movie.backdrop_path}`}
          width={1000}
          height={600}
          className="rounded-md cursor-pointer"
        />
        <h1 className="font-bold text-xl my-3">{movie.title}</h1>
        <p className="text-gray-800 text-md mt-4">{movie.overview}</p>
        <p className="font-bold text-md mt-4">
          Genres:{" "}
          <span>{movie.genres.map((genre) => genre.name).join(", ")}</span>
        </p>
        <p className="font-bold text-md mt-4 pb-4 mb-2">Release Date: {movie.release_date}</p>
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  //grabbing id from getStaticPaths
  const { id } = context.params;

  const response = await axios(
    `${movieServer}${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movie = response.data;

  return {
    props: { movie },
  };
}

export async function getStaticPaths() {
  const res = await axios(
    `${movieServer}popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movies = res.data.results;

  const ids = movies.map((movie) => movie.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}

export default Movie;
