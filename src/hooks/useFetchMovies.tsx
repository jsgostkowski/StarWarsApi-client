import { useQuery } from "@tanstack/react-query";
import { actions, fetchMovies } from "../actions";

export const useFetchMovies = () => {
  const query = useQuery(["movies"], () => actions.fetchMovies());

  return query;
};
