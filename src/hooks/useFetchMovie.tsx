import { useQuery } from "@tanstack/react-query";
import { actions, fetchMovie } from "../actions";

export const useFetchMovie = (id: string) => {
  const query = useQuery(["movie", id], () => actions.fetchMovie(id));

  return query;
};
