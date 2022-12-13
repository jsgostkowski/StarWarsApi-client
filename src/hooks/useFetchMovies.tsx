import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../actions";

export const useFetchMovies = () => {
  const query = useQuery(["movies"], () => fetchMovies());

  return query;
};
