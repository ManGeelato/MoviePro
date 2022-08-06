import HomePage from "../components/HomePage";
import axios from "axios";
import { movieServer } from "../config/index";
import Popular from "../components/Popular";

export default function Home({movies}) {
  return (
    <div className="bg-gray-600">
      <HomePage />
      <Popular movies={movies.results} />
    </div>
  )
}

export async function getStaticProps(){
  const response = await axios(`${movieServer}popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);

  const movies = response.data;

  return {
    props: {movies},
  }
}
