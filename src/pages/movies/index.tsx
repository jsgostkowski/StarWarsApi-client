import { Movies } from "../../types";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import { getUrlID } from "../../actions";

const Movies = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      {data.results.map((movie, i) => {
        return (
          <Link
            href={`/movies/${getUrlID(movie.url)}/`}
            key={`${movie.episode_id} ${movie.title}`}
          >
            <a>
              <h1>{movie.title}</h1>
              <p>{getUrlID(movie.url)}</p>
              <p>{movie.producer}</p>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://swapi.py4e.com/api/films");
  const data: Movies = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default Movies;
